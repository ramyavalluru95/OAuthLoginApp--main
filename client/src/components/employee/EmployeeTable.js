import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import axios from "axios";

const columns = [
  { field: "firstName", headerName: "First name", flex: 1, minWidth: 120, editable: true },
  { field: "lastName", headerName: "Last name", flex: 1, minWidth: 120, editable: true },
  { field: "email", headerName: "Email", type: "email", flex: 1, minWidth: 120, editable: true },
  { field: "phoneNumber", headerName: "Phone Number", type: "number", flex: 1, minWidth: 120, editable: true },
];

export default function EmployeeTable({ data }) {
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
          rows={data?.employees || []}
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
          processRowUpdate={async (newRow, oldRow) => {
            try {
              await axios.put(`http://localhost:5000/api/employee/${newRow.id}`, newRow);
              return newRow;
            } catch (error) {
              console.error("Failed to update employee:", error);
              return oldRow;
            }
          }}
          onProcessRowUpdateError={(error) => {
            console.error("Row update error:", error);
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </React.Fragment>
  );
}
