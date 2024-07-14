import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";
import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";

export type LoanWhereInput = {
  id?: StringFilter;
  loanDate?: DateTimeNullableFilter;
  returnDate?: DateTimeNullableFilter;
  member?: MemberWhereUniqueInput;
  book?: BookWhereUniqueInput;
};
