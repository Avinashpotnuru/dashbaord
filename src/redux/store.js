// ** Redux Imports

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import restApis from "./api/restApis";

import { setupListeners } from "@reduxjs/toolkit/query";

const middleware = [restApis.middleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleware
    );
  },
});

setupListeners(store.dispatch);

export { store };
