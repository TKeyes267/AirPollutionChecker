import { Button, Alert } from "react-bootstrap";

import { useState, Dispatch, SetStateAction } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { getAirQuality } from "../utils/getAirquality";
import userGeoLocation from "../utils/getUserLocation";
import { dataAirQualityT } from "../utils/types";

export interface Props {
  setErrorPost: Dispatch<SetStateAction<boolean>>;
  errorGeo: boolean;
  setErrorGeo: Dispatch<SetStateAction<boolean>>;
  setDataLoaded: Dispatch<SetStateAction<boolean>>;
  setAirQualityData: Dispatch<SetStateAction<dataAirQualityT | undefined>>;
}

const Geolocation = ({
  setAirQualityData,
  setDataLoaded,
  errorGeo,
  setErrorGeo,
  setErrorPost,
}: Props) => {
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
      <h4> Search by Geolocation</h4>
      <br></br>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Show current location
      </Button>
      {errorGeo ? <Alert variant="warning">{errorGeoMsg}</Alert> : null}
    </section>
  );
};

export default Geolocation;
