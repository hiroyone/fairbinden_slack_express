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

/**
 * Post the content info scraped from the website to Slack channel by webhook for a specified date
 */
export const sendFairbindenLunchMenuToSlack: MiddlewareFn = async (
  req,
  res,
  next
) => {
  const { user, content } = req.body;
  const yourWebHookURL = new URL(process.env.CHANNEL_STG as string); // PUT YOUR WEBHOOK URL HERE
  const fairbinden = { protocol: "https", host: "xn--jvrr89ebqs6yg.tokyo" };
  // TO do: Use datetime
  // dateTime: Date
  try {
    // const dateTime = nowToday();
    const dateTime = new Date("2021-04-05T11:10+09:00");
    console.log(dateTime);

    const dateFlag = checkWeekday(dateTime);
    console.log(dateFlag);

    const dateJpn = getJapaneseDate(dateTime);
    console.log(dateJpn);

    const dailyURL = createDayURL(
      dateTime,
      fairbinden.protocol as Protocol,
      fairbinden.host
    );
    console.log(dailyURL.href);

    const dailyMenuURL = await getDayMenuURL(
      dailyURL,
      "#archive_post_list > li > div > h3 > a"
    );
    console.log(dailyMenuURL);

    const menuTitle = await getTitle(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > h2"
    );
    console.log(menuTitle);

    const menuMainText = await getMainText(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > div.post_content.clearfix"
    );
    console.log(menuMainText);

    const menuImageURL = await getImageURL(
      new URL(
        "https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
      ),
      "#single_post > div.post_image > img"
    );
    console.log(menuImageURL);

    // const userAccountNotification = JSON.stringify({});

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

    const sendResult = await sendSlackMessage(
      yourWebHookURL,
      userAccountNotification
    );

    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.send(sendResult);
    // res.sendStatus(201);
    // next();
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500) && next(e);
  }
};
