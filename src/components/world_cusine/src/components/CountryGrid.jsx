import React from "react";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";
import { useCountryData } from "../hooks/useCountryData";

const CountryGrid = ({ searchQuery, selectedRegion }) => {
  // uses display filteredCountries
  const filteredCountries = useCountryData(searchQuery, selectedRegion);
  const countryEntries = Object.entries(filteredCountries);

  // uses to display the country grids
  return (
    <div className="container mx-auto px-4 py-8">
      {countryEntries.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          <p className="text-xl">No countries found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countryEntries.map(([code, country]) => (
            <CountryCard key={code} code={code} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

// countryfrid propTypes

CountryGrid.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default CountryGrid;
