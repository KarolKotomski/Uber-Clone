import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ride from "./pages/Ride";
import NoMatch from "./pages/NoMatch";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoadScript } from "@react-google-maps/api";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY || "";

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ride" element={<Ride />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </LoadScript>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
