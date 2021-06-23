import { Action, Block } from "../interfaces/slackWebhook";

export function buildMenuMessageBlocks(
  date: string,
  dailyMenuURL: URL,
  header: string,
  menuTitle: string,
  menuMainText: string,
  menuImageURL: URL,
  lunchActions: Action[]
): Block[] {
  const menuMessageBlocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: header,
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: date + "のランチです！",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `<${dailyMenuURL.href}|*${menuTitle}*>`,
      },
    },
    {
      type: "image",
      image_url: menuImageURL.href,
      alt_text: `${menuTitle}の画像`,
    },
    {
      type: "section",
      text: {
        type: "plain_text",
        text: menuMainText,
        emoji: true,
      },
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "税込800円 11:00-14:00",
        },
      ],
    },
    {
      type: "actions",
      elements: lunchActions,
    },
  ];
  return menuMessageBlocks;
}
