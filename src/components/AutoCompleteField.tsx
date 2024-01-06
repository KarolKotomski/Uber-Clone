import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import SearchCircle from "./icons/SearchCircle";

const AutoCompleteField = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div className="relative">
      <GooglePlacesAutocomplete
        apiKey={apiKey}
        debounce={400}
        apiOptions={{ language: "en", region: "en" }}
        minLengthAutocomplete={2}
        selectProps={{
          placeholder: "Enter location",
          styles: {
            control: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "0.5rem",
              backgroundColor: "rgb(238 238 238)",
              borderColor: "black",
              borderWidth: "0.125rem",
              outlineColor: "rgba(0, 0, 0, 0)",
              boxShadow: "rgba(0, 0, 0, 0)",
              ":hover": {
                borderColor: "black",
              },
            }),
            indicatorsContainer: (baseStyles) => ({
              ...baseStyles,
              display: "none",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              margin: 0,
              padding: 0,
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              padding: "0.625rem 2.25rem",
              color: "gray",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              padding: "0.625rem 2.25rem",
              margin: 0,
              border: 0,
              color: "black",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              padding: "0.625rem 2.25rem",
              margin: 0,
              border: 0,
              color: "black",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "white",
              borderRadius: "0.5rem",
              color: "black",
              margin: 0,
              cursor: "not-allowed",
              fontSize: "0.875rem",
            }),
          },
        }}
      />
      <div className="absolute left-3 top-1/2 w-5 -translate-y-1/2 text-black">
        <SearchCircle />
      </div>
    </div>
  );
};

export default AutoCompleteField;
