import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultsInfo = () => {
  return (
    <>
      <Card className="mb-3">
        <Card.Img></Card.Img>
        <Card.Body>
          <Card.Title>Pollutants Infomation</Card.Title>
          <Card.Header>Particulate matter (PM)</Card.Header>
          <Card.Text>
            PM is a common proxy indicator for air pollution. There is strong
            evidence for the negative health impacts associated with exposure to
            this pollutant. The major components of PM are sulfates, nitrates,
            ammonia, sodium chloride, black carbon, mineral dust and water.
          </Card.Text>
          <Card.Header>Carbon monoxide (CO)</Card.Header>
          <Card.Text>
            Carbon monoxide is a colourless, odourless and tasteless toxic gas
            produced by the incomplete combustion of carbonaceous fuels such as
            wood, petrol, charcoal, natural gas and kerosene.
          </Card.Text>
          <Card.Header>Ozone (O3)</Card.Header>
          <Card.Text>
            Ozone at ground level – not to be confused with the ozone layer in
            the upper atmosphere – is one of the major constituents of
            photochemical smog and it is formed through the reaction with gases
            in the presence of sunlight.
          </Card.Text>
          <Card.Header>Nitrogen dioxide (NO2)</Card.Header>
          <Card.Text>
            NO2 is a gas that is commonly released from the combustion of fuels
            in the transportation and industrial sectors.
          </Card.Text>
          <Card.Header>Sulfur dioxide (SO2)</Card.Header>
          <Card.Text>
            SO2 is a colourless gas with a sharp odour. It is produced from the
            burning of fossil fuels (coal and oil) and the smelting of mineral
            ores that contain sulfur.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResultsInfo;
