// Helper function to add leading zero padding to a number
const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");

/**
 * Returns the daily URL for the specified date
 * @example
 * // returns "http://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"
 * getDailyURL(dateTime, "https", "xn--jvrr89ebqs6yg.tokyo");
 * @param {Date} datetime
 * @param {"http" | "https"}} protocol
 * @param {string} hostname
 * @return {URL} the daily URL for the specified date
 */
function getDailyURL(
  datetime: Date,
  protocol: "http" | "https",
  hostname: string
): URL {
  // Define an interface for protocol and hostname
  let year = datetime.getFullYear();
  let month = datetime.getMonth();
  let day = datetime.getDay();

  // Add leading zero to numbers
  let zeroPadMonth = zeroPad(month, 2);
  let zeroPadDay = zeroPad(day, 2);

  // URL construction
  let dailyURL = new URL(
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
 * @param {string} datetime
 * @return {string} the menu URL for the specified date
 */
function getDailyMenuURL(datetime: string): string {
  // var dayMenuURL string
  // url, _ := url.Parse(dayURL)
  // domain := url.Host
  // fmt.Println("Allowed Domain:", domain)

  // c := colly.NewCollector(
  // 	// Restrict crawling to specific domains
  // 	colly.AllowedDomains(domain),
  // 	// Allow visiting the same page multiple times
  // 	colly.AllowURLRevisit(),
  // 	// Allow crawling to be done in parallel / async
  // 	colly.Async(false),
  // )
  // c.Limit(&colly.LimitRule{
  // 	// Filter domains affected by this rule
  // 	DomainGlob: domain + "/*",
  // 	// Set a delay between requests to these domains
  // 	Delay: 1 * time.Second,
  // 	// Add an additional random delay
  // 	RandomDelay: 1 * time.Second,
  // })

  // c.OnHTML("h3.title", func(e *colly.HTMLElement) {
  // 	// Extract the link from the anchor HTML element
  // 	link := e.ChildAttr("a", "href")
  // 	// Info.Println(link)
  // 	// Tell the collector to visit the link
  // 	if strings.Contains(link, dayURL) {
  // 		// Info.Println("Found daily URL link: ", e.Request.AbsoluteURL(link))
  // 		// Info.Println("Found text: ", e.Text)
  // 		dayMenuURL = link
  // 	}
  // })
  // c.Visit(dayURL)
  // Info.Println("Daily Menu URL is ", dayMenuURL)
  // if dayMenuURL != "" {
  // 	return &dayMenuURL, nil
  // }
  // return nil, errors.New("No lunch menu URL was found")
  return "http://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/";
}
