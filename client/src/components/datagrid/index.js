// src/components/UserGrid.jsx
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const UserGrid = ({ rows, columns, pageSize = 5, ...props }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[5, 10, 20]} {...props} />
    </div>
  );
};

export default UserGrid;
