import { Library } from "../library/Library";

export type Librarian = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  library?: Library | null;
};
