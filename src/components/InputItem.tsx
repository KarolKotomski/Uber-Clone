import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import ClearValue from "./icons/ClearValue";
import SearchCircle from "./icons/SearchCircle";
import SearchSquare from "./icons/SearchSquare";
import { useEffect, useState } from "react";
import { Option } from "react-google-places-autocomplete/build/types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setDestination,
  setOrigin,
} from "../slices/navSlice";

type Props = {
  type: "source" | "destination";
};

const InputItem = ({ type }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [value, setValue] = useState<Option | null>(null);

  const dispatch = useDispatch();

  let placeholder;
  if (type === "source") {
    placeholder = "Enter Location";
  }
  if (type === "destination") {
    placeholder = "Enter Destination";
  }

  const handleSelect = (data: any, type: "source" | "destination") => {
    if (data) {
      geocodeByPlaceId(data.value.place_id)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => {
          type === "source"
            ? dispatch(setOrigin(latLng))
            : dispatch(setDestination(latLng));
        })
        .catch((error) => console.error("Error", error));
    }
  };

  const handleClear = () => {
    setValue(null);
    setIsFilled(false);
    type === "source"
      ? dispatch(setOrigin(null))
      : dispatch(setDestination(null));
  };

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  useEffect(() => {
    console.log("origin", origin);
    console.log("destination", destination);
  }, [origin, destination]);

  return (
    <div
      className={`relative flex items-center rounded-lg border-2 bg-lightGrey2 py-[0.1875rem] ${
        isFocused ? "border-black" : "border-lightGrey2"
      } border-lightGrey2`}
    >
      <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
        {type === "source" && <SearchCircle />}
        {type === "destination" && <SearchSquare />}
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
            isClearable: true,
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
