import axios from "axios";
import { JSDOM } from "jsdom";

/**
 * Returns the element from a page by given URL and selectors
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
    console.log(err);
  }
}
