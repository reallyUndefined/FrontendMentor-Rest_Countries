import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import themeReducer from "./theme";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export const RtkProvider = ({ children }: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
