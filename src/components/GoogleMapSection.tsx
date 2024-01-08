import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import { MapStyle } from "../styles/MapStyle";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 52.231844543054066,
  lng: 21.006048641809247,
};

const GoogleMapSection = () => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        styles: MapStyle,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
};

export default GoogleMapSection;
