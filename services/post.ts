import { getElementBySelectors } from "../utils/parser";

/**
 * Returns the menu URL for the specified date
 * @example
 * // returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/")
 * getDailyMenuURL(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"), "#archive_post_list > li > div > h3 > a")
 */
export async function getDayMenuURL(
  pageURL: URL,
  selectors: string
): Promise<URL | null> {
  const dailyMenuURLEl = await getElementBySelectors(pageURL, selectors);
  const dailyMenuURLStr = dailyMenuURLEl.getAttribute("href");
  const dailyMenuURL =
    dailyMenuURLStr === null ? null : new URL(dailyMenuURLStr);
  console.log("Main URL is: ", dailyMenuURL);
  return dailyMenuURL;
}

/**
 * Returns the title in the URL page
 * @example
 * // returns "豚肉のズッキーニ巻きフライ"
 * getTitle(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"),"#single_post > h2")
 */
export async function getTitle(
  pageURL: URL,
  selectors: string
): Promise<string | null> {
  const titleEl = await getElementBySelectors(pageURL, selectors);
  const title = titleEl.innerHTML;
  console.log("Title is: ", title);
  return title;
}

/**
 * Returns the main texts in the URL page
 * @example
 * // return "群馬県の下仁田ミートを使って ...";
 * getMainTexts(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"),"#single_post > div.post_content.clearfix")
 */
export async function getMainText(
  pageURL: URL,
  selectors: string
): Promise<null | string> {
  const mainTextEl = await getElementBySelectors(pageURL, selectors);
  const mainText = mainTextEl.textContent;
  console.log("Main Text is: ", mainText);
  return mainText;
}

/**
 * Returns the main image URL in the URL page
 * @example
 * // return "http://xn--jvrr89ebqs6yg.tokyo/wp-content/uploads/2021/04/IMG_0408-2048x1536.jpg";
 * getMainTexts(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"),"#single_post > div.post_image > img")
 */
export async function getImageURL(
  pageURL: URL,
  selectors: string
): Promise<null | URL> {
  const mainImageEl = await getElementBySelectors(pageURL, selectors);
  const mainImageURLString = mainImageEl.getAttribute("src");
  const mainImageURL =
    mainImageURLString === null ? null : new URL(mainImageURLString);
  console.log("Main Image URL is: ", mainImageURL);
  return mainImageURL;
}
