import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  try {
    useEffect(() => {
      getLocation();
    }, []);

    const getLocation = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
      }
    };
  } catch (error) {
    console.log(error);
  }

  return location;
};
