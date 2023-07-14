import Data from "./Data";
import Postcode from "./Postcode";
import Geolocation from "./Geolocation";

const ResultsPage = () => {
  return (
    <main>
      <h1 className="Header">Air Quality Checker</h1>
      <Data />
           <Postcode
            setAirQualityData={setAirQualityData}
            setDataLoaded={setDataLoaded}
            errorPost={errorPost}
            setErrorPost={setErrorPost}
            setErrorGeo={setErrorGeo}
          />
          <Geolocation
            setAirQualityData={setAirQualityData}
            setDataLoaded={setDataLoaded}
            errorGeo={errorGeo}
            setErrorGeo={setErrorGeo}
            setErrorPost={setErrorPost}
          />
        </Card>
    </main>
  );
};

export default ResultsPage;
