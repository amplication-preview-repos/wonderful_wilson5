import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type BookWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  author?: StringNullableFilter;
  isbn?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
  library?: LibraryWhereUniqueInput;
  loans?: LoanListRelationFilter;
};
