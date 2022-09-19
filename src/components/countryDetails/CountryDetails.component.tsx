import { SCountryDetails } from "./CountryDetails.styles";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useGetCountryDetailsQuery } from "../../redux/api/countries";
import Loading from "../loading/Loading.component";

function CountryDetails() {
  const navigate = useNavigate();
  const { code } = useParams();

  const { isError, isLoading, isSuccess, data } = useGetCountryDetailsQuery(
    code || ""
  );

  let content;
  if (isLoading) content = <Loading />;
  else if (isSuccess)
    content = (
      <>
        <img src={data.flag} alt="flag" />
        <h2>{data.name}</h2>
      </>
    );
  else if (isError) content = <p>Some error occurred. Try again.</p>;

  return (
    <SCountryDetails>
      <button onClick={() => navigate(-1)}>
        <BsArrowLeft /> Back
      </button>
      {content}
    </SCountryDetails>
  );
}

export default CountryDetails;
