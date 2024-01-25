import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { useCallback, useContext, useEffect, useLayoutEffect } from "react";
import { MapStyle } from "../styles/MapStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectDirections,
  setDirections,
} from "../slices/navSlice";
import circleIcon from "../icons/searchCircle.png";
import squareIcon from "../icons/searchSquare.png";
import { SearchMenuContext } from "../context/SearchMenuContext";
import { MapContext, defaultMapCenter, zoom } from "../context/MapContext";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapSection = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const directions = useSelector(selectDirections);
  const dispatch = useDispatch();

  const { setIsSearchMenuActive } = useContext(SearchMenuContext);
  const { map, setMap, centerMap, setCenterMap, handleDirectionRoute, fitMap } =
    useContext(MapContext);

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
    }

    if (origin && !destination && map) {
      setCenterMap(origin.coordinates);
      map.setZoom(zoom);
      dispatch(setDirections(null));
    }

    if (!origin && destination && map) {
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

  useLayoutEffect(() => {
    if (!origin || !destination) return;
    const handleResizeMap = () => fitMap();

    window.addEventListener("resize", handleResizeMap);
    return () => {
      window.removeEventListener("resize", handleResizeMap);
    };
  }, [window.innerWidth]);

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
