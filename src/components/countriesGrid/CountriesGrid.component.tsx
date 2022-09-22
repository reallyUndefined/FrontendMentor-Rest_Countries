import { useSelector } from "react-redux";
import { useGetAllCountriesQuery } from "../../redux/api/countries.api";
import { getFilterRegion, getSearchTerm } from "../../redux/filter.slice";
import Container from "../container/Container.component";
import CountryCard from "../countryCard/CountryCard.component";
import Loading from "../loading/Loading.component";
import { SCountriesGrid } from "./CountriesGrid.styles";

function CountriesGrid() {
  const searchTerm = useSelector(getSearchTerm);
  const filterRegion = useSelector(getFilterRegion);

  const { isLoading, isSuccess, isError, data } = useGetAllCountriesQuery();

  let content;
  if (isLoading) content = <Loading />;
  else if (isSuccess) {
    content = (
      <Container>
        <SCountriesGrid>
          {data
            .filter((c) =>
              c.name.toLowerCase().match(searchTerm.trim().toLowerCase())
            )
            .filter((c) =>
              c.region.toLowerCase().match(filterRegion.toLowerCase())
            )
            .map((country) => (
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
      </Container>
    );
  } else if (isError) content = <p>some error occured. Try again.</p>;

  return <>{content}</>;
}

export default CountriesGrid;
