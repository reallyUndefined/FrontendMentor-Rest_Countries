import { useState } from "react";
import { SFilters } from "./Filters.styles";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Container from "../container/Container.component";

function Filters() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Container>
      <SFilters showDropdown={showDropdown}>
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div
          className="dropdown"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>Filter by Region</span>
          <FaChevronDown />
          <div className="dropdown-menu">
            <span className="dropdown-item">Africa</span>
            <span className="dropdown-item">America</span>
            <span className="dropdown-item">Asia</span>
            <span className="dropdown-item">Europe</span>
            <span className="dropdown-item">Oceania</span>
          </div>
        </div>
      </SFilters>
    </Container>
  );
}

export default Filters;
