import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";
import { LoanUpdateManyWithoutBooksInput } from "./LoanUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  title?: string | null;
  author?: string | null;
  isbn?: string | null;
  category?: CategoryWhereUniqueInput | null;
  library?: LibraryWhereUniqueInput | null;
  loans?: LoanUpdateManyWithoutBooksInput;
};
