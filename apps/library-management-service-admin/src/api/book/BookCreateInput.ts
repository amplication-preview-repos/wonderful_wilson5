import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";
import { LoanCreateNestedManyWithoutBooksInput } from "./LoanCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  title?: string | null;
  author?: string | null;
  isbn?: string | null;
  category?: CategoryWhereUniqueInput | null;
  library?: LibraryWhereUniqueInput | null;
  loans?: LoanCreateNestedManyWithoutBooksInput;
};
