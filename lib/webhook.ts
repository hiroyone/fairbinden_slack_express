// func redirectPolicyFunc(req gorequest.Request, via []gorequest.Request) error {
// 	return fmt.Errorf("Incorrect token (redirection)")
// }

// func send(webhookUrl string, proxy string, payload Payload) []error {
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

// 	return nil
// }