import { Librarian } from "../librarian/Librarian";
import { Book } from "../book/Book";

export type Library = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  librarians?: Array<Librarian>;
  books?: Array<Book>;
};
