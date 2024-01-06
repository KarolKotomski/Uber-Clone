import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ride from "./pages/Ride";
import NoMatch from "./pages/NoMatch";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ride" element={<Ride />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
