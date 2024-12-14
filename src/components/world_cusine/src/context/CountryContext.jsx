import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { countryData } from '../data/countryData';

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};

export const CountryProvider = ({ children }) => {
  const [countries] = useState(countryData);

  const getCountryByCode = (code) => countries[code];
  
  const getCountriesByRegion = (region) => {
    if (region === 'All') return countries;
    return Object.fromEntries(
      Object.entries(countries).filter(([_, country]) => country.region === region)
    );
  };

  const searchCountries = (query) => {
    if (!query) return countries;
    return Object.fromEntries(
      Object.entries(countries).filter(([_, country]) => 
        country.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const value = {
    countries,
    getCountryByCode,
    getCountriesByRegion,
    searchCountries
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};

CountryProvider.propTypes = {
  children: PropTypes.node.isRequired
};