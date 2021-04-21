/**
 * Returns the current datime in ISOFormat
 * @example
 * // returns "4/19/2021, 8:53:49 AM"
 * nowToday();
 * @return {string} the current datime in Japanese Standard Time
 */
function nowToday(): string {
  let now = new Date();
  let nowISO = now.toISOString();
  // Info.Println("The current time is: ", jpn_now.String())
  return nowISO;
}

/**
 * Returns if it is a weekday or not
 * @param {string} dateTime
 * @return {boolean} true if it is weekday, else not
 */
function checkWkday(dateTime: string): boolean {
  // default
  let weekdayFlag = false;
  // Create a date object
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
 * @example
 * // returns "2021年04月01日(木)"
 * @param {string} dateTime
 * @return {string} today's date in Japanese language
 */
function getJapaneseDate(dateTime: string): string {
  // Create a date object for convenience
  let dateObj = new Date(dateTime);
  let daysJpn: string[];
  daysJpn = ["日", "月", "火", "水", "木", "金", "土"];
  let dayJpn = daysJpn[dateObj.getDay()]; // => 木

  // // date = '{}月{}日({})'.format(now.month,now.day, yobi)
  // // logger.info("Today's date is {}".format(date))
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let day = dateObj.getDay();
  let dateJpn = `${year}年${month}月${day}日(${dayJpn})`;
  // fmt.Println(date)
  return dateJpn;
}

let dateTime = nowToday();
let dateFlag = checkWkday(dateTime);
let dateJpn = getJapaneseDate(dateTime);

console.log(dateFlag);
console.log(dateJpn);
