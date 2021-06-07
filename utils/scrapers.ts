import { getElementBySelectors } from "./element";

/**
 * Returns the menu URL for the specified date
 * @example
 * // returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/")
 * getDailyMenuURL(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"), "#archive_post_list > li > div > h3 > a")
 */
export async function getDailyMenuURL(
  dailyURL: URL,
  selectors: string
): Promise<null | void | URL> {
  try {
    const dailyMenuURLEl = await getElementBySelectors(dailyURL, selectors);
    const dailyMenuURLStr =
      dailyMenuURLEl === undefined ? null : dailyMenuURLEl.getAttribute("href");
    const dailyMenuURL =
      dailyMenuURLStr === null ? null : new URL(dailyMenuURLStr);
    // Info.Println("Main Text is: ", mainText)
    return dailyMenuURL;
  } catch (err) {
    console.log(err);
  }
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
): Promise<string | null | void> {
  try {
    const titleEl = await getElementBySelectors(pageURL, selectors);
    const title = titleEl === undefined ? null : titleEl.innerHTML;
    // Info.Println("Title is: ", Title)
    return title;
  } catch (err) {
    console.log(err);
  }
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
): Promise<void | null | string> {
  try {
    const mainTextEl = await getElementBySelectors(pageURL, selectors);
    const mainText = mainTextEl === undefined ? null : mainTextEl.textContent;
    // Info.Println("Main Text is: ", mainText)
    return mainText;
  } catch (err) {
    console.log(err);
  }
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
): Promise<void | null | URL> {
  try {
    const mainImageEl = await getElementBySelectors(pageURL, selectors);
    const mainImageURLString =
      mainImageEl === undefined ? null : mainImageEl.getAttribute("src");
    const mainImageURL =
      mainImageURLString === null ? null : new URL(mainImageURLString);
    // Info.Println("Main Text is: ", mainText)
    return mainImageURL;
  } catch (err) {
    console.log(err);
  }
}
