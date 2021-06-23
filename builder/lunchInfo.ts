import { Website } from "../interfaces/middleware";
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
  lunchWebsite: Website,
  dayMenuURLSelector: string,
  menuTitleSelector: string,
  mainTextSelector: string,
  mainImageURLSelector: string
): Promise<lunchInfo | void> {
  const dailyURL = createDayURL(
    dateTime,
    lunchWebsite.protocol,
    lunchWebsite.host
  );

  let dailyMenuURL: URL | null;
  if (dateFlag) {
    dailyMenuURL = await getDayMenuURL(dailyURL, dayMenuURLSelector);
  } else {
    throw "Today is not a weekday.";
  }

  // If daily menu URL is found, get article contents
  let menuMainText: string | null;
  let menuTitle: string | null;
  let menuImageURL: URL | null;
  if (dailyMenuURL) {
    menuTitle = await getTitle(dailyMenuURL, menuTitleSelector);
    menuMainText = await getMainText(dailyMenuURL, mainTextSelector);
    menuImageURL = await getImageURL(dailyMenuURL, mainImageURLSelector);
  } else {
    throw "Daily Menu URL does not exists";
  }

  const lunchInfo = {
    dailyMenuURL: dailyMenuURL,
    menuMainText: menuMainText,
    menuTitle: menuTitle,
    menuImageURL: menuImageURL,
  };
  return lunchInfo;
}
