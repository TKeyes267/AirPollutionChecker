import { Button, Form, Col, Row, Alert, FormLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPostCode } from "../utils/getPostcode";
import { useState, Dispatch, SetStateAction } from "react";
import { dataAirQualityT } from "../utils/types";

export interface Props {
  setErrorPost: Dispatch<SetStateAction<boolean>>;
  errorPost: boolean;
  setErrorGeo: Dispatch<SetStateAction<boolean>>;
  setDataLoaded: Dispatch<SetStateAction<boolean>>;
  setAirQualityData: Dispatch<SetStateAction<dataAirQualityT | undefined>>;
}

function Postcode({
  setAirQualityData,
  setDataLoaded,
  errorPost,
  setErrorPost,
  setErrorGeo,
}: Props) {
  const [errorPostcodeMsg, setPostcodeErrorMsg] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const postcode = event.target[0].value;

    getPostCode(postcode)
      .then((data) => {
        setAirQualityData(data);
        setDataLoaded(true);
        setErrorPost(false);
        setErrorGeo(false);
      })
      .catch((e) => {
        setErrorPost(true);
        setPostcodeErrorMsg(
          "Postcode can not be found, Please enter a valid Postcode"
        );
        console.log(e);
      });
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Search by Postcode</FormLabel>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="postcode"
                placeholder="Postcode"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <br></br>
      {errorPost ? <Alert variant="danger">{errorPostcodeMsg}</Alert> : null}
    </section>
  );
}

export default Postcode;
