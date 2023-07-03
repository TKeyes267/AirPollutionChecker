import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAirQuality } from "../utils/getAirquality";
import userGeoLocation from "../utils/getUserLocation";

const Geolocation = ({ setAirQualityData, setDataLoaded }) => {
  const userLocation = userGeoLocation();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (userLocation.loaded) {
      getAirQuality(userLocation).then((data) => {
        setAirQualityData(data);
        setDataLoaded(true);
      });
    }
  };

  return (
    <>
      <Card>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Geolocation
        </Button>
      </Card>
    </>
  );
};

export default Geolocation;
