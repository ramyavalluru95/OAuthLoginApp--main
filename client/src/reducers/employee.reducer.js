import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// import employeeReducer from "./reducers/employee.reducer"; // adjust path if needed

export const employeeStore = createApi({
  reducerPath: "employee",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "/api/v1/employees",
    }),
    createEmployee: builder.mutation({
      query: (employee) => ({ url: "/api/v1/employee", method: "POST", body: employee }),
    }),
  }),
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation } = employeeStore;
