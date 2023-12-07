import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RidePage from "./pages/RidePage";
import NoMatch from "./pages/NoMatch";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="ride" element={<RidePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
