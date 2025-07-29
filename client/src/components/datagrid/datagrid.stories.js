// src/components/UserGrid.stories.jsx
import DataGrid from "./index";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Sharma", firstName: "Raj", age: 35 },
  { id: 2, lastName: "Mehra", firstName: "Anita", age: 42 },
  { id: 3, lastName: "Kumar", firstName: "Ravi", age: 29 },
  { id: 4, lastName: "Das", firstName: "Kiran", age: 31 },
  { id: 5, lastName: "Verma", firstName: "Neha", age: 27 },
];

const Template = (args) => <DataGrid {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  rows,
  columns,
  pageSize: 5,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "MUI/DataGrid",
  component: DataGrid,
};
