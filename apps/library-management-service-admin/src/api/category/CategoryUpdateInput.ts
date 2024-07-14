import { BookUpdateManyWithoutCategoriesInput } from "./BookUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  books?: BookUpdateManyWithoutCategoriesInput;
};
