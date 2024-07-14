import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  loanDate?: SortOrder;
  returnDate?: SortOrder;
  memberId?: SortOrder;
  bookId?: SortOrder;
};
