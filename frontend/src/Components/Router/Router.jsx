import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Logement from "../../Pages/Logement/Logement";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Logement/:id" element={<Logement />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
