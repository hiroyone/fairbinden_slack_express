/**
 * Returns the current datime in ISOFormat
 * @example
 * // returns "4/19/2021, 8:53:49 AM"
 * nowToday();
 * @return {Date} the current datime in Japanese Standard Time
 */
export function nowToday(): Date {
  const now = new Date();
  // Info.Println("The current time is: ", jpn_now.String())
  return now;
}

/**
 * Returns if it is a weekday or not
 * @param {Date} dateTime
 * @return {boolean} true if it is weekday, else not
 */
export function checkWkday(dateTime: Date): boolean {
  // default
  let weekdayFlag = false;
  // Create a date object
  if (dateTime.getDay() >= 1 && dateTime.getDay() <= 5) {
    weekdayFlag = true;
    // Info.Println("It is a Weekday today");
  } else {
    // Info.Println("It is the weekend");
  }
  return weekdayFlag;
}

/**
 * Returns today's date in Japanese language
 * @example
 * // returns "2021年04月01日(木)"
 * @param {Date} dateTime
 * @return {string} today's date in Japanese language
 */
export function getJapaneseDate(dateTime: Date): string {
  // Create a date object for convenience
  const daysJpn = ["日", "月", "火", "水", "木", "金", "土", "先"];
  const dayJpn = daysJpn[dateTime.getDay()]; // => 木

  // // logger.info("Today's date is {}".format(date))
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth();
  const day = dateTime.getDay();
  const dateJpn = `${year}年${month}月${day}日(${dayJpn})`;
  // fmt.Println(date)
  return dateJpn;
}
