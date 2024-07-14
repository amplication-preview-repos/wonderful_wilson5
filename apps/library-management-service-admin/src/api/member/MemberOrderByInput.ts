import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  membershipDate?: SortOrder;
};
