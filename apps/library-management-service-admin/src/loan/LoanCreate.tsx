import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";
import { BookTitle } from "../book/BookTitle";

export const LoanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="LoanDate" source="loanDate" />
        <DateTimeInput label="ReturnDate" source="returnDate" />
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <ReferenceInput source="book.id" reference="Book" label="Book">
          <SelectInput optionText={BookTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
