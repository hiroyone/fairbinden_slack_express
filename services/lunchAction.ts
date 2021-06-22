import { Action } from "../interfaces/slackWebhook";

export function buildLunchAction(
  text: string,
  urlStr: string,
  id: string,
  style: string
): Action {
  const lunchAction = {
    type: "button",
    text: {
      type: "plain_text",
      text: "やっぱり会社の弁当🍱",
      emoji: true,
    },
    action_id: id,
    url: urlStr,
    style: style,
  };
  return lunchAction;
}
