import React from "react";
import PropTypes from "prop-types";
import { Globe, Search, Info } from "lucide-react";
import { regions } from "../utils/regionHelpers";

const Header = ({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}) => {
  return (
    <div className="bg-gray-800 shadow-lg py-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-[#ffc20d] animate-pulse" />
            <h1 className="text-3xl font-bold text-white">Foodify</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <select
              value={selectedRegion}
              onChange={(e) => onRegionChange(e.target.value)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-gray-400 text-sm flex items-center gap-2">
          <Info className="w-4 h-4" />
          <span>
            Click on a country to explore its culture, cuisine, and landmarks
          </span>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};

export default Header;
