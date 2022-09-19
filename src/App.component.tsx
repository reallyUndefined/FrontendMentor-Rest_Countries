import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header.component";
import GlobalStyles from "./styles/Global.styles";
import { darkTheme, lightTheme } from "./styles/theme.styles";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
