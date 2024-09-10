import { FollowWhereInput } from "./FollowWhereInput";
import { FollowOrderByInput } from "./FollowOrderByInput";

export type FollowFindManyArgs = {
  where?: FollowWhereInput;
  orderBy?: Array<FollowOrderByInput>;
  skip?: number;
  take?: number;
};
