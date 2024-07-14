import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  author?: SortOrder;
  isbn?: SortOrder;
  categoryId?: SortOrder;
  libraryId?: SortOrder;
};
