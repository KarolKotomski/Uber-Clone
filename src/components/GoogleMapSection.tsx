import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { MapStyle } from "../styles/MapStyle";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapCenter = {
  lat: 52.231844543054066,
  lng: 21.006048641809247,
};

const GoogleMapSection = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [centerMap, setCenterMap] = useState(defaultMapCenter);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (origin && map) {
      setCenterMap(origin.coordinates);
    }
    if (origin == null && destination && map) {
      setCenterMap(destination.coordinates);
    }
    if (origin === null && destination === null && map) {
      setCenterMap(defaultMapCenter);
    }
  }, [origin, map]);

  useEffect(() => {
    if (destination && map) {
      setCenterMap(destination.coordinates);
    }
    if (destination == null && origin && map) {
      setCenterMap(origin.coordinates);
    }
    if (origin === null && destination === null && map) {
      setCenterMap(defaultMapCenter);
    }
  }, [destination, map]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerMap}
      zoom={15}
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
