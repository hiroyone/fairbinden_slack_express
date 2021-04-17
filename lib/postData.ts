// /*
// Get a today's title for menu
// */
// func getTitle(dayMenuURL string) *string {
// 	url, _ := url.Parse(dayMenuURL)
// 	domain := url.Host
// 	Info.Println("Allowed Domain:", domain)
// 	var title string

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

// 	c.OnHTML(".post_title", func(e *colly.HTMLElement) {
// 		title = e.Text
// 	})
// 	c.Visit(dayMenuURL)

// 	Info.Println("Title is: ", title)
// 	return &title
// }

// /*
// Get a today's texts for menu
// */
// func getMainTexts(dayMenuURL string) *string {
// 	url, _ := url.Parse(dayMenuURL)
// 	domain := url.Host
// 	Info.Println("Allowed Domain:", domain)
// 	var texts string

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
// 	c.OnHTML(".post_content", func(e *colly.HTMLElement) {
// 		e.ForEach("p", func(_ int, elem *colly.HTMLElement) {
// 			// Add * before \n for the left-hand emphasis sign
// 			if strings.Contains(elem.Text, "\n") {
// 				astaTexts := strings.Replace(elem.Text, "\n", "*\n", -1)
// 				texts += "*" + astaTexts + " \n"
// 			} else {
// 				texts += elem.Text + " \n"
// 			}
// 		})
// 	})
// 	c.Visit(dayMenuURL)
// 	Info.Println("The texts: ", texts)
// 	return &texts
// }

// /*
// Get a today's image for menu
// */
// func getImageURL(dayMenuURL string) *string {
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
// 	return &imageURL
// }