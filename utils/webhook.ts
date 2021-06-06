import axios, { AxiosResponse } from "axios";

/**
 * Handles the actual sending request.
 * @param webhookURL
 * @param messageBody
 * @return {Promise}
 */
export async function sendSlackMessage(
  webhookURL: URL,
  messageBody: JSON
): Promise<void | AxiosResponse<any>> {
  try {
    const response = await axios.post(webhookURL.href, messageBody);
    return response;
  } catch (err) {
    alert(err);
  }
}
