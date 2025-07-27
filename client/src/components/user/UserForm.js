import React, { useState } from "react";
import { TextField, Button, Box, Stack, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { getUpperCase, validateEmail } from "../../constants/helper";

const UserForm = ({ createUser, refetch }) => {
  const [form, setForm] = useState({
    userName: "",
    userGroup: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value: targetValue } = e.target;
    const { value } = e;

    // Only allow letters for userName and userGroup
    if ((name === "userGroup" || name === "userName") && /[^a-zA-Z\s]/.test(targetValue)) {
      return; // Ignore input if it contains invalid characters
    }
    // Only allow numbers for phoneNumber
    if (name === "phoneNumber" && /[^0-9]/.test(targetValue)) {
      return; // Ignore input if it contains invalid characters
    }

    if (name === "phoneNumber" && targetValue?.length > 10) {
      return;
    }
    // Update form state
    setForm({ ...form, [name]: value || targetValue });
  };

  const validate = () => {
    let temp = {};
    temp.userName = form.userName ? "" : "User name is required";
    temp.userGroup = form.userGroup ? "" : "User Group is required";
    temp.email = form.email ? "" : "Email is required";
    temp.email = validateEmail(form.email) && !temp.email ? "" : "Email is not valid";
    temp.phoneNumber = form.phoneNumber ? "" : "Phone number is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await createUser(form).unwrap();
      refetch();
      setErrors({});
      setForm({
        userName: "",
        userGroup: "",
        email: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <div>
          <h3>Add Users</h3>
        </div>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            type="string"
            label="User Name"
            name="userName"
            value={form.userName}
            onChange={(e) => handleChange({ ...e, value: getUpperCase(e.target.value) })}
            error={!!errors.userName}
            helperText={errors.userName}
            required
          />
          <FormControl error={!!errors.userGroup} required sx={{ minWidth: 160 }}>
            <InputLabel>User Group</InputLabel>
            <Select name="userGroup" value={form.userGroup} label="User Group" onChange={handleChange}>
              <MenuItem value="ADMIN">ADMIN</MenuItem>
              <MenuItem value="OPERATIONS">OPERATIONS</MenuItem>
              <MenuItem value="SUPPORT">SUPPORT</MenuItem>
            </Select>
            {errors.userGroup && <FormHelperText>{errors.userGroup}</FormHelperText>}
          </FormControl>
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
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setForm({
                userName: "",
                userGroup: "",
                email: "",
                phoneNumber: "",
              });
              setErrors({});
            }}
          >
            Reset
          </Button>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default UserForm;
