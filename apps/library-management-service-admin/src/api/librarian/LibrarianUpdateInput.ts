import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";

export type LibrarianUpdateInput = {
  email?: string | null;
  name?: string | null;
  library?: LibraryWhereUniqueInput | null;
};
