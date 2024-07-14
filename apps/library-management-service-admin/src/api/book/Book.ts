import { Category } from "../category/Category";
import { Library } from "../library/Library";
import { Loan } from "../loan/Loan";

export type Book = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  author: string | null;
  isbn: string | null;
  category?: Category | null;
  library?: Library | null;
  loans?: Array<Loan>;
};
