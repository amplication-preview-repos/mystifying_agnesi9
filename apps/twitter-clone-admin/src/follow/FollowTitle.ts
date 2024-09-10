import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "id";

export const FollowTitle = (record: TFollow): string => {
  return record.id?.toString() || String(record.id);
};
