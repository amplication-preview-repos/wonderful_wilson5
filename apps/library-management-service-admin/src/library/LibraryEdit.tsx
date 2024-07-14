import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LibrarianTitle } from "../librarian/LibrarianTitle";
import { BookTitle } from "../book/BookTitle";

export const LibraryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="librarians"
          reference="Librarian"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LibrarianTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="books"
          reference="Book"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
