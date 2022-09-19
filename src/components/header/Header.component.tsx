import { SHeader } from "./Header.styles";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <SHeader>
      <h1>Where in the world?</h1>
      <button
        className="theme-toggler"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? <HiMoon /> : <HiOutlineMoon />}
        <span>Dark Mode</span>
      </button>
    </SHeader>
  );
}

export default Header;
