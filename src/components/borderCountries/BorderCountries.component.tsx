import { useNavigate } from "react-router-dom";
import { useGetCountryNamesQuery } from "../../redux/api/countries.api";
import Loading from "../loading/Loading.component";
import { SBorderCountries } from "./BorderCountries.styles";

interface BorderCountriesProps {
  codes: string[];
}
function BorderCountries({ codes }: BorderCountriesProps) {
  const {
    isLoading,
    isSuccess,
    isError,
    data: countryNames,
  } = useGetCountryNamesQuery(codes);

  const navigate = useNavigate();

  let content;
  if (isLoading) content = <Loading />;
  else if (isSuccess) {
    content = countryNames.map((country, idx) => (
      <button
        key={country.name}
        onClick={() => navigate(`/country/${codes[idx]}`)}
      >
        {country.name}
      </button>
    ));
  } else if (isError) content = <p>Some error occured. Try again.</p>;

  return <SBorderCountries>{content}</SBorderCountries>;
}

export default BorderCountries;
