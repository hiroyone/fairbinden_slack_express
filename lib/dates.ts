// /*
//  This function returns Japanese Standard Time
// */
// func nowToday() time.Time {
// 	// logger.info("now_today fn")
// 	jst, _ := time.LoadLocation("Asia/Tokyo")
// 	// Info.Println("The time zone is: ", jst.String())
// 	now := time.Now().In(jst)
// 	Info.Println("The current time is: ", now.String())
// 	if now.Hour() < 11 {
// 		now = now.AddDate(0, 0, -1)
// 	}
// 	return now
// }


// /*
//  This function returns if it is a weekday today
// */
// func checkWkday(now time.Time) bool {
// 	x := false
// 	if now.Weekday() >= 1 && now.Weekday() <= 5 {
// 		x = true
// 		Info.Println("It is a Weekday today")
// 	} else {
// 		Info.Println("It is the weekend")
// 	}
// 	return x
// }

// /*
// Get a today's date in Japanese
// */
// func getJapaneseDate(now time.Time) string {
// 	yobiArray := [7]string{"日", "月", "火", "水", "木", "金", "土"}
// 	yobi := yobiArray[now.Weekday()] // => 木
// 	// date = '{}月{}日({})'.format(now.month,now.day, yobi)
// 	// logger.info("Today's date is {}".format(date))
// 	date := fmt.Sprintf("%d年%d月%d日(%s)", now.Year(), now.Month(), now.Day(), yobi)
// 	fmt.Println(date)
// 	return date
// }
