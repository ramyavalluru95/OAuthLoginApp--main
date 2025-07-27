import React from "react";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeTable from "../components/employee/EmployeeTable";
import { useCreateEmployeeMutation, useDeleteEmployeesMutation, useGetEmployeesQuery } from "../reducers/employee.reducer";
import { useState } from "react";

const AdminPanel = () => {
  const { data } = useGetEmployeesQuery();
  const [createEmployee] = useCreateEmployeeMutation();
  const [deleteEmployees] = useDeleteEmployeesMutation();
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);

  const handleDeleteSelected = async () => {
    if (selectedEmployeeIds?.ids?.size === 0) return;
    try {
      await deleteEmployees({ ids: Array.from(selectedEmployeeIds.ids) }).unwrap();
      setSelectedEmployeeIds([]);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🛠 Admin Dashboard</h2>
      <p>Welcome to the Admin section. Manage everything from user access to system logs.</p>

      <EmployeeForm createEmployee={createEmployee} />
      <EmployeeTable data={data} selectedEmployeeIds={selectedEmployeeIds} setSelectedEmployeeIds={setSelectedEmployeeIds} handleDeleteSelected={handleDeleteSelected} />
    </div>
  );
};

const styles = {
  container: {
    padding: 24,
    fontFamily: "Arial, sans-serif",
  },
};

export default AdminPanel;
