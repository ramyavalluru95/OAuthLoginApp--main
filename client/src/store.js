import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeStore } from "./reducers/employee.reducer.js"; // adjust path if needed

const store = configureStore({
  reducer: {
    [employeeStore.reducerPath]: employeeStore.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeeStore.middleware),
});

setupListeners(store.dispatch);
export default store;
