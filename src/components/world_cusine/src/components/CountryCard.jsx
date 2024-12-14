import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MapPin, Users, Utensils, Globe2 } from "lucide-react";
import { getCountryStats } from "../utils/regionHelpers";

// conutry card display
const CountryCard = ({ country, code }) => {
  const navigate = useNavigate();
  const stats = getCountryStats(country);

  // ui and ux display
  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
      onClick={() => navigate(`/country/${code}`)}
    >
      <div className="relative h-48">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300 text-sm">{code}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-blue-400" />
            <span>{stats.totalDishes} Traditional Dishes</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>{stats.totalLandmarks} Landmarks</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span>{stats.totalCulturalAspects} Cultural Aspects</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <button className="w-full py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

// props types used to display different attributes therew
CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.arrayOf(PropTypes.string).isRequired,
    culture: PropTypes.arrayOf(PropTypes.string).isRequired,
    landmarks: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  code: PropTypes.string.isRequired,
};

export default CountryCard;
