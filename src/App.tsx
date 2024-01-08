import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ride from "./pages/Ride";
import NoMatch from "./pages/NoMatch";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ride" element={<Ride />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
