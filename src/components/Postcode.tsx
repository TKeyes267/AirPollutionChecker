import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPostCode } from "../utils/getPostcode";
import { getAirQuality } from "../utils/getAirquality";
import { useState } from "react";

const Postcode = ({ setAirQualityData, setDataLoaded }) => {
  const [postcodeCoordinates, setPostcodeCoordinates] = useState({});

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const postcode = event.target[0].value;

    getPostCode(postcode).then((newCoordinates) => {
      if (newCoordinates.loaded) {
        setPostcodeCoordinates(newCoordinates);
      }
    });

    getAirQuality(postcodeCoordinates).then((data) => {
      setAirQualityData(data);
      setDataLoaded(true);
    });
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search by Postcode</Form.Label>
          <Form.Control type="postcode" placeholder="M4 7BG"></Form.Control>
        </Form.Group>
        <br></br>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Card>
  );
};

export default Postcode;
