import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { CountryProvider } from "./context/CountryContext";

function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#272727]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
