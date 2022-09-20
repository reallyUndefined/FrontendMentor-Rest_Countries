import { useState } from "react";
import { SFilters } from "./Filters.styles";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../container/Container.component";
import { useDispatch } from "react-redux";
import {
  filterRegion,
  getFilterRegion,
  searchCountry,
} from "../../redux/filter.slice";
import { useSelector } from "react-redux";

function Filters() {
  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const region = useSelector(getFilterRegion);

  const handleFilterRegion = (evt: React.MouseEvent<HTMLSpanElement>) =>
    dispatch(filterRegion(evt.currentTarget.innerText));

  return (
    <Container>
      <SFilters showDropdown={showDropdown}>
        <div className="search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for a country..."
            onChange={(evt) => dispatch(searchCountry(evt.target.value))}
          />
        </div>
        <div
          className="dropdown"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span>{region ? region : "Filter by Region"}</span>
          <button
            onClick={(evt) => {
              evt.stopPropagation();
              if (region) dispatch(filterRegion(""));
            }}
          >
            {region ? <AiOutlineClose /> : <FaChevronDown />}
          </button>
          <div className="dropdown-menu">
            <span className="dropdown-item" onClick={handleFilterRegion}>
              Africa
            </span>
            <span className="dropdown-item" onClick={handleFilterRegion}>
              America
            </span>
            <span className="dropdown-item" onClick={handleFilterRegion}>
              Asia
            </span>
            <span className="dropdown-item" onClick={handleFilterRegion}>
              Europe
            </span>
            <span className="dropdown-item" onClick={handleFilterRegion}>
              Oceania
            </span>
          </div>
        </div>
      </SFilters>
    </Container>
  );
}

export default Filters;
