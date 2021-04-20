/**
 * Returns the daily URL for the specified date
 * @param {string} datetime
 * @return {string} the daily URL for the specified date
 */
function getDailyURL(datetime: string): string {
	// if checkWeekday(now) {
	// 	year := now.Year()
	// 	month := int(now.Month())
	// 	day := now.Day()
	// 	// Convert each value into string and join them into url path
	// 	datePath := path.Join(strconv.Itoa(year), fmt.Sprintf("%02d", month), fmt.Sprintf("%02d", day))
	// 	domain := "http://xn--jvrr89ebqs6yg.tokyo/"
	// 	url, _ := url.Parse(domain)
	// 	url.Path = path.Join(url.Path, datePath)
	// 	dayURL := url.String()
	// 	Info.Println("Today's URL is", dayURL)
	// 	return &dayURL, nil
	// }
	// return nil, errors.New("no lunch on the weekend")
    return "http://xn--jvrr89ebqs6yg.tokyo/2021/04/19/"
}

/**
 * Returns the menu URL for the specified date
 * @param {string} datetime
 * @return {string} the menu URL for the specified date
 */
function getDailyMenuURL(datetime: string): string  {
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
    return "http://xn--jvrr89ebqs6yg.tokyo/2021/04/19/%e8%b1%9a%e8%82%89%e3%81%ae%e3%82%ba%e3%83%83%e3%82%ad%e3%83%bc%e3%83%8b%e5%b7%bb%e3%81%8d%e3%83%95%e3%83%a9%e3%82%a4-6/"
}