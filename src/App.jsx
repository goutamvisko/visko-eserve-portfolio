import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import LandingPage from "./pages/LandingPage";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
