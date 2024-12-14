import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MapPin, Users, Utensils, Globe2 } from "lucide-react";
import { getCountryStats } from "../utils/regionHelpers";
// used to create country care there
const CountryCard = ({ country, code }) => {
  const navigate = useNavigate();
  const stats = getCountryStats(country);
  // used to return the ui code for country status
  return (
    <div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
      onClick={() => navigate(`/country/${code}`)}
    >
      <div className="relative h-48 py-20">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white mb-1">{country.name}</h3>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#ffc20d]" />
            <span className="text-gray-300 text-sm">{code}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-[#ffc20d]" />
            <span>{stats.totalDishes} Traditional Dishes</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ffc20d]" />
            <span>{stats.totalLandmarks} Landmarks</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-300">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#ffc20d]" />
            <span>{stats.totalCulturalAspects} Cultural Aspects</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <button className="w-full py-2 text-[#ffc20d] border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

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

// whole div returns the county,name,cusine,culture,imageurl,description and imageurl
export default CountryCard;
