import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Utensils, Globe, Users } from "lucide-react";
import { useCountry } from "../context/CountryContext";
import { getCountryStats } from "../utils/regionHelpers";

const CountryDetail = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { getCountryByCode } = useCountry();
  const country = getCountryByCode(code);

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Country not found</h1>
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-[#ffc20d] hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Map
          </button>
        </div>
      </div>
    );
  }

  const stats = getCountryStats(country);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center bg-gray-900 bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Map
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-gray-800 rounded-xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">{country.name}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                <Utensils className="w-4 h-4 text-[#ffc20d]" />
                <span>{stats.totalDishes} Traditional Dishes</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-[#ffc20d]" />
                <span>{stats.totalLandmarks} Famous Landmarks</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-[#ffc20d]" />
                <span>{stats.totalCulturalAspects} Cultural Aspects</span>
              </div>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed">
              {country.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Utensils className="w-6 h-6 mr-3 text-[#ffc20d]" />
                <h2 className="text-xl font-semibold">Traditional Cuisine</h2>
              </div>
              <ul className="space-y-2">
                {country.cuisine.map((dish) => (
                  <li key={dish} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                    {dish}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 mr-3 text-[#ffc20d]" />
                <h2 className="text-xl font-semibold">Cultural Heritage</h2>
              </div>
              <ul className="space-y-2">
                {country.culture.map((item) => (
                  <li key={item} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-[#ffc20d]" />
                <h2 className="text-xl font-semibold">Famous Landmarks</h2>
              </div>
              <ul className="space-y-2">
                {country.landmarks.map((landmark) => (
                  <li
                    key={landmark}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
