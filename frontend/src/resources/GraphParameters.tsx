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
const GraphParametersTitle = () => {
  const record = useRecordContext();
  return <span>GraphParameters {record ? `"${ record.Daysofweek }"` : ""}</span>;
};

export const GraphParametersList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Daysofweek" />
<TextField source="Drinkingamount" />
<NumberField source="Id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const GraphParametersEdit = () => (
                    <Edit title={<GraphParametersTitle />}>
                      <SimpleForm>
                          <TextInput source="Daysofweek"   />
<TextInput source="Drinkingamount"   />
<NumberInput source="Id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const GraphParametersCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Daysofweek"   />
<TextInput source="Drinkingamount"   />
<NumberInput source="Id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,

    ];


