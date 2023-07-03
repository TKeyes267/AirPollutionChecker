import axios from "axios";

export const getPostCode = (postcode: any) => {
  return axios.get(`https://postcodes.io/postcodes/${postcode}`).then((res) => {
    let num1 = res.data.result.longitude;
    let num2 = res.data.result.latitude;
    const postcodeLocation = {
      loaded: true,
      coordinates: { lat: num2, lng: num1 },
    };
    console.log(postcodeLocation);
    return postcodeLocation;
  });
};
