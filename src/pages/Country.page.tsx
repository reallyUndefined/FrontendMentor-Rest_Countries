import { Suspense, lazy } from "react";
const CountryDetails = lazy(
  () => import("../components/countryDetails/CountryDetails.component")
);

function Country() {
  return (
    <>
      <Suspense>
        <CountryDetails />
      </Suspense>
    </>
  );
}

export default Country;
