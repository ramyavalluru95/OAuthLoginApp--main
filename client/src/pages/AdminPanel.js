import React from "react";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeTable from "../components/employee/EmployeeTable";
import { useCreateEmployeeMutation, useGetEmployeesQuery } from "../reducers/employee.reducer";

const AdminPanel = () => {
  const { data, refetch } = useGetEmployeesQuery();
  const [createEmployee] = useCreateEmployeeMutation();
  return (
    <div style={styles.container}>
      <h2>🛠 Admin Dashboard</h2>
      <p>Welcome to the Admin section. Manage everything from user access to system logs.</p>

      <EmployeeForm createEmployee={createEmployee} refetch={refetch} />
      <EmployeeTable data={data} />
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
