import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultsInfo = () => {
  return (
    <div className="infoBox">
      <h3 className="subHeader">Pollutants Infomation</h3>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Carbon monoxide (CO)</Accordion.Header>
          <Accordion.Body>
            Carbon monoxide is a colourless, odourless and tasteless toxic gas
            produced by the incomplete combustion of carbonaceous fuels such as
            wood, petrol, charcoal, natural gas and kerosene.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Nitrogen dioxide (NO2)</Accordion.Header>
          <Accordion.Body>
            NO2 is a gas that is commonly released from the combustion of fuels
            in the transportation and industrial sectors.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Ozone (O3)</Accordion.Header>
          <Accordion.Body>
            Ozone at ground level – not to be confused with the ozone layer in
            the upper atmosphere – is one of the major constituents of
            photochemical smog and it is formed through the reaction with gases
            in the presence of sunlight.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Particulate matter (PM)</Accordion.Header>
          <Accordion.Body>
            PM is a common proxy indicator for air pollution. There is strong
            evidence for the negative health impacts associated with exposure to
            this pollutant. The major components of PM are sulfates, nitrates,
            ammonia, sodium chloride, black carbon, mineral dust and water.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Sulfur dioxide (SO2)</Accordion.Header>
          <Accordion.Body>
            SO2 is a colourless gas with a sharp odour. It is produced from the
            burning of fossil fuels (coal and oil) and the smelting of mineral
            ores that contain sulfur.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ResultsInfo;
