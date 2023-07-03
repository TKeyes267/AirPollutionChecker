const Data = ({ airQualityData }) => {
  const data = airQualityData.data.stations[0];
  return (
    <>
      <h2>Data</h2>
      <ul>
        <p>City: {data.placeName}</p>
        <p>Region: {data.city}</p>
        <p>Country: {data.countryCode}</p>

        <h3>{data.aqiInfo.category} </h3>
        <p> Primary Pollutant: {data.aqiInfo.pollutant}</p>

        <p> Air Quality Index: {data.AQI}</p>
        <p> Carbon Monoxide: {data.CO}</p>
        <p> Nitrogen dioxide: {data.NO2}</p>
        <p> Ozone: {data.OZONE}</p>
        <p> Particulate matter 1.0: {data.PM10}</p>
        <p> Particulate matter 2.5: {data.PM25}</p>
        <p> Sulfur dioxide: {data.SO2}</p>
      </ul>
    </>
  );
};

export default Data;
