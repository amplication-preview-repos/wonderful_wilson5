import { SortOrder } from "../../util/SortOrder";

export type LibrarianOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  libraryId?: SortOrder;
};
