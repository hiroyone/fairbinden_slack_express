/**
 * Returns the current datime in ISOFormat
 * @return {Date} the current datime in Japanese Standard Time
 */
export function getNowToday(): Date {
  const now = new Date();
  console.log("The current time is: ", jpn_now.String());
  return now;
}

/**
 * Returns if it is a weekday or not
 */
export function checkWeekday(dateTime: Date): boolean {
  // default
  let weekdayFlag = false;
  // Create a date object
  if (dateTime.getDay() >= 1 && dateTime.getDay() <= 5) {
    weekdayFlag = true;
    console.log("It is a Weekday today");
  } else {
    console.log("It is the weekend");
  }
  return weekdayFlag;
}

/**
 * Returns today's date in Japanese language
 * @example
 * // returns "2021年04月01日(木)"
 */
export function getJapaneseDate(dateTime: Date): string {
  // Create a date object for convenience
  const daysJpn = ["日", "月", "火", "水", "木", "金", "土"];
  const dayJpn = daysJpn[dateTime.getDay()]; // => 木

  // // logger.info("Today's date is {}".format(date))
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const date = dateTime.getDate();
  const dateJpn = `${year}年${month}月${date}日(${dayJpn})`;
  // fmt.Println(date)
  return dateJpn;
}
