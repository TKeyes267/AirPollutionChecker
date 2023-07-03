import Postcode from "./Postcode";
import Geolocation from "./Geolocation";
import Data from "./Data";
import { useState } from "react";

const SearchPage = () => {
  const [airQualityData, setAirQualityData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  if (dataLoaded === false) {
    return (
      <>
        <Postcode
          setAirQualityData={setAirQualityData}
          setDataLoaded={setDataLoaded}
        />
        <Geolocation
          setAirQualityData={setAirQualityData}
          setDataLoaded={setDataLoaded}
        />
      </>
    );
  } else {
    return (
      <>
        <Data airQualityData={airQualityData} />
        <Postcode
          setAirQualityData={setAirQualityData}
          setDataLoaded={setDataLoaded}
        />
        <Geolocation
          setAirQualityData={setAirQualityData}
          setDataLoaded={setDataLoaded}
        />
      </>
    );
  }
};

export default SearchPage;
