import { SHeader } from "./Header.styles";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { isDarkMode, toggleTheme } from "../../redux/theme";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);

  return (
    <SHeader>
      <h1>Where in the world?</h1>
      <button className="theme-toggler" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? <HiMoon /> : <HiOutlineMoon />}
        <span>Dark Mode</span>
      </button>
    </SHeader>
  );
}

export default Header;
