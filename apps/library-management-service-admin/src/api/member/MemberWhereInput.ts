import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type MemberWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  membershipDate?: DateTimeNullableFilter;
  loans?: LoanListRelationFilter;
};
