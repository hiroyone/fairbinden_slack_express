import axios from "axios";
import { JSDOM } from "jsdom";

/**
 * Returns the menu URL for the specified date
 * @example
 * // returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/")
 * getDailyMenuURL(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"), "#archive_post_list > li > div > h3 > a")
 */
export async function getElementBySelectors(
  pageURL: URL,
  selectors: string
): Promise<Element | void> {
  try {
    const response = await axios.get(pageURL.href);
    const pageHTML = new JSDOM(response.data);

    const elementBySelectors = pageHTML.window.document.querySelector(
      selectors
    );

    if (elementBySelectors === null) {
      throw new Error("The element does not exists for the given selectors!");
    } else {
      // Info.Println("Element is: ", elementBySelectors)
      return elementBySelectors;
    }
  } catch (err) {
    alert(err);
  }
}

    let dailyMenuURL: URL;
    if (dailyMenuURLStr === null) {
      throw new Error("The href does not exists for the given element");
    } else {
      dailyMenuURL = new URL(dailyMenuURLStr);
    }
    // Info.Println("Daily Menu URL is ", dayMenuURL)
    return dailyMenuURL;
  } catch (err) {
    alert(err);
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
): Promise<string | void> {
  try {
    const response = await axios.get(pageURL.href);
    const dailyMenuPageHtml = new JSDOM(response.data);

    const titleElement = dailyMenuPageHtml.window.document.querySelector(
      selectors
    );

    if (titleElement === null) {
      throw new Error("The element does not exists for the given selectors!");
    } else {
      // Info.Println("Title is: ", title)
      return titleElement.innerHTML;
    }
  } catch (err) {
    alert(err);
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
): Promise<string | void | null> {
  try {
    const response = await axios.get(pageURL.href);
    const dailyMenuPageHtml = new JSDOM(response.data);

    const mainTextElement = dailyMenuPageHtml.window.document.querySelector(
      selectors
    );
    if (mainTextElement === null) {
      throw new Error("The element does not exists for the given selectors!");
    } else {
      // 	Info.Println("The texts: ", texts)
      return mainTextElement.textContent;
    }
  } catch (err) {
    alert(err);
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
): Promise<string | void | null> {
  try {
    const response = await axios.get(pageURL.href);
    const dailyMenuPageHtml = new JSDOM(response.data);

    const mainImageElement = dailyMenuPageHtml.window.document.querySelector(
      selectors
    );
    if (mainImageElement === null) {
      throw new Error("The element does not exists for the given selectors!");
    } else {
      // 	fmt.Println("The image is: ", imageURL)
      return mainImageElement.getAttribute("src");
    }
  } catch (err) {
    alert(err);
  }
}
