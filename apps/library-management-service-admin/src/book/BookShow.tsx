import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MEMBER_TITLE_FIELD } from "../member/MemberTitle";
import { BOOK_TITLE_FIELD } from "./BookTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LIBRARY_TITLE_FIELD } from "../library/LibraryTitle";

export const BookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Author" source="author" />
        <TextField label="ISBN" source="isbn" />
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Library" source="library.id" reference="Library">
          <TextField source={LIBRARY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Loan" target="bookId" label="Loans">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="LoanDate" source="loanDate" />
            <TextField label="ReturnDate" source="returnDate" />
            <ReferenceField
              label="Member"
              source="member.id"
              reference="Member"
            >
              <TextField source={MEMBER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Book" source="book.id" reference="Book">
              <TextField source={BOOK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
