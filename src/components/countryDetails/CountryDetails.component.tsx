import { SCountryDetails } from "./CountryDetails.styles";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useGetCountryDetailsQuery } from "../../redux/api/countries.api";
import Loading from "../loading/Loading.component";
import DItem from "../dItem/DItem.component";
import BorderCountries from "../borderCountries/BorderCountries.component";
import Container from "../container/Container.component";
import { useEffect } from "react";

function CountryDetails() {
  const navigate = useNavigate();
  const { code } = useParams();

  const {
    isError,
    isLoading,
    isSuccess,
    data: country,
  } = useGetCountryDetailsQuery(code || "");

  useEffect(() => {
    if (!isLoading) document.title = country!.name;
    window.scrollTo(0, 0);
  }, [isLoading, country]);

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
                <DItem name={"Native Name"} value={country.nativeName} />
                <DItem
                  name={"Population"}
                  value={new Intl.NumberFormat("en-us")
                    .format(country.population)
                    .toString()}
                />
                <DItem name={"Region"} value={country.region} />
                <DItem name={"Sub Region"} value={country.subregion} />
                <DItem name={"Capital"} value={country.capital} />
              </div>
              <div className="details">
                <DItem
                  name={"Top Level Domain"}
                  value={country.topLevelDomain.join(", ")}
                />
                <DItem
                  name={"Currencies"}
                  value={country.currencies.map((curr) => curr.code).join(", ")}
                />
                <DItem
                  name={"Languages"}
                  value={country.languages.map((lang) => lang.name).join(", ")}
                />
              </div>
            </div>
            {country.borders.length > 0 && (
              <div className="borders">
                <h3>Border Countries:</h3>
                <BorderCountries codes={country.borders} />
              </div>
            )}
          </div>
        </div>
      </>
    );
  else if (isError) content = <p>Some error occurred. Try again.</p>;

  return (
    <Container>
      <SCountryDetails>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <BsArrowLeft /> Back
        </button>
        {content}
      </SCountryDetails>
    </Container>
  );
}

export default CountryDetails;
