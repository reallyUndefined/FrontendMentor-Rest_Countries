import { useGetAllCountriesQuery } from "../../redux/api/countries";
import CountryCard from "../countryCard/CountryCard.component";
import { SCountriesGrid } from "./CountriesGrid.styles";

function CountriesGrid() {
  const { isLoading, isSuccess, isError, data } = useGetAllCountriesQuery();

  let content;
  if (isLoading) content = <p>loading...</p>;
  else if (isSuccess) {
    content = data.map((country) => (
      <CountryCard
        key={country.name}
        img={country.flag}
        capital={country.capital}
        name={country.name}
        population={country.population}
        region={country.region}
      />
    ));
  } else if (isError) content = <p>some error occured. Try again.</p>;

  return <SCountriesGrid>{content}</SCountriesGrid>;
}

export default CountriesGrid;
