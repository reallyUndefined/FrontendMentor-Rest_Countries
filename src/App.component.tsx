import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global.styles";
import { darkTheme, lightTheme } from "./styles/theme.styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
