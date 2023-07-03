import axios from "axios";

// export const getAirQuality = (location: any) => {
//   return axios
//     .get(
//       `https://api.ambeedata.com/latest/by-lat-lng?lat=${location.coordinates.lat}&lng=${location.coordinates.lng}`,
//       {
//         headers: {
//           "x-api-key":
//             "a16abe8342b2c6546965adae9f4dda1970c65f0cb9111c2648432fb48be2a841",
//         },
//       }
//     )
//     .then((res) => {
//       const dataAirQuality = res;

//       return dataAirQuality;
//     });
// };

export const getAirQuality = (location: any) => {
  console.log(location);
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=02ed9996e52cb11e956b364b7af87bff`
    )
    .then((res) => {
      const dataAirQuality = res;
      console.log(res);

      return dataAirQuality;
    });
};
