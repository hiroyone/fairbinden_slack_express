import { getElementBySelectors } from "../utils/parser";

/**
 * Returns the menu URL for the specified date
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
