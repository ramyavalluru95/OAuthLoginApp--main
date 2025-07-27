import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { isEqual } from "lodash";
import usePaginationModel from "../../hooks/userPagination";

const columns = [
  { field: "firstName", headerName: "First Name", flex: 1, minWidth: 120, editable: true },
  { field: "lastName", headerName: "Last Name", flex: 1, minWidth: 120, editable: true },
  { field: "email", headerName: "Email", type: "email", flex: 1, minWidth: 120, editable: true },
  { field: "phoneNumber", headerName: "Phone Number", type: "number", flex: 1, minWidth: 120, editable: true },
];

export default function EmployeeTable({ data, setSelectedEmployeeIds, handleDeleteSelected }) {
  const { paginationModel, handlePaginationChange } = usePaginationModel();

  const handleProcessRowUpdate = (newRow, oldRow) => {
    // Add edited row to selectedUserIds if not already there
    if (!isEqual(newRow, oldRow)) {
      setSelectedEmployeeIds((prev) => (prev.includes(newRow._id) ? prev : [...prev, newRow._id]));
    }
    return newRow;
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <div>
          <h3>User Table</h3>
          <p>Below is a list of Users.</p>
        </div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button variant="contained" color="error" onClick={handleDeleteSelected}>
                  Delete
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Update
                </Button>
              </Grid>
            </Grid>
            <div />
          </Box>
        </div>
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
          paginationModel={paginationModel}
          onPaginationModelChange={handlePaginationChange}
          pageSizeOptions={[5, 10, 25, 50, 100]} // Items per page dropdown
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
          processRowUpdate={handleProcessRowUpdate}
          onProcessRowUpdateError={(error) => {
            console.error("Row update error:", error);
          }}
          experimentalFeatures={{ newEditingApi: true }}
          onRowSelectionModelChange={(ids) => {
            console.log(ids);
            setSelectedEmployeeIds(ids);
          }}
        />
      </Box>
    </React.Fragment>
  );
}
