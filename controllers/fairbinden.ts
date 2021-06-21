import { MiddlewareFn, Protocol } from "../interfaces/middleware";
import { getNowToday, checkWeekday, getJapaneseDate } from "../utils/dates";
import { createDayURL } from "../services/dayURL";
import {
  getDayMenuURL,
  getTitle,
  getMainText,
  getImageURL,
} from "../services/post";
import { sendSlackMessage } from "../utils/webhook";
import process from "process";
import { Action, Attachment, Payload } from "../interfaces/slackWebhook";

/**
 * Post the content info scraped from the website to Slack channel by webhook for a specified date
 */
export const sendFairbindenLunchMenuToSlack: MiddlewareFn = async (
  req,
  res,
  next
) => {
  const { user, content } = req.body;

  // Info.Println("Run SendSlack Function")
  const webHookURL = new URL(process.env.WEB_HOOK_URL as string);

  const fairbinden = { protocol: "https", host: "xn--jvrr89ebqs6yg.tokyo" };
  try {
    // TO DO: Inject a time parameter from Post body
    // const dateTime = new Date("2021-04-05T11:10+09:00");
    const dateTime = getNowToday();
    const dateJpn = getJapaneseDate(dateTime);
    const dailyURL = createDayURL(
      dateTime,
      fairbinden.protocol as Protocol,
      fairbinden.host
    );
    const dateFlag = checkWeekday(dateTime);

    let dailyMenuURL: void | URL | null;
    if (dateFlag) {
      dailyMenuURL = await getDayMenuURL(
        dailyURL,
        "#archive_post_list > li > div > h3 > a"
      );
    } else {
      throw "Today is not a weekday.";
    }

    // If daily menu URL is found, get article contents
    let menuMainText, menuTitle, menuImageURL;
    if (dailyMenuURL) {
      menuTitle = await getTitle(dailyMenuURL, "#single_post > h2");
      menuMainText = await getMainText(
        dailyMenuURL,
        "#single_post > div.post_content.clearfix"
      );
      menuImageURL = await getImageURL(
        dailyMenuURL,
        "#single_post > div.post_image > img"
      );
    } else {
      throw "Daily Menu URL does not exists";
    }

    const fairbindenLunchACtion: Action = {
      type: "button",
      text: "今日のランチ🍚",
      url: (dailyMenuURL as URL).href,
      style: "primary",
    };

    let officeLunchAction: Action;
    // To do give an env variable
    const officeLunchURL = process.env.CHANNEL_OFFICE_BEN as string;
    // OfficeLunch is not available on Friday in my company
    if (getNowToday().getDay() <= 4) {
      officeLunchAction = {
        type: "button",
        text: "やっぱり会社の弁当🍱",
        url: officeLunchURL,
        style: "danger",
      };
    } else {
      // To do suppress this more elegantly
      officeLunchAction = {
        type: "",
        text: "",
        url: "",
        style: "",
      };
    }

    let attachment: Attachment;
    if (menuTitle && menuMainText && menuImageURL) {
      attachment = {
        // this defines the attachment block, allows for better layout usage
        color: "#36a64f", // color of the attachments sidebar.
        fallback: "情報を正しく取れませんでした",
        pretext: dateJpn + "のランチです！",
        actions: [fairbindenLunchACtion, officeLunchAction],
        author_name: "フェアビンデン Express!",
        author_link: fairbinden.host,
        title: menuTitle,
        title_link: dailyMenuURL.href,
        text: menuMainText,
        image_url: menuImageURL.href,
        footer: "税込800円 11:00-14:00",
        ts: getNowToday().getTime(),
      };

      const payload: Payload = {
        attachments: [attachment],
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
