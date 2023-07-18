import { Card, Row, Col, Container } from "react-bootstrap";

import { dataAirQualityT } from "../utils/types";

export interface Props {
  airQualityData: dataAirQualityT;
}

const Data = ({ airQualityData }: Props) => {
  let aqiColor = "";
  let aqiTextColor = "";
  let aqiDescription = "";

  if (airQualityData !== undefined) {
    if (airQualityData?.aqi === 1) {
      aqiColor = "green";
      aqiTextColor = "white";
      aqiDescription = "Good";
    } else if (airQualityData?.aqi === 2) {
      aqiColor = "yellow";
      aqiTextColor = "black";
      aqiDescription = "Fair";
    } else if (airQualityData?.aqi === 3) {
      aqiColor = "orange";
      aqiTextColor = "black";
      aqiDescription = "Moderate";
    } else if (airQualityData?.aqi === 4) {
      aqiColor = "red";
      aqiTextColor = "white";
      aqiDescription = "Poor";
    } else if (airQualityData?.aqi === 5) {
      aqiColor = "darkred";
      aqiTextColor = "white";
      aqiDescription = "Very Poor";
    }

    let coColor = "";
    let coTextColor = "";
    let coDescription = "";

    if (airQualityData.co < 4400) {
      coColor = "green";
      coTextColor = "white";
      coDescription = "Good";
    } else if (airQualityData.co > 4400 && airQualityData.co < 9400) {
      coColor = "yellow";
      coTextColor = "black";
      coDescription = "Fair";
    } else if (airQualityData.co > 9400 && airQualityData.co < 12400) {
      coColor = "orange";
      coTextColor = "black";
      coDescription = "Moderate";
    } else if (airQualityData.co > 12400 && airQualityData.co < 15400) {
      coColor = "red";
      coTextColor = "white";
      coDescription = "Poor";
    } else if (airQualityData.co > 15400) {
      coColor = "darkred";
      coTextColor = "white";
      coDescription = "Very Poor";
    }

    let no2Color = "";
    let no2TextColor = "";
    let no2Description = "";

    if (airQualityData.no2 < 40) {
      no2Color = "green";
      no2TextColor = "white";
      no2Description = "Good";
    } else if (airQualityData.no2 > 40 && airQualityData.no2 < 70) {
      no2Color = "yellow";
      no2TextColor = "black";
      no2Description = "Fair";
    } else if (airQualityData.no2 > 70 && airQualityData.no2 < 150) {
      no2Color = "orange";
      no2TextColor = "black";
      no2Description = "Moderate";
    } else if (airQualityData.no2 > 150 && airQualityData.no2 < 200) {
      no2Color = "red";
      no2TextColor = "white";
      no2Description = "Poor";
    } else if (airQualityData.no2 > 200) {
      no2Color = "darkred";
      no2TextColor = "white";
      no2Description = "Very Poor";
    }

    let o3Color = "";
    let o3TextColor = "";
    let o3Description = "";

    if (airQualityData.o3 < 60) {
      o3Color = "green";
      o3TextColor = "white";
      o3Description = "Good";
    } else if (airQualityData.o3 > 60 && airQualityData.o3 < 100) {
      o3Color = "yellow";
      o3TextColor = "black";
      o3Description = "Fair";
    } else if (airQualityData.o3 > 100 && airQualityData.o3 < 140) {
      o3Color = "orange";
      o3TextColor = "black";
      o3Description = "Moderate";
    } else if (airQualityData.o3 > 140 && airQualityData.o3 < 180) {
      o3Color = "red";
      o3TextColor = "white";
      o3Description = "Poor";
    } else if (airQualityData.o3 > 180) {
      o3Color = "darkred";
      o3TextColor = "white";
      o3Description = "Very Poor";
    }

    let pm10Color = "";
    let pm10TextColor = "";
    let pm10Description = "";

    if (airQualityData.pm10 < 20) {
      pm10Color = "green";
      pm10TextColor = "white";
      pm10Description = "Good";
    } else if (airQualityData.pm10 > 20 && airQualityData.pm10 < 50) {
      pm10Color = "yellow";
      pm10TextColor = "black";
      pm10Description = "Fair";
    } else if (airQualityData.pm10 > 50 && airQualityData.pm10 < 100) {
      pm10Color = "orange";
      pm10TextColor = "black";
      pm10Description = "Moderate";
    } else if (airQualityData.pm10 > 100 && airQualityData.pm10 < 200) {
      pm10Color = "red";
      pm10TextColor = "white";
      pm10Description = "Poor";
    } else if (airQualityData.pm10 > 200) {
      pm10Color = "darkred";
      pm10TextColor = "white";
      pm10Description = "Very Poor";
    }

    let pm25Color = "";
    let pm25TextColor = "";
    let pm25Description = "";

    if (airQualityData.pm2_5 < 10) {
      pm25Color = "green";
      pm25TextColor = "white";
      pm25Description = "Good";
    } else if (airQualityData.pm2_5 > 10 && airQualityData.pm2_5 < 25) {
      pm25Color = "yellow";
      pm25TextColor = "black";
      pm25Description = "Fair";
    } else if (airQualityData.pm2_5 > 25 && airQualityData.pm2_5 < 50) {
      pm25Color = "orange";
      pm25TextColor = "black";
      pm25Description = "Moderate";
    } else if (airQualityData.pm2_5 > 50 && airQualityData.pm2_5 < 75) {
      pm25Color = "red";
      pm25TextColor = "white";
      pm25Description = "Poor";
    } else if (airQualityData.pm2_5 > 75) {
      pm25Color = "darkred";
      pm25TextColor = "white";
      pm25Description = "Very Poor";
    }

    let so2Color = "";
    let so2TextColor = "";
    let so2Description = "";

    if (airQualityData.so2 < 20) {
      so2Color = "green";
      so2TextColor = "white";
      so2Description = "Good";
    } else if (airQualityData.so2 > 20 && airQualityData.so2 < 80) {
      so2Color = "yellow";
      so2TextColor = "black";
      so2Description = "Fair";
    } else if (airQualityData.so2 > 80 && airQualityData.so2 < 250) {
      so2Color = "orange";
      so2TextColor = "black";
      so2Description = "Moderate";
    } else if (airQualityData.so2 > 250 && airQualityData.so2 < 350) {
      so2Color = "red";
      so2TextColor = "white";
      so2Description = "Poor";
    } else if (airQualityData.so2 > 350) {
      so2Color = "darkred";
      so2TextColor = "white";
      so2Description = "Very Poor";
    }
    return (
      <>
        <Card className="Data">
          <Row>
            <Col md={6}>
              <h3 className="Location">
                {airQualityData.name}, {airQualityData.state},{" "}
                {airQualityData.country}
              </h3>
            </Col>
            <Col md={6}>
              <h3
                className="AQI"
                style={{ background: aqiColor, color: aqiTextColor }}
              >
                Air Quality Index : {aqiDescription}{" "}
              </h3>
            </Col>
          </Row>

          <Container className="DataList">
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Carbon Monoxide </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.co} μg/m3 </p>
              </Col>
              <Col className="box" style={{ background: coColor }}>
                <p className="datatext" style={{ color: coTextColor }}>
                  {coDescription}
                </p>
              </Col>
            </Row>
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Nitrogen dioxide </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.no2} μg/m3 </p>
              </Col>
              <Col className="box" style={{ background: no2Color }}>
                <p className="datatext" style={{ color: no2TextColor }}>
                  {no2Description}
                </p>
              </Col>
            </Row>
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Ozone </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.o3} μg/m3</p>
              </Col>
              <Col className="box" style={{ background: o3Color }}>
                <p className="datatext" style={{ color: o3TextColor }}>
                  {o3Description}
                </p>
              </Col>
            </Row>
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Particulate matter 1.0 </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.pm10} μg/m3</p>
              </Col>
              <Col className="box" style={{ background: pm10Color }}>
                <p className="datatext" style={{ color: pm10TextColor }}>
                  {pm10Description}
                </p>
              </Col>
            </Row>
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Particulate matter 2.5 </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.pm2_5} μg/m3</p>
              </Col>
              <Col className="box" style={{ background: pm25Color }}>
                <p className="datatext" style={{ color: pm25TextColor }}>
                  {pm25Description}
                </p>
              </Col>
            </Row>
            <Row className="DataRow">
              <Col className="DataEntry">
                <p className="datatext"> Sulfur dioxide </p>
              </Col>
              <Col className="DataEntry">
                <p className="datatext"> {airQualityData.so2} μg/m3</p>
              </Col>
              <Col className="box" style={{ background: so2Color }}>
                <p className="datatext" style={{ color: so2TextColor }}>
                  {so2Description}
                </p>
              </Col>
            </Row>
          </Container>
        </Card>
      </>
    );
  }
};

export default Data;
