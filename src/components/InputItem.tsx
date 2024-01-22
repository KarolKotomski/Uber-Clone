import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import ClearValue from "./icons/ClearValue";
import SearchCircle from "./icons/SearchCircle";
import SearchSquare from "./icons/SearchSquare";
import { useContext, useEffect, useState } from "react";
import { Option } from "react-google-places-autocomplete/build/types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
  setDirections,
} from "../slices/navSlice";
import {
  SearchMenuContext,
  SearchMenuContextType,
} from "../context/SearchMenuContext";
import {
  RideResultsContext,
  RideResultsContextType,
} from "../context/RideResultsContext";
import {
  SmallScreenContext,
  SmallScreenContextType,
} from "../context/SmallScreenContext";
import {
  RideErrorScreenContext,
  RideErrorScreenContextType,
} from "../context/RideErrorScreenContext";

type Props = {
  type: "source" | "destination";
  isRide: boolean;
};

const InputItem = ({ type, isRide }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [value, setValue] = useState<Option | null>(null);

  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const { setIsSearchMenuActive }: SearchMenuContextType =
    useContext(SearchMenuContext);

  const { setIsRideResultsActive }: RideResultsContextType =
    useContext(RideResultsContext);

  const { isSmallScreen }: SmallScreenContextType =
    useContext(SmallScreenContext);

  const { setIsRideError }: RideErrorScreenContextType = useContext(
    RideErrorScreenContext,
  );

  let placeholder;
  if (type === "source") {
    placeholder = "Enter Location";
  }
  if (type === "destination") {
    placeholder = "Enter Destination";
  }

  const handleSelect = (
    data: Option | null,
    type: "source" | "destination",
  ) => {
    if (data) {
      geocodeByPlaceId(data.value.place_id)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          const payLoad = {
            placeData: data,
            coordinates: latLng,
          };

          type === "source"
            ? (() => {
                setIsRideError(false);
                setIsRideResultsActive(false);
                dispatch(setDirections(null));
                dispatch(setOrigin(payLoad));
              })()
            : (() => {
                setIsRideError(false);
                setIsRideResultsActive(false);
                dispatch(setDirections(null));
                dispatch(setDestination(payLoad));
              })();
        })
        .catch((error) => console.error("Error", error));
    }
  };

  const handleClear = () => {
    setIsFilled(false);
    setIsRideResultsActive(false);
    setIsRideError(false);
    type === "source"
      ? dispatch(setOrigin(null))
      : dispatch(setDestination(null));
  };

  useEffect(() => {
    if (type === "source" && origin) {
      setValue(origin.placeData);
      setIsFilled(true);
    } else if (type === "destination" && destination) {
      setValue(destination.placeData);
      setIsFilled(true);
    } else {
      setValue(null);
      setIsFilled(false);
    }
  }, [origin, destination]);

  return (
    <div
      className={`relative flex items-center rounded-lg border-2 bg-lightGrey2 py-[0.1875rem] ${
        isFocused ? "border-[#000]" : "border-lightGrey2"
      } border-lightGrey2 `}
      onFocus={() => isSmallScreen && setIsSearchMenuActive(true)}
    >
      <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
        {type === "source" && (
          <SearchCircle isFilled={isFilled} isRide={isRide} />
        )}
        {type === "destination" && (
          <SearchSquare isFilled={isFilled} isRide={isRide} />
        )}
      </div>
      <div
        className="w-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <GooglePlacesAutocomplete
          debounce={400}
          apiOptions={{ language: "en" }}
          minLengthAutocomplete={2}
          onLoadFailed={(error) =>
            console.error("Could not inject Google script", error)
          }
          selectProps={{
            value,
            onChange: (data) => {
              handleSelect(data, type);
              setValue(data);
              setIsFilled(true);
            },
            placeholder: placeholder,
            components: {
              DropdownIndicator: () => null,
              CrossIcon: () => null,
              IndicatorSeparator: () => null,
              ClearIndicator: () => null,
            },
            styles: {
              control: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#00ffff00",
                borderColor: "#00ffff00",
                border: "0",
                boxShadow: "0",
                ":hover": {
                  cursor: "text",
                },
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                margin: 0,
                padding: "0 2.5rem",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                borderRadius: "0.3rem",
                color: "rgb(84 84 84)",
                margin: "0.375rem 0 0 0",
                cursor: "not-allowed",
                fontSize: "0.875rem",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                color: state.isSelected ? "black" : "rgb(82 82 82)",
                backgroundColor: "white",
                ":hover": {
                  backgroundColor: "rgb(246 246 246)",
                  cursor: "pointer",
                  color: "black",
                },
              }),
            },
          }}
        />
      </div>
      {isFilled && (
        <div
          className="absolute right-3 top-1/2 w-6 -translate-y-1/2 text-black"
          onClick={handleClear}
        >
          <ClearValue />
        </div>
      )}
    </div>
  );
};

export default InputItem;
