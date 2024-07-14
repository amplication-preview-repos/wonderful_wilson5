import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LibraryTitle } from "../library/LibraryTitle";

export const LibrarianEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="library.id" reference="Library" label="Library">
          <SelectInput optionText={LibraryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
