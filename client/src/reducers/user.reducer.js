import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const userStore = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/v1/users",
      providesTags: ["user"],
    }),
    createUser: builder.mutation({
      query: (user) => ({ url: "/api/v1/user", method: "POST", body: user }),
      invalidatesTags: [{ type: "user" }],
    }),
    deleteUsers: builder.mutation({
      query: (users) => ({ url: "/api/v1/delete-users", method: "POST", body: users }),
      invalidatesTags: [{ type: "user" }],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useDeleteUsersMutation } = userStore;
