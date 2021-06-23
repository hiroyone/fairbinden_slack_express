import process from "process";
import { buildLunchAction } from "../builder/lunchAction";
import { buildMenuMessageBlocks } from "../builder/menuMessageBlocks";
import { MiddlewareFn, Protocol, Website } from "../interfaces/middleware";
import { Action, Payload } from "../interfaces/slackWebhook";
import { checkWeekday, getJapaneseDate, getNowToday } from "../utils/dates";
import { sendSlackMessage } from "../utils/webhook";
import { getLunchInfo } from "../builder/lunchInfo";
import { lunchInfo } from "../interfaces/lunchInfo";

/**
 * Post the content info scraped from the website to Slack channel by webhook for a specified date
 */
export const sendFairbindenLunchMenuToSlack: MiddlewareFn = async (
  req,
  res,
  next
) => {
  console.log("Run SendSlack Function");

  const webHookURL =
    req.body.webHookURL || new URL(process.env.WEB_HOOK_URL as string);
  const fairbindenWebsite: Website = {
    protocol: "https" as Protocol,
    host: "xn--jvrr89ebqs6yg.tokyo",
  };

  // Date Vars
  const dateTime = new Date(req.body.lunchDate) || getNowToday();
  const dateJpn = getJapaneseDate(dateTime);
  const dateFlag = checkWeekday(dateTime);

  // Selectors
  const dayMenuURLSelector = "#archive_post_list > li > div > h3 > a";
  const menuTitleSelector = "#single_post > h2";
  const mainTextSelector = "#single_post > div.post_content.clearfix";
  const mainImageURLSelector = "#single_post > div.post_image > img";

  try {
    // Get lunch information based on the target date and website URL
    const {
      dailyMenuURL,
      menuMainText,
      menuTitle,
      menuImageURL,
    } = (await getLunchInfo(
      dateTime,
      dateFlag,
      fairbindenWebsite,
      dayMenuURLSelector,
      menuTitleSelector,
      mainTextSelector,
      mainImageURLSelector
    )) as lunchInfo;

    const fairbindenLunchAction: Action = buildLunchAction(
      "今日のランチ🍚",
      (dailyMenuURL as URL).href,
      "actionId-0",
      "primary"
    );
    let officeLunchAction: Action;
    // OfficeLunch is not available on Friday in my company
    if (getNowToday().getDay() <= 4) {
      const officeLunchURL = process.env.CHANNEL_OFFICE_BEN as string;
      officeLunchAction = buildLunchAction(
        "やっぱり会社の弁当🍱",
        officeLunchURL,
        "actionId-1",
        "danger"
      );
    } else {
      officeLunchAction = {};
    }
    const lunchActions = [fairbindenLunchAction, officeLunchAction];

    if (dailyMenuURL && menuTitle && menuMainText && menuImageURL) {
      const fairbidenBlock = buildMenuMessageBlocks(
        dateJpn,
        dailyMenuURL,
        "フェアビンデン Express!🍽",
        menuTitle,
        menuMainText,
        menuImageURL,
        lunchActions
      );

      const payload: Payload = {
        blocks: fairbidenBlock,
      };

      const payloadJSON = JSON.stringify(payload);
      const sendResult = await sendSlackMessage(webHookURL, payloadJSON);
      res.send("Slack Message: " + sendResult.data);
    } else {
      throw `Some of article information was not found: menuTitle: ${menuTitle}, menuMainText ${menuMainText}, menuImageURL: ${menuImageURL}`;
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
