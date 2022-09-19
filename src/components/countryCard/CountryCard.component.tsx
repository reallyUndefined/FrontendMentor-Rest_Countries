import { SCountryCard } from "./CountryCard.styles";

interface CountryCardProps {
  img: string;
  name: string;
  region: string;
  population: number;
  capital: string;
}
function CountryCard({
  img,
  name,
  region,
  population,
  capital,
}: CountryCardProps) {
  return (
    <SCountryCard>
      <img src={img} alt="flag" />
      <div className="content">
        <h2>{name}</h2>
        <p>
          <span className="name">Population:&nbsp;</span>
          <span className="value">{population}</span>
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
