/**
 * Returns the current datime in Japanese Standard Time
 * @example
 * // returns "4/19/2021, 8:53:49 AM"
 * nowToday();
 * @return {string} the current datime in Japanese Standard Time
 */
function nowToday(): string {
  let now = new Date();
  let timeOption = { timeZone: "Asia/Tokyo" };
  let jpn_now = now.toLocaleString("ja-JP-u-ca-japanese", timeOption);
  // Info.Println("The current time is: ", jpn_now.String())
  return jpn_now;
}

/**
 * Returns if it is a weekday or not
 * @param {string} dateTime
 * @return {boolean} true if it is weekday, else not
 */
function checkWkday(dateTime: string): boolean {
  // default
  x = false;
  // if now.Weekday() >= 1 && now.Weekday() <= 5 {
  let weekdayFlag = false;
  let dateObj = new Date(dateTime);
  if (dateObj.getDay() >= 1 && dateObj.getDay() <= 5) {
    weekdayFlag = true;
    // Info.Println("It is a Weekday today");
  } else {
    // Info.Println("It is the weekend");
  }
  return weekdayFlag;
}

/**
 * Returns today's date in Japanese language
 * @param {string} dateTime
 * @return {string} today's date in Japanese language
 */
function getJapaneseDate(dateTime: string): string {
  // yobiArray := [7]string{"日", "月", "火", "水", "木", "金", "土"}
  // yobi := yobiArray[now.Weekday()] // => 木
  // // date = '{}月{}日({})'.format(now.month,now.day, yobi)
  // // logger.info("Today's date is {}".format(date))
  // date := fmt.Sprintf("%d年%d月%d日(%s)", now.Year(), now.Month(), now.Day(), yobi)
  // fmt.Println(date)
  return "2021年04月01日(木)";
}
