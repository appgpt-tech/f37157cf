import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const BookTitle = () => {
  const record = useRecordContext();
  return <span>Book {record ? `"${ record.Title }"` : ""}</span>;
};

export const BookList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Title" />
<TextField source="Releasedate" />
<TextField source="Description" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const BookEdit = () => (
                    <Edit title={<BookTitle />}>
                      <SimpleForm>
                          <TextInput source="Title"   />
<TextInput source="Releasedate"   />
<TextInput source="Description"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const BookCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Title"   />
<TextInput source="Releasedate"   />
<TextInput source="Description"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,

    ];


