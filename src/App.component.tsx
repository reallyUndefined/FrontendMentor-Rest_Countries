import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Header from "./components/header/Header.component";
import Home from "./pages/Home.page";

import { Routes, Route } from "react-router-dom";

import { isDarkMode } from "./redux/theme";
import GlobalStyles from "./styles/Global.styles";
import { darkTheme, lightTheme } from "./styles/theme.styles";

function App() {
  const darkMode = useSelector(isDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
