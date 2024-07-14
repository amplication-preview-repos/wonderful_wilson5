import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { BOOK_TITLE_FIELD } from "../book/BookTitle";

export const LoanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="LoanDate" source="loanDate" />
        <TextField label="ReturnDate" source="returnDate" />
        <ReferenceField label="Member" source="member.id" reference="Member">
          <TextField source={MEMBER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Book" source="book.id" reference="Book">
          <TextField source={BOOK_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
