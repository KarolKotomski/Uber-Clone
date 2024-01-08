import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import ClearValue from "./icons/ClearValue";
import SearchCircle from "./icons/SearchCircle";
import SearchSquare from "./icons/SearchSquare";
import { useState } from "react";

type Props = {
  type: "source" | "destination";
};

const InputItem = ({ type }: Props) => {

  const [isFocused, setIsFocused] = useState(false);

  let placeholder;
  if (type === "source") {
    placeholder = "Enter Location";
  }
  if (type === "destination") {
    placeholder = "Enter Destination";
  }

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
            placeholder: placeholder,
            isClearable: true,
            components: {
              DropdownIndicator: () => null,
              CrossIcon: () => null,
              IndicatorSeparator: () => null,
            },
            styles: {
              control: (baseStyles, state) => ({
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
      <div className="absolute right-3 top-1/2 hidden w-6 -translate-y-1/2 text-black">
        <ClearValue />
      </div>
    </div>
  );
};

export default InputItem;
