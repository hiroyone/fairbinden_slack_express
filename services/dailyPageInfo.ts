import { getNowToday, checkWeekday, getJapaneseDate } from "./dates";
import { createDayURL } from "./dayURL";
import { getDayMenuURL, getTitle, getMainText, getImageURL } from "./post";
import { sendSlackMessage } from "./webhook";
import process from "process";

/**
 * Post the content info scraped from the website to Slack channel by webhook for a specified date
 * @param {string} webhookURL - Slack Channel
 * @param {string} websiteURL - URL for the website
 * @param {string} dateTime - datetime for which to get the content info
 * @return {boolean} True if the post request is successful
 */

export const sendDailyPageInfoToSlack = async (
  webhookURL: string,
  websiteURL: string
  // TO do: Use datetime
  // dateTime: Date
): Promise<boolean> => {
  try {
    // const dateTime = nowToday();
    const dateTime = new Date("2021-04-05T11:10+09:00");
    const dateFlag = checkWeekday(dateTime);
    const dateJpn = getJapaneseDate(dateTime);
    const dailyURL = createDayURL(dateTime, "https", "xn--jvrr89ebqs6yg.tokyo");
    const dailyMenuURL = await getDayMenuURL(
      dailyURL,
      "#archive_post_list > li > div > h3 > a"
    );
    const menuTitle = await getTitle(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > h2"
    );
    const menuMainText = await getMainText(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > div.post_content.clearfix"
    );

    const menuImageURL = await getImageURL(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > div.post_image > img"
    );

    console.log(dateFlag);
    console.log(dateJpn);
    console.log(dailyURL.href);
    console.log(dailyMenuURL);
    console.log(menuTitle);
    console.log(menuMainText);
    console.log(menuImageURL);

    const yourWebHookURL = new URL(process.env.CHANNEL_STG as string); // PUT YOUR WEBHOOK URL HERE

    // const userAccountNotification = JSON.stringify({});

    const fairbindenLunchACtion = {
      type: "button",
      text: "今日のランチ🍚",
      url: dailyMenuURL,
      style: "primary",
    };

    let officeLunchAction;
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
      officeLunchAction = {};
    }

    const userAccountNotification = JSON.stringify({
      attachments: [
        {
          // this defines the attachment block, allows for better layout usage
          color: "#36a64f", // color of the attachments sidebar.
          fallback: "情報を正しく取れませんでした",
          pretext: dateJpn + "のランチです！",
          actions: [fairbindenLunchACtion, officeLunchAction],
          author_name: "フェアビンデン Express!",
          author_link: "http://xn--jvrr89ebqs6yg.tokyo/",
          title: menuTitle,
          title_link: dailyMenuURL,
          text: menuMainText,
          image_url: menuImageURL,
          footer: "税込800円 11:00-14:00",
          timestamp: getNowToday().getTime(),
        },
      ],
    });

    sendSlackMessage(yourWebHookURL, userAccountNotification);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  sendDailyPageInfoToSlack,
};
