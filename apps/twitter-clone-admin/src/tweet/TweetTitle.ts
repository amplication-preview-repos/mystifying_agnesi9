import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "id";

export const TweetTitle = (record: TTweet): string => {
  return record.id?.toString() || String(record.id);
};
