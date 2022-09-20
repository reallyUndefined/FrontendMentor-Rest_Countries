import CountriesGrid from "../components/countriesGrid/CountriesGrid.component";
import Filters from "../components/filter/Filters.component";

function Home() {
  return (
    <>
      <Filters />
      <CountriesGrid />
    </>
  );
}

export default Home;
