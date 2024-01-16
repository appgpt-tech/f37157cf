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
const PublisherTitle = () => {
  const record = useRecordContext();
  return <span>Publisher {record ? `"${ record.Name }"` : ""}</span>;
};

export const PublisherList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Name" />
<TextField source="Location" />
<TextField source="Contactinformation" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const PublisherEdit = () => (
                    <Edit title={<PublisherTitle />}>
                      <SimpleForm>
                          <TextInput source="Name"   />
<TextInput source="Location"   />
<TextInput source="Contactinformation"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const PublisherCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Name"   />
<TextInput source="Location"   />
<TextInput source="Contactinformation"   />
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


