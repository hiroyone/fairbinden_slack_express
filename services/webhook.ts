import axios, { AxiosResponse } from "axios";

/**
 * Handles the actual sending request.
 * @param webhookURL
 * @param messageBody
 * @return {Promise}
 */
export async function sendSlackMessage(
  webhookURL: URL,
  messageBody: string
): Promise<void | AxiosResponse<any>> {
  try {
    const response = await axios.post(webhookURL.href, messageBody);
    return response;
  } catch (err) {
    console.log(err);
  }
}
