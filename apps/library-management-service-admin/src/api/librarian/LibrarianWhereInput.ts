import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";

export type LibrarianWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  library?: LibraryWhereUniqueInput;
};
