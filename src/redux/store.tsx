import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { countriesApi } from "./api/countries";

import themeReducer from "./theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export const RtkProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
