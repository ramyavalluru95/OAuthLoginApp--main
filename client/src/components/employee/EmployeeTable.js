import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", flex: 0.5, minWidth: 70 },
  { field: "firstName", headerName: "First name", flex: 1, minWidth: 120, editable: true },
  { field: "lastName", headerName: "Last name", flex: 1, minWidth: 120, editable: true },
  { field: "email", headerName: "Email", type: "email", flex: 1, minWidth: 120, editable: true },
  { field: "phoneNumber", headerName: "Phone Number", type: "number", flex: 1, minWidth: 120, editable: true },
];

const rows = [
  { id: 1, lastName: "Snow1", firstName: "Jon1", email: 14, phoneNumber: "123-456-7890" },
  { id: 2, lastName: "Snow2", firstName: "Jon2", email: 14, phoneNumber: "123-456-7890" },
  { id: 3, lastName: "Snow3", firstName: "Jon3", email: 14, phoneNumber: "123-456-7890" },
  { id: 4, lastName: "Snow4", firstName: "Jon4", email: 14, phoneNumber: "123-456-7890" },
  { id: 5, lastName: "Snow5", firstName: "Jon5", email: 14, phoneNumber: "123-456-7890" },
  { id: 6, lastName: "Snow6", firstName: "Jon6", email: 14, phoneNumber: "123-456-7890" },
  { id: 7, lastName: "Snow7", firstName: "Jon7", email: 14, phoneNumber: "123-456-7890" },
  { id: 8, lastName: "Snow8", firstName: "Jon8", email: 14, phoneNumber: "123-456-7890" },
  { id: 9, lastName: "Snow9", firstName: "Jon9", email: 14, phoneNumber: "123-456-7890" },
  { id: 10, lastName: "Snow10", firstName: "Jon10", email: 14, phoneNumber: "123-456-7890" },
  { id: 11, lastName: "Snow11", firstName: "Jon11", email: 14, phoneNumber: "123-456-7890" },
];

export default function EmployeeTable() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <div>
          <h3>Employee Table</h3>
          <p>Below is a list of employees.</p>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </Box>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
        />
      </Box>
    </React.Fragment>
  );
}
