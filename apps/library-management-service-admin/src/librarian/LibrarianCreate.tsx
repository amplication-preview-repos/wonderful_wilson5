import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LibraryTitle } from "../library/LibraryTitle";

export const LibrarianCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="library.id" reference="Library" label="Library">
          <SelectInput optionText={LibraryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
