/**
 * Returns 
 *
 * @return {string} the today's url for fairbinden lunch
 */

// /*
// Get a today's url for fairbinden lunch
// */
// func getDailyURL(now time.Time) (*string, error) {
// 	if checkWeekday(now) {
// 		year := now.Year()
// 		month := int(now.Month())
// 		day := now.Day()
// 		// Convert each value into string and join them into url path
// 		datePath := path.Join(strconv.Itoa(year), fmt.Sprintf("%02d", month), fmt.Sprintf("%02d", day))
// 		domain := "http://xn--jvrr89ebqs6yg.tokyo/"
// 		url, _ := url.Parse(domain)
// 		url.Path = path.Join(url.Path, datePath)
// 		dayURL := url.String()
// 		Info.Println("Today's URL is", dayURL)
// 		return &dayURL, nil
// 	}
// 	return nil, errors.New("no lunch on the weekend")
// }

// /*
// Get a today's menu URL for fairbinden
// ref: https://benjamincongdon.me/blog/2018/03/01/Scraping-the-Web-in-Golang-with-Colly-and-Goquery/
// */
// func getDailyMenuURL(dayURL string) (*string, error) {
// 	var dayMenuURL string
// 	url, _ := url.Parse(dayURL)
// 	domain := url.Host
// 	fmt.Println("Allowed Domain:", domain)

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

// 	c.OnHTML("h3.title", func(e *colly.HTMLElement) {
// 		// Extract the link from the anchor HTML element
// 		link := e.ChildAttr("a", "href")
// 		// Info.Println(link)
// 		// Tell the collector to visit the link
// 		if strings.Contains(link, dayURL) {
// 			// Info.Println("Found daily URL link: ", e.Request.AbsoluteURL(link))
// 			// Info.Println("Found text: ", e.Text)
// 			dayMenuURL = link
// 		}
// 	})
// 	c.Visit(dayURL)
// 	Info.Println("Daily Menu URL is ", dayMenuURL)
// 	if dayMenuURL != "" {
// 		return &dayMenuURL, nil
// 	}
// 	return nil, errors.New("No lunch menu URL was found")
// }