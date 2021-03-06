import { Protocol } from "../interfaces/middleware";
import { zeroPad } from "../utils/padding";

/**
 * Returns the daily URL for the specified date
 */
export function createDayURL(
  datetime: Date,
  protocol: Protocol,
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
  console.log("Today's URL is", dailyURL);
  return dailyURL;
}
