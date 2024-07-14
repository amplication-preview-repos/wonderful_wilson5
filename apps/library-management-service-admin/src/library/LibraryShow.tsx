import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LIBRARY_TITLE_FIELD } from "./LibraryTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const LibraryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Address" source="address" />
        <ReferenceManyField
          reference="Librarian"
          target="libraryId"
          label="Librarians"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Email" source="email" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Library"
              source="library.id"
              reference="Library"
            >
              <TextField source={LIBRARY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Book" target="libraryId" label="Books">
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Library"
              source="library.id"
              reference="Library"
            >
              <TextField source={LIBRARY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
