import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

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
    deleteEmployees: builder.mutation({
      query: (employees) => ({ url: "/api/v1/delete-employees", method: "POST", body: employees }),
    }),
  }),
});

export const { useGetEmployeesQuery, useCreateEmployeeMutation, useDeleteEmployeesMutation } = employeeStore;
