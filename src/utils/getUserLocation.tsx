import { useState, useEffect } from "react";

const userGeoLocation = () => {
  const [userLocation, setUserLocation] = useState({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (location: any) => {
    setUserLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return userLocation;
};

export default userGeoLocation;
