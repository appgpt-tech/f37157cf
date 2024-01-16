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
const AuthorTitle = () => {
  const record = useRecordContext();
  return <span>Author {record ? `"${ record.Name }"` : ""}</span>;
};

export const AuthorList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Name" />
<TextField source="Biography" />
<TextField source="Nationality" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const AuthorEdit = () => (
                    <Edit title={<AuthorTitle />}>
                      <SimpleForm>
                          <TextInput source="Name"   />
<TextInput source="Biography"   />
<TextInput source="Nationality"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const AuthorCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Name"   />
<TextInput source="Biography"   />
<TextInput source="Nationality"   />
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


