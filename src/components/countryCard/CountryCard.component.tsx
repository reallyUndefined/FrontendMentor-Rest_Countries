import { SCountryCard } from "./CountryCard.styles";
import { Link } from "react-router-dom";

interface CountryCardProps {
  img: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  code: string;
}
function CountryCard({
  img,
  name,
  region,
  population,
  capital,
  code,
}: CountryCardProps) {
  return (
    <SCountryCard>
      <Link to={`/country/${code}`}>
        <img src={img} alt="flag" />
      </Link>
      <div className="content">
        <h2>
          <Link to={`/country/${code}`}>{name}</Link>
        </h2>
        <p>
          <span className="name">Population:&nbsp;</span>
          <span className="value">
            {new Intl.NumberFormat("en-us").format(population)}
          </span>
        </p>
        <p>
          <span className="name">Region:&nbsp;</span>
          <span className="value">{region}</span>
        </p>
        <p>
          <span className="name">Capital:&nbsp;</span>
          <span className="value">{capital}</span>
        </p>
      </div>
    </SCountryCard>
  );
}

export default CountryCard;
