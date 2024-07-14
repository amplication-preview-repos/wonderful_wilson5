import { LibrarianUpdateManyWithoutLibrariesInput } from "./LibrarianUpdateManyWithoutLibrariesInput";
import { BookUpdateManyWithoutLibrariesInput } from "./BookUpdateManyWithoutLibrariesInput";

export type LibraryUpdateInput = {
  name?: string | null;
  address?: string | null;
  librarians?: LibrarianUpdateManyWithoutLibrariesInput;
  books?: BookUpdateManyWithoutLibrariesInput;
};
