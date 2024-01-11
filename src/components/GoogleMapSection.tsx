import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { MapStyle } from "../styles/MapStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
  setTravelTimeInformation,
} from "../slices/navSlice";
import circleIcon from "../icons/searchCircle.png";
import squareIcon from "../icons/searchSquare.png";

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
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (origin) {
      setCenterMap(origin.coordinates);
    }
    if (!origin && destination) {
      setCenterMap(destination.coordinates);
    }
    if (!origin && !destination) {
      setCenterMap(defaultMapCenter);
    }
    if (origin && destination) {
      handleDirectionRoute();
    }
  }, [origin]);

  useEffect(() => {
    if (destination) {
      setCenterMap(destination.coordinates);
    }
    if (!destination && origin) {
      setCenterMap(origin.coordinates);
    }
    if (!destination && !origin) {
      setCenterMap(defaultMapCenter);
    }
    if (origin && destination) {
      handleDirectionRoute();
    }
  }, [destination]);

  useEffect(() => {
    console.log("DIRECTION", travelTimeInformation);
    console.log("origin", origin);
    console.log("destination", destination);
  }, [travelTimeInformation, origin, destination]);

  const handleDirectionRoute = () => {
    const directionService = new google.maps.DirectionsService();

    if (origin && destination) {
      directionService.route(
        {
          origin: origin.coordinates,
          destination: destination.coordinates,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK" && result) {
            dispatch(setTravelTimeInformation(result));
          } else {
            console.error(`Directions request failed due to ${status}`);
            dispatch(setTravelTimeInformation(null));
          }
        },
      );
    }
  };

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
      {origin && (
        <MarkerF
          position={origin?.coordinates}
          icon={{
            url: circleIcon,
            scaledSize: {
              width: 20,
              height: 20,
              equals: () => false,
            },
          }}
        >
          <OverlayViewF
            position={origin?.coordinates}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2">
              <p className="bg-white p-2 text-base font-medium leading-5 text-black">
                From: {origin.placeData.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {destination && (
        <MarkerF
          position={destination?.coordinates}
          icon={{
            url: squareIcon,
            scaledSize: {
              width: 20,
              height: 20,
              equals: () => false,
            },
          }}
        >
          <OverlayViewF
            position={destination?.coordinates}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-1">
              <p className="bg-white p-2 text-base font-medium leading-5 text-black">
                To: {destination.placeData.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {travelTimeInformation && (
        <DirectionsRenderer
          directions={travelTimeInformation}
          options={{
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: "black",
            },
          }}
        />
      )}
    </GoogleMap>
  );
};

export default GoogleMapSection;
