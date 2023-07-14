import { Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAirQuality } from "../utils/getAirquality";
import userGeoLocation from "../utils/getUserLocation";

const Geolocation = ({
  setAirQualityData,
  setDataLoaded,
  errorGeo,
  setErrorGeo,
  setErrorPost,
}) => {
  const [errorGeoMsg, setGeoErrorMsg] = useState("");

  const userLocation = userGeoLocation();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (userLocation.loaded) {
      getAirQuality(userLocation).then((data) => {
        setAirQualityData(data);
        setDataLoaded(true);
        setErrorGeo(false);
        setErrorPost(false);
      });
    } else {
      setErrorGeo(true);
      setGeoErrorMsg(
        "Geolocation service not available, Please search using postcode."
      );
    }
  };

  return (
    <section>
      <h4> Or show data from your current location</h4>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Show current location
      </Button>
      {errorGeo ? <Alert variant="warning">{errorGeoMsg}</Alert> : null}
    </section>
  );
};

export default Geolocation;
