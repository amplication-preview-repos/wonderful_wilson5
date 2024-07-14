import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";

export type LoanUpdateInput = {
  loanDate?: Date | null;
  returnDate?: Date | null;
  member?: MemberWhereUniqueInput | null;
  book?: BookWhereUniqueInput | null;
};
