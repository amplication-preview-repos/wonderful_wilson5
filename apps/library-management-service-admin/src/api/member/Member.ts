import { Loan } from "../loan/Loan";

export type Member = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  membershipDate: Date | null;
  loans?: Array<Loan>;
};
