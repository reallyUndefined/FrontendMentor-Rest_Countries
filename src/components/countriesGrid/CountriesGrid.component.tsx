import { useGetAllCountriesQuery } from "../../redux/api/countries";
import CountryCard from "../countryCard/CountryCard.component";
import Loading from "../loading/Loading.component";
import { SCountriesGrid } from "./CountriesGrid.styles";

function CountriesGrid() {
  const { isLoading, isSuccess, isError, data } = useGetAllCountriesQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isSuccess) {
    content = (
      <SCountriesGrid>
        {data.map((country) => (
          <CountryCard
            key={country.name}
            img={country.flag}
            capital={country.capital}
            name={country.name}
            population={country.population}
            region={country.region}
            code={country.alpha3Code}
          />
        ))}
      </SCountriesGrid>
    );
  } else if (isError) content = <p>some error occured. Try again.</p>;

  return <>{content}</>;
}

export default CountriesGrid;
