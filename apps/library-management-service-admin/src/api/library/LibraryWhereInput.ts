import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LibrarianListRelationFilter } from "../librarian/LibrarianListRelationFilter";
import { BookListRelationFilter } from "../book/BookListRelationFilter";

export type LibraryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  librarians?: LibrarianListRelationFilter;
  books?: BookListRelationFilter;
};
