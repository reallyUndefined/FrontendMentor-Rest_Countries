import { SCountryCard } from "./CountryCard.styles";
import { Link } from "react-router-dom";
import DItem from "../dItem/DItem.component";

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
        <DItem
          name={"Population"}
          value={new Intl.NumberFormat("en-us").format(population)}
        />
        <DItem name={"Region"} value={region} />
        <DItem name={"Capital"} value={capital} />
      </div>
    </SCountryCard>
  );
}

export default CountryCard;
