import React from "react";
import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeTable from "../components/employee/EmployeeTable";

const AdminPanel = () => {
  return (
    <div style={styles.container}>
      <h2>🛠 Admin Dashboard</h2>
      <p>Welcome to the Admin section. Manage everything from user access to system logs.</p>

      <EmployeeForm />
      <EmployeeTable />
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
