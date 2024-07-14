import { LibrarianCreateNestedManyWithoutLibrariesInput } from "./LibrarianCreateNestedManyWithoutLibrariesInput";
import { BookCreateNestedManyWithoutLibrariesInput } from "./BookCreateNestedManyWithoutLibrariesInput";

export type LibraryCreateInput = {
  name?: string | null;
  address?: string | null;
  librarians?: LibrarianCreateNestedManyWithoutLibrariesInput;
  books?: BookCreateNestedManyWithoutLibrariesInput;
};
