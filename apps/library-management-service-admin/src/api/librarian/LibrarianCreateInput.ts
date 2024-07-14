import { LibraryWhereUniqueInput } from "../library/LibraryWhereUniqueInput";

export type LibrarianCreateInput = {
  email?: string | null;
  name?: string | null;
  library?: LibraryWhereUniqueInput | null;
};
