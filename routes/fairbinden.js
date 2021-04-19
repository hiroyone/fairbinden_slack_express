var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

// /*
// SendSlack Sends a scraped message to Slack
// */
// func SendSlack(w http.ResponseWriter, r *http.Request) {
// 	Init(ioutil.Discard, os.Stdout, os.Stdout, os.Stderr)
// 	// Logging Examples
// 	// Trace.Println("I have something standard to say")
// 	// Info.Println("Special Information")
// 	// Warning.Println("There is something you need to know about")
// 	// Error.Println("Something has failed")

// 	Info.Println("Run SendSlack Function")
// 	env := os.Getenv("ENV")

// 	now := nowToday()
// 	// For debugging: weekday menu
// 	// now := time.Date(2019, 6, 27, 23, 59, 59, 0, time.UTC)

// 	var webhookURL string
// 	if env == "PRD" {
// 		webhookURL = os.Getenv("channelPRD")
// 	} else if env == "STG" {
// 		webhookURL = os.Getenv("channelSTG")
// 	} else {
// 		Error.Println("The value must be either PRD or STG")
// 	}

// 	if dayURL, err := getDailyURL(now); err != nil {
// 		// panic(err)
// 		Info.Println("No posting to Slack:", err)
// 		// Write a text to HTTP page
// 		w.Write([]byte(fmt.Sprint("No posting to Slack:", err)))
// 	} else {
// 		Info.Println("Get article data")
// 		// Daily Menu if exists
// 		if dayMenuURL, err := getDailyMenuURL(*dayURL); err != nil {
// 			// panic(err)
// 			Info.Println("No posting to Slack:", err)
// 			// Write a text to HTTP page
// 			w.Write([]byte(fmt.Sprint("No posting to Slack:", err)))
// 		} else {
// 			mainText := *getMainTexts(*dayMenuURL)
// 			title := *getTitle(*dayMenuURL)
// 			imageURL := *getImageURL(*dayMenuURL)

// 			Info.Println("Other meta data")
// 			japaneseDate := getJapaneseDate(now)
// 			unixTime := now.Unix()

// 			Info.Println("Today's lunch menu URL:", *dayMenuURL)
// 			lunchAction := Action{
// 				Type:  "button",
// 				Text:  "今日のランチ🍚",
// 				Url:   *dayMenuURL,
// 				Style: "primary",
// 			}

// 			var officeLunchAction Action
// 			officeLunchURL := os.Getenv("channelOfficeBen")
// 			Info.Println("Office Lunch URL: ", officeLunchURL)

// 			// OfficeLunch is not available on Friday in my company
// 			if now.Weekday() <= 4 {
// 				officeLunchAction = Action{
// 					Type:  "button",
// 					Text:  "やっぱり会社の弁当🍱",
// 					Url:   officeLunchURL,
// 					Style: "danger",
// 				}
// 			} else {
// 				officeLunchAction = Action{}
// 			}

// 			Info.Println("Prepare attachments for slack posting")
// 			attachments := Attachment{
// 				Fallback:   "Required plain-text summary of the attachment.",
// 				Color:      "#36a64f",
// 				PreText:    japaneseDate + "のランチです！",
// 				Actions:    []Action{lunchAction, officeLunchAction},
// 				AuthorName: "フェアビンデン GO!",
// 				AuthorLink: "http://xn--jvrr89ebqs6yg.tokyo/",
// 				AuthorIcon: "http://flickr.com/icons/bobby.jpg",
// 				Title:      title,
// 				TitleLink:  *dayMenuURL,
// 				Text:       mainText,
// 				ImageURL:   imageURL,
// 				// ThumbnailURL: "http://example.com/path/to/thumb.png",
// 				Footer: "税込800円 11:00-14:00",
// 				// FooterIcon: "https://platform.slack-edge.com/img/default_application_icon.png",
// 				Timestamp: unixTime,
// 			}

// 			Info.Println("Post a message to Slack")
// 			payload := Payload{
// 				Attachments: []Attachment{attachments},
// 			}
// 			err := send(webhookURL, "", payload)
// 			if len(err) > 0 {
// 				fmt.Printf("error: %s\n", err)
// 			}

// 			// Write a text to HTTP page
// 			w.Write([]byte((mainText)))
// 		}
// 	}
// }