import axios from "axios";
import { JSDOM } from "jsdom";

/**
 * Returns the title in the URL page
 * @param {URL} pageURL
 * @example
 * returns "豚肉のズッキーニ巻きフライ"
 * getTitle(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"),"#single_post > h2")
 * @return {string} the title from the URL
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
 * @param {string} pageURL
 * @example
 * return "群馬県の下仁田ミートを使って ...";
 * getMainTexts(new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"),"#single_post > div.post_content.clearfix")
 * @return {string} the main texts from URL
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
 * @param {string} pageURL
 * @return {string} the main image URL in the URL page
 */
function getImageURL(pageURL: string): string {
  // 	url, _ := url.Parse(dayMenuURL)
  // 	domain := url.Host
  // 	fmt.Println("Allowed Domain:", domain)
  // 	var imageURL string

  // 	c := colly.NewCollector(
  // 		// Restrict crawling to specific domains
  // 		colly.AllowedDomains(domain),
  // 		// Allow visiting the same page multiple times
  // 		colly.AllowURLRevisit(),
  // 		// Allow crawling to be done in parallel / async
  // 		colly.Async(false),
  // 	)
  // 	c.Limit(&colly.LimitRule{
  // 		// Filter domains affected by this rule
  // 		DomainGlob: domain + "/*",
  // 		// Set a delay between requests to these domains
  // 		Delay: 1 * time.Second,
  // 		// Add an additional random delay
  // 		RandomDelay: 1 * time.Second,
  // 	})

  // 	c.OnHTML(".post_image", func(e *colly.HTMLElement) {
  // 		// Extract the link from the anchor HTML element
  // 		imageURL = e.ChildAttr("img", "src")
  // 	})
  // 	c.Visit(dayMenuURL)

  // 	fmt.Println("The image is: ", imageURL)
  return "http://xn--jvrr89ebqs6yg.tokyo/wp-content/uploads/2021/04/IMG_0408-2048x1536.jpg";
}
