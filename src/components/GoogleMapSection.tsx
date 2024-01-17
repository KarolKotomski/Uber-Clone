import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { useCallback, useContext, useEffect, useState } from "react";
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
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";

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

  const { isSearchMenuActive, setIsSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (origin && destination && travelTimeInformation) {
      return;
    }
    if (!origin && !destination) {
      setCenterMap(defaultMapCenter);
    }

    if (origin && !destination) {
      setCenterMap(origin.coordinates);
    }

    if (!origin && destination) {
      setCenterMap(destination.coordinates);
    }

    if (origin && destination && !travelTimeInformation) {
      handleDirectionRoute();
    }


    if (!origin || !destination) {
      dispatch(setTravelTimeInformation(null));
    }

    if (origin && destination && !travelTimeInformation && isSearchMenuActive) {
      setIsSearchMenuActive(false);
      handleDirectionRoute();
    }
  }, [origin, destination, travelTimeInformation]);

  useEffect(() => {
    console.log("DIRECTION", travelTimeInformation);
    console.log("origin", origin);
    console.log("destination", destination);
    console.log("map", map);
  }, [travelTimeInformation, origin, destination, map]);

  const handleDirectionRoute = async () => {
    const directionService = new google.maps.DirectionsService();

    try {
      if (origin && destination) {
        const response = await directionService.route({
          origin: origin.coordinates,
          destination: destination.coordinates,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        dispatch(setTravelTimeInformation(response));
      }
    } catch (error) {
      console.error("Error ocurred during direction fetching", error);
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
