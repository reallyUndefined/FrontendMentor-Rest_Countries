import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { countriesApi } from "./api/countries.api";

import themeReducer from "./theme.slice";
import filterReducer from "./filter.slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    filters: filterReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export const RtkProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
