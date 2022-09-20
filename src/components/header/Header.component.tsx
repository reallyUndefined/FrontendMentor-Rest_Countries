import { SHeader, SHeaderBg } from "./Header.styles";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { isDarkMode, toggleTheme } from "../../redux/theme.slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../container/Container.component";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(isDarkMode);

  return (
    <SHeaderBg>
      <Container>
        <SHeader>
          <h1>
            <Link to={"/"}>Where in the world?</Link>
          </h1>
          <button
            className="theme-toggler"
            onClick={() => dispatch(toggleTheme())}
          >
            {darkMode ? <HiMoon /> : <HiOutlineMoon />}
            <span>Dark Mode</span>
          </button>
        </SHeader>
      </Container>
    </SHeaderBg>
  );
}

export default Header;
