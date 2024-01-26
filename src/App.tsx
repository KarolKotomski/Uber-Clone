import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { LoadScript } from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";
import { Suspense, lazy } from "react";
import FallBack from "./pages/Fallback";
import { HomeNavModalContextProvider } from "./context/HomeNavModalContext";

const libraries: Library[] = ["places"];

function App() {
  const apiKey = process.env.REACT_APP_API_KEY || "";

  const Home = lazy(() => import("./pages/Home"));
  const Ride = lazy(() => import("./pages/Ride"));
  const NoMatch = lazy(() => import("./pages/NoMatch"));
  const PaymentComplete = lazy(() => import("./pages/PaymentComplete"));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <HomeNavModalContextProvider>
          <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
            <Suspense fallback={<FallBack />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="ride" element={<Ride />} />
                <Route path="payment_complete" element={<PaymentComplete />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </Suspense>
          </LoadScript>
        </HomeNavModalContextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
