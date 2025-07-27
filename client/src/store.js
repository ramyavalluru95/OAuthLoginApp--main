import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeeStore } from "./reducers/employee.reducer.js"; // adjust path if needed
import { userStore } from "./reducers/user.reducer.js";

const store = configureStore({
  reducer: {
    [employeeStore.reducerPath]: employeeStore.reducer,
    [userStore.reducerPath]: userStore.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([employeeStore.middleware, userStore.middleware]),
});

setupListeners(store.dispatch);
export default store;
