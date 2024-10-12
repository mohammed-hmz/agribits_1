import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import Navb from "./components/Navbar";
import Login from "./components/Login";
import Farming from "./components/Farming";
import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";
import OwnerSpace from "./components/Owner";

function App() {
  const [lan, setlan] = useState("العربية");
  const [mode, setmode] = useState("Light");
  const owner = localStorage.getItem("token");

  const lang = () => {
    lan === "English" ? setlan("العربية") : setlan("English");
  };

  const Mode = () => {
    mode === "Dark" ? setmode("Light") : setmode("Dark"); // Corrected mode switching logic
  };

  const { pathname } = useLocation();

  return (
    <>
      {(pathname !== "/owner") && (
        <Navb lang={lang} lan={lan} Mode={Mode} mode={mode} />
      )}

      <Routes>
        <Route path="/login-owner" element={<Login lan={lan} />} />
        <Route path="*" element={<Farming mode={mode} lan={lan}/>} />
        {owner ? (
          <Route path="/owner" element={<OwnerSpace />} />
        ) : (
          <Route path="/owner" element={<Navigate to="/login-owner" />} /> // Redirect if not authenticated
        )}
      </Routes>

      {!(pathname === "/owner" || pathname === "/login-owner") && (
        <Footer lan={lan} />
      )}
    </>
  );
}

export default App;
