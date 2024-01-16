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
const GenreTitle = () => {
  const record = useRecordContext();
  return <span>Genre {record ? `"${ record.Name }"` : ""}</span>;
};

export const GenreList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Name" />
<TextField source="Shortdescription" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const GenreEdit = () => (
                    <Edit title={<GenreTitle />}>
                      <SimpleForm>
                          <TextInput source="Name"   />
<TextInput source="Shortdescription"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const GenreCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Name"   />
<TextInput source="Shortdescription"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,

    ];


