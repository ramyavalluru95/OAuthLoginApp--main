import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../reducers/employee.reducer";

const EmployeeForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.firstName = form.firstName ? "" : "First name is required";
    temp.lastName = form.lastName ? "" : "Last name is required";
    temp.email = form.email ? "" : "Email is required";
    temp.phone = form.phone ? "" : "Phone number is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addEmployee(form));
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setErrors({});
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <div>
          <h3>Employee Form</h3>
          <p>Fill out the form below to add a new employee.</p>
        </div>
        <Button type="submit" variant="contained" color="primary" onClick={() => setOpenForm(!openForm)}>
          {openForm ? "Close" : "Add Employee "}
        </Button>
      </Box>
      {openForm && (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} required />
            <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} required />
            <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required />
            <TextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} error={!!errors.phone} helperText={errors.phone} required />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </Box>
      )}
    </React.Fragment>
  );
};

export default EmployeeForm;
