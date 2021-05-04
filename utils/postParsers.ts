/**
 * Returns the title in the URL page
 * @param {string} pageURL
 * @return {string} the title from the URL
 */
function getTitle(pageURL: string): string {
  // url, _ := url.Parse(dayMenuURL)
  // domain := url.Host
  // Info.Println("Allowed Domain:", domain)
  // var title string

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

  // c.OnHTML(".post_title", func(e *colly.HTMLElement) {
  // 	title = e.Text
  // })
  // c.Visit(dayMenuURL)

  // Info.Println("Title is: ", title)
  // return &title
  return "豚肉のズッキーニ巻きフライ";
}

/**
 * Returns the main texts in the URL page
 * @param {string} pageURL
 * @return {string} the main texts from URL
 */
function getMainTexts(pageURL: string): string {
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
  return "群馬県の下仁田ミートを使って ...";
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
