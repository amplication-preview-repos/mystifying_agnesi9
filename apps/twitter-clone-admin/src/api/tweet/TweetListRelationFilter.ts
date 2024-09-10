import { TweetWhereInput } from "./TweetWhereInput";

export type TweetListRelationFilter = {
  every?: TweetWhereInput;
  some?: TweetWhereInput;
  none?: TweetWhereInput;
};
