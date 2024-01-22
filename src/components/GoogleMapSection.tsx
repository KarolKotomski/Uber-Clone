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
  selectDirections,
  setDirections,
  selectDistance,
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

const zoom = 15;

const GoogleMapSection = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [centerMap, setCenterMap] = useState(defaultMapCenter);

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);
  const distance = useSelector(selectDistance);
  const dispatch = useDispatch();

  const { setIsSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (!origin && !destination && map) {
      setCenterMap(defaultMapCenter);
      map.setZoom(zoom);
    } else if (origin && !destination && map) {
      setCenterMap(origin.coordinates);
      map.setZoom(zoom);
      dispatch(setDirections(null));
    } else if (!origin && destination && map) {
      setCenterMap(destination.coordinates);
      map.setZoom(zoom);
      dispatch(setDirections(null));
    }

    if (origin && destination && !directions && map) {
      setIsSearchMenuActive(false);
      setCenterMap(defaultMapCenter);
      map.setZoom(zoom);
      handleDirectionRoute();
    }
  }, [origin, destination, directions, map]);

  useEffect(() => {
    console.log("directions", directions);
    console.log("origin", origin);
    console.log("destination", destination);
    console.log("distance", distance);
  }, [directions, origin, destination, distance]);

  const handleDirectionRoute = async () => {
    const directionService = new google.maps.DirectionsService();
    try {
      if (origin && destination) {
        const response = await directionService.route({
          origin: origin.coordinates,
          destination: destination.coordinates,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        dispatch(setDirections(response));
      }
    } catch (error) {
      console.error("No route results error:", error);
      dispatch(setDirections(undefined));
      fitMap();
    }
  };

  const fitMap = () => {
    const bounds = new google.maps.LatLngBounds();
    if (map) {
      origin && bounds.extend(new google.maps.LatLng(origin.coordinates));
      destination &&
        bounds.extend(new google.maps.LatLng(destination.coordinates));
      map.fitBounds(bounds);
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerMap}
      zoom={zoom}
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

      {directions && (
        <DirectionsRenderer
          directions={directions}
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
