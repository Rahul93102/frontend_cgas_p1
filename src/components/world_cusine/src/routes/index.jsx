import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetail from '../pages/CountryDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryDetail />} />
    </Routes>
  );
};

export default AppRoutes;