import React, { useState } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";

const EmployeeForm = ({ createEmployee, refetch }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [openForm, setOpenForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow letters for firstName and lastName
    if ((name === "firstName" || name === "lastName") && /[^a-zA-Z\s]/.test(value)) {
      return; // Ignore input if it contains invalid characters
    }
    // Only allow numbers for phoneNumber
    if (name === "phoneNumber" && /[^0-9]/.test(value)) {
      return; // Ignore input if it contains invalid characters
    }
    // Update form state
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let temp = {};
    temp.firstName = form.firstName ? "" : "First name is required";
    temp.lastName = form.lastName ? "" : "Last name is required";
    temp.email = form.email ? "" : "Email is required";
    temp.phoneNumber = form.phoneNumber ? "" : "Phone number is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await createEmployee(form).unwrap();
      refetch();
      setErrors({});
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
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
            <TextField type="string" label="First Name" name="firstName" value={form.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} required />
            <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} required />
            <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} required />
            <TextField
              type="number"
              label="Phone Number"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              maxLength={10}
              helperText={errors.phoneNumber}
              required
            />
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Box>
      )}
    </React.Fragment>
  );
};

export default EmployeeForm;
