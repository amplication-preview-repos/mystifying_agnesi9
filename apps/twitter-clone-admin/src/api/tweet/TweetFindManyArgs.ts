import { TweetWhereInput } from "./TweetWhereInput";
import { TweetOrderByInput } from "./TweetOrderByInput";

export type TweetFindManyArgs = {
  where?: TweetWhereInput;
  orderBy?: Array<TweetOrderByInput>;
  skip?: number;
  take?: number;
};
