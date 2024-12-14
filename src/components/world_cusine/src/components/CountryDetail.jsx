import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Utensils,
  Landmark,
  Users,
  Globe,
  Clock,
  Coins,
  Users as Population,
  Book,
  Palette,
  Music,
  Camera,
  Heart,
  Coffee,
} from "lucide-react";
import { countryData } from "../data/countryData";
import RecipeGallery from "./RecipeGallery";
import CulturalInsights from "./CulturalInsights";
import PhotoGallery from "./PhotoGallery";

// used to define the country detail and fetch in through world cusine.
const CountryDetail = () => {
  // Retrieve the country code from the URL parameters
  const { code } = useParams();
  const navigate = useNavigate();
  const country = code ? countryData[code] : null;
  const [activeTab, setActiveTab] = useState("overview");

  // If no country data is found, display a message and a button to go back to the map
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

  // If no countrytabs

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "cuisine", label: "Cuisine", icon: Utensils },
    { id: "culture", label: "Culture", icon: Palette },
    { id: "gallery", label: "Gallery", icon: Camera },
  ];

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
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4">{country.name}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-6">
                {country.capital && (
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4 text-[#ffc20d]" />
                    <span>Capital: {country.capital}</span>
                  </div> // used to define the country capial and names
                )}
                {country.population && (
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <Population className="w-4 h-4 text-[#ffc20d]" />
                    <span>Population: {country.population}</span>
                  </div>
                )}
                {country.currency && (
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <Coins className="w-4 h-4 text-[#ffc20d]" />
                    <span>Currency: {country.currency}</span>
                  </div> // used to define the country currency there
                )}
                {country.timeZone && (
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-[#ffc20d]" />
                    <span>Time Zone: {country.timeZone}</span>
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                {country.description}
              </p>
            </div>

            <div className="border-b border-gray-700">
              <nav className="flex gap-8">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors ${
                      activeTab === id
                        ? "border-blue-400 text-[#ffc20d]"
                        : "border-transparent text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Book className="w-6 h-6 mr-3 text-[#ffc20d]" />
                      <h2 className="text-xl font-semibold">Quick Facts</h2>
                    </div>
                    <ul className="space-y-3">
                      {country.language && (
                        <li className="text-gray-300">
                          <span className="font-semibold">Languages:</span>{" "}
                          {country.language.join(", ")}
                        </li>
                      )}
                      {country.region && (
                        <li className="text-gray-300">
                          <span className="font-semibold">Region:</span>{" "}
                          {country.region}
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Landmark className="w-6 h-6 mr-3 text-[#ffc20d]" />
                      <h2 className="text-xl font-semibold">Landmarks</h2>
                    </div>
                    <ul className="space-y-2">
                      {country.landmarks.map((item) => (
                        <li
                          key={item}
                          className="text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Music className="w-6 h-6 mr-3 text-[#ffc20d]" />
                      <h2 className="text-xl font-semibold">Culture</h2>
                    </div>
                    <ul className="space-y-2">
                      {country.culture.map((item) => (
                        <li
                          key={item}
                          className="text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Coffee className="w-6 h-6 mr-3 text-[#ffc20d]" />
                      <h2 className="text-xl font-semibold">Cuisine</h2>
                    </div>
                    <ul className="space-y-2">
                      {country.cuisine.map((item) => (
                        <li
                          key={item}
                          className="text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "cuisine" && <RecipeGallery country={country} />}
              {activeTab === "culture" && (
                <CulturalInsights country={country} />
              )}
              {activeTab === "gallery" && <PhotoGallery country={country} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
