import { LoanUpdateManyWithoutMembersInput } from "./LoanUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  name?: string | null;
  email?: string | null;
  membershipDate?: Date | null;
  loans?: LoanUpdateManyWithoutMembersInput;
};
