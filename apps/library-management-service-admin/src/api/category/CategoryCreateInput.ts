import { BookCreateNestedManyWithoutCategoriesInput } from "./BookCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  books?: BookCreateNestedManyWithoutCategoriesInput;
};
