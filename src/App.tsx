import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoadScript } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";
import { Suspense, lazy } from "react";
import FallBack from "./pages/Fallback";

const libraries: Library[] = ["places"];

function App() {
  const apiKey = process.env.REACT_APP_API_KEY || "";

  const Home = lazy(() => import("./pages/Home"));
  const Ride = lazy(() => import("./pages/Ride"));
  const NoMatch = lazy(() => import("./pages/NoMatch"));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
          <Suspense fallback={<FallBack />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="ride" element={<Ride />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>
        </LoadScript>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
