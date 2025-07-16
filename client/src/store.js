import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employee.reducer"; // adjust path if needed

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
