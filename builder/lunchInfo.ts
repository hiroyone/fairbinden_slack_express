import { Protocol, Website } from "../interfaces/middleware";
import { createDayURL } from "../services/dayURL";
import {
  getDayMenuURL,
  getImageURL,
  getMainText,
  getTitle,
} from "../services/post";
import { lunchInfo } from "../interfaces/lunchInfo";

export async function getLunchInfo(
  dateTime: Date,
  dateFlag: boolean,
  lunchWebsite: Website
): Promise<lunchInfo> {
  const dailyURL = createDayURL(
    dateTime,
    lunchWebsite.protocol as Protocol,
    lunchWebsite.host
  );

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

  const fairbindenLunchInfo = {
    dailyMenuURL: dailyMenuURL,
    menuMainText: menuMainText,
    menuTitle: menuTitle,
    menuImageURL: menuImageURL,
  };

  return fairbindenLunchInfo;
}
