import axios from "axios";
import { dataAirQualityT } from "./types";

export const getAirQuality = (location: any) => {
  const APIkey = "02ed9996e52cb11e956b364b7af87bff";

  console.log(location);

  return axios
    .all([
      axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${APIkey}`
      ),
      axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&limit=5&appid=${APIkey}`
      ),
    ])

    .then(
      axios.spread((pollutionRes, locationRes) => {
        const dataAirQuality: dataAirQualityT = {
          name: locationRes.data[0].name,
          country: locationRes.data[0].country,
          state: locationRes.data[0].state,
          aqi: pollutionRes.data.list[0].main.aqi,
          co: pollutionRes.data.list[0].components.co,
          nh3: pollutionRes.data.list[0].components.nh3,
          no: pollutionRes.data.list[0].components.no,
          no2: pollutionRes.data.list[0].components.no2,
          o3: pollutionRes.data.list[0].components.o3,
          pm2_5: pollutionRes.data.list[0].components.pm2_5,
          pm10: pollutionRes.data.list[0].components.pm10,
          so2: pollutionRes.data.list[0].components.so2,
        };
        return dataAirQuality;
      })
    );
};
