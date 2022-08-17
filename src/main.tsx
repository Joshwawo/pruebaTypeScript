import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import Error404 from "./pages/Error404";
import Home from "./pages/Id";
import Random from "./pages/Random";
import RandomId from "./pages/RandomId";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/random/:id" element={<RandomId />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
