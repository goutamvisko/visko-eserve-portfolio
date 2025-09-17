import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./layouts/PublicRoute";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
import FluidCursor from "./animation/FluidCursor";
// import NeuralGlow from "./animation/NeuralGlow";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <>
      <ToastContainer />
      <FluidCursor />
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<LandingPage scrollTo="about" />} />
            <Route path="hero" element={<LandingPage scrollTo="hero" />} />
            <Route path="services" element={<LandingPage scrollTo="services" />} />
            <Route path="portfolio" element={<LandingPage scrollTo="portfolio" />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
