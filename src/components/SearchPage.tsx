import Postcode from "./Postcode";
import Geolocation from "./Geolocation";
import Data from "./Data";
import Intro from "./Intro";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { dataAirQualityT } from "../utils/types";
import ResultsInfo from "./ResultsInfo";

const SearchPage = () => {
  const [airQualityData, setAirQualityData] = useState<
    dataAirQualityT | undefined
  >();

  const [dataLoaded, setDataLoaded] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [errorGeo, setErrorGeo] = useState(false);

  if (dataLoaded === false) {
    return (
      <section className="body">
        <Intro />
        <Card className="SearchCard">
          <Row>
            <Col>
              <Postcode
                setAirQualityData={setAirQualityData}
                setDataLoaded={setDataLoaded}
                errorPost={errorPost}
                setErrorPost={setErrorPost}
                setErrorGeo={setErrorGeo}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>
              <Geolocation
                setAirQualityData={setAirQualityData}
                setDataLoaded={setDataLoaded}
                errorGeo={errorGeo}
                setErrorGeo={setErrorGeo}
                setErrorPost={setErrorPost}
              />
            </Col>
          </Row>
        </Card>
      </section>
    );
  } else {
    return (
      <section className="body">
        <Row>
          <Col>
            <Data airQualityData={airQualityData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="SearchCard">
              <h3 className="subHeader">Search for Air Quality Data</h3>
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
          </Col>
          <Col>
            <Card className="InfoCard">
              <ResultsInfo />
            </Card>
          </Col>
        </Row>
      </section>
    );
  }
};

export default SearchPage;
