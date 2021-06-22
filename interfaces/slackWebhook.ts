export interface Field {
  title: string;
  value: string;
  short: boolean;
}

// To do: Build more accturate type
export interface Block {
  type: string;
  text?: { type: string; text?: string; emoji?: boolean };
  action_id?: string;
  url?: string;
  style?: string;
}

export interface Action {
  type?: string;
  text?: { type: string; text: string; emoji: boolean };
  action_id?: string;
  url?: string;
  style?: string;
}

export interface Attachment {
  fallback?: string;
  color?: string;
  pretext?: string;
  author_name?: string;
  author_link?: string;
  author_icon?: string;
  title?: string;
  title_link?: string;
  text?: string;
  image_url?: string;
  fields?: Field[];
  footer?: string;
  footer_icon?: string;
  ts?: number;
  mrkdwn_in?: string[];
  actions?: Action[];
  callback_id?: string;
  thumb_url?: string;
}

export interface Payload {
  parse?: string;
  username?: string;
  icon_url?: string;
  icon_emoji?: string;
  channel?: string;
  text?: string;
  link_names?: string;
  attachments?: Attachment[];
  blocks?: unknown[];
  unfurl_links?: boolean;
  unfurl_media?: boolean;
  mrkdwn?: boolean;
}
