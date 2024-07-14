import { Member } from "../member/Member";
import { Book } from "../book/Book";

export type Loan = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  loanDate: Date | null;
  returnDate: Date | null;
  member?: Member | null;
  book?: Book | null;
};
