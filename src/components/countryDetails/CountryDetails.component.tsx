import { SCountryDetails } from "./CountryDetails.styles";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useGetCountryDetailsQuery } from "../../redux/api/countries";
import Loading from "../loading/Loading.component";

function CountryDetails() {
  const navigate = useNavigate();
  const { code } = useParams();

  const {
    isError,
    isLoading,
    isSuccess,
    data: country,
  } = useGetCountryDetailsQuery(code || "");

  console.log(country);

  let content;
  if (isLoading) content = <Loading />;
  else if (isSuccess)
    content = (
      <>
        <div className="country">
          <img src={country.flag} alt="flag" />
          <div className="content">
            <h2>{country.name}</h2>
            <div className="details-grid">
              <div className="details">
                <p>
                  <span className="name">Native Name:&nbsp;</span>
                  <span className="value">{country.nativeName}</span>
                </p>
                <p>
                  <span className="name">Population:&nbsp;</span>
                  <span className="value">
                    {new Intl.NumberFormat("en-us").format(country.population)}
                  </span>
                </p>
                <p>
                  <span className="name">Region:&nbsp;</span>
                  <span className="value">{country.region}</span>
                </p>
                <p>
                  <span className="name">Sub Region:&nbsp;</span>
                  <span className="value">{country.subregion}</span>
                </p>
                <p>
                  <span className="name">Capital:&nbsp;</span>
                  <span className="value">{country.capital}</span>
                </p>
              </div>
              <div className="details">
                <p>
                  <span className="name">Top Level Domain:&nbsp;</span>
                  <span className="value">
                    {country.topLevelDomain.join(", ")}
                  </span>
                </p>
                <p>
                  <span className="name">Currencies:&nbsp;</span>
                  <span className="value">
                    {country.currencies.map((curr) => curr.code).join(", ")}
                  </span>
                </p>
                <p>
                  <span className="name">Languages:&nbsp;</span>
                  <span className="value">
                    {country.languages.map((lang) => lang.name).join(", ")}
                  </span>
                </p>
              </div>
            </div>
            {country.borders.length > 0 && (
              <div className="borders">
                <h3>Border Countries:</h3>
                <div className="border-countries">
                  {country.borders.map((bc) => (
                    <button onClick={() => navigate(`/country/${bc}`)}>
                      {bc}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  else if (isError) content = <p>Some error occurred. Try again.</p>;

  return (
    <SCountryDetails>
      <button className="back-btn" onClick={() => navigate(-1)}>
        <BsArrowLeft /> Back
      </button>
      {content}
    </SCountryDetails>
  );
}

export default CountryDetails;
