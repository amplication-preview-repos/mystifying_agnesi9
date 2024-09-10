import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
