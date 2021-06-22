import process from "process";
import { buildLunchAction } from "../builder/lunchAction";
import { buildMenuMessageBlocks } from "../builder/menuMessageBlocks";
import { MiddlewareFn, Protocol } from "../interfaces/middleware";
import { Action, Payload } from "../interfaces/slackWebhook";
import { checkWeekday, getJapaneseDate, getNowToday } from "../utils/dates";
import { sendSlackMessage } from "../utils/webhook";
import { getLunchInfo } from "../builder/lunchInfo";

/**
 * Post the content info scraped from the website to Slack channel by webhook for a specified date
 */
export const sendFairbindenLunchMenuToSlack: MiddlewareFn = async (
  req,
  res,
  next
) => {
  console.log("Run SendSlack Function");

  const lunchDate = req.body.lunchDate;
  const webHookURL =
    req.body.webHookURL || new URL(process.env.WEB_HOOK_URL as string);

  const fairbindenWebsite = {
    protocol: "https" as Protocol,
    host: "xn--jvrr89ebqs6yg.tokyo",
  };

  try {
    const dateTime = new Date(lunchDate) || getNowToday();
    const dateJpn = getJapaneseDate(dateTime);
    const dateFlag = checkWeekday(dateTime);

    const {
      dailyMenuURL,
      menuMainText,
      menuTitle,
      menuImageURL,
    } = await getLunchInfo(dateTime, dateFlag, fairbindenWebsite);

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
