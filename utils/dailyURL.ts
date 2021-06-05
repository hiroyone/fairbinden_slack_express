// Helper function to add leading zero padding to a number
const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, "0");

/**
 * Returns the daily URL for the specified date
 * @example
 * returns new URL("https://xn--jvrr89ebqs6yg.tokyo/2021/04/19/")
 * getDailyURL(dateTime, "https", "xn--jvrr89ebqs6yg.tokyo");
 * @param {Date} datetime
 * @param {"http" | "https"}} protocol
 * @param {string} hostname
 * @return {URL} the daily URL for the specified date
 */
export function getDailyURL(
  datetime: Date,
  protocol: "http" | "https",
  hostname: string
): URL {
  // Define an interface for protocol and hostname
  const year = datetime.getFullYear();
  const month = datetime.getMonth() + 1;
  const date = datetime.getDate();

  // Add leading zero to numbers
  const zeroPadMonth = zeroPad(month, 2);
  const zeroPadDay = zeroPad(date, 2);

  // URL construction
  const dailyURL = new URL(
    protocol +
      "://" +
      hostname +
      "/" +
      year +
      "/" +
      zeroPadMonth +
      "/" +
      zeroPadDay +
      "/"
  );
  // 	Info.Println("Today's URL is", dayURL)
  return dailyURL;
}
