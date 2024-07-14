import { Book } from "../book/Book";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  books?: Array<Book>;
};
