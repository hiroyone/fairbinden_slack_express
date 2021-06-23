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
): Promise<AxiosResponse<any>> {
  const response = await axios.post(webhookURL.href, messageBody);
  return response;
}
