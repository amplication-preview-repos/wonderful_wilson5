import { LoanCreateNestedManyWithoutMembersInput } from "./LoanCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  name?: string | null;
  email?: string | null;
  membershipDate?: Date | null;
  loans?: LoanCreateNestedManyWithoutMembersInput;
};
