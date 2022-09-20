import { SHeader } from "./Header.styles";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { isDarkMode, toggleTheme } from "../../redux/theme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);

  return (
    <SHeader>
      <h1>
        <Link to={"/"}>Where in the world?</Link>
      </h1>
      <button className="theme-toggler" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? <HiMoon /> : <HiOutlineMoon />}
        <span>Dark Mode</span>
      </button>
    </SHeader>
  );
}

export default Header;
