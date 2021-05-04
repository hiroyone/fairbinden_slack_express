import axios from "axios";

// Helper function to add leading zero padding to a number
const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");

/**
 * Returns the daily URL for the specified date
 * @example
 * returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/")
 * getDailyURL(dateTime, "https", "xn--jvrr89ebqs6yg.tokyo");
 * @param {Date} datetime
 * @param {"http" | "https"}} protocol
 * @param {string} hostname
 * @return {URL} the daily URL for the specified date
 */
export function getDailyURL(
  datetime: Date,
  protocol: "http" | "https",
  hostname: string
): URL {
  // Define an interface for protocol and hostname
  const year = datetime.getFullYear();
  const month = datetime.getMonth();
  const day = datetime.getDay();

  // Add leading zero to numbers
  const zeroPadMonth = zeroPad(month, 2);
  const zeroPadDay = zeroPad(day, 2);

  // URL construction
  const dailyURL = new URL(
    protocol +
      "://" +
      hostname +
      "/" +
      year +
      "/" +
      zeroPadMonth +
      "/" +
      zeroPadDay +
      "/"
  );
  // 	Info.Println("Today's URL is", dayURL)
  return dailyURL;
}

/**
 * Returns the menu URL for the specified date
 * @example
 * // returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/")
 * getDailyMenuURL(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"), "#archive_post_list > li > div > h3 > a");
 * @param {URL} dailyURL
 * @param {string} selectors
 * @return {URL} the menu URL for the specified date
 */
export function getDailyMenuURL(dailyURL: URL, selectors: string): URL {
  axios.get(dailyURL.href).then((response) => {
    console.log(response);
  });

  const dailyMenuURLEl = document.querySelector(selectors);
  let dailyMenuURLStr;
  if (dailyMenuURLEl === null) {
    throw new Error("The element does not exists for the given selectors!");
  } else {
    dailyMenuURLStr = dailyMenuURLEl.getAttribute("href");
  }
  let dailyMenuURL;
  if (dailyMenuURLStr === null) {
    throw new Error("The href does not exists for the given element");
  } else {
    dailyMenuURL = new URL(dailyMenuURLStr);
  }
  // Info.Println("Daily Menu URL is ", dayMenuURL)
  return dailyMenuURL;
}

// To do
// 1. Interactive Dev
// 2. Error handling
// 3. Add proper scraping lib
// 4. Promise/then/Fetch/Axios
