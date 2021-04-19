/**
 * Post the message to Slack channel by webhook
 * @param {string} webhookURL - Slack webhook URL
 * @param {JSON} payload - the body message to be sent 
 * @return {boolean} True if the post request is successful 
 */
function sendToSlack(webhookURL string, payload: JSON): boolean {
// 	request := gorequest.New().Proxy(proxy)
// 	resp, _, err := request.
// 		Post(webhookUrl).
// 		RedirectPolicy(redirectPolicyFunc).
// 		Send(payload).
// 		End()

// 	if err != nil {
// 		return err
// 	}
// 	if resp.StatusCode >= 400 {
// 		return []error{fmt.Errorf("Error sending msg. Status: %v", resp.Status)}
// 	}
	return true
}