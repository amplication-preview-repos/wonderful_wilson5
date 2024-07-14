import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LIBRARY_TITLE_FIELD } from "../library/LibraryTitle";

export const LibrarianList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Librarians"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Email" source="email" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Library" source="library.id" reference="Library">
          <TextField source={LIBRARY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
