import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { useCountry } from "../context/CountryContext";
import { getCountryStats } from "../utils/regionHelpers";

const WorldMap = ({ searchQuery, selectedRegion }) => {
  const navigate = useNavigate();
  const { countries } = useCountry();

  // used to navigate countries there
  const handleCountryClick = (_, code) => {
    if (countries[code]) {
      navigate(`/country/${code}`);
    }
  };

  // mark the highlighted countries to add
  const getHighlightedCountries = () => {
    return Object.keys(countries).reduce(
      (acc, code) => ({
        ...acc,
        [code]: searchQuery
          ? countries[code].name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
            ? 1
            : 0.3
          : 1,
      }),
      {}
    );
  };

  return (
    <div className="h-[600px] py-20 w-full rounded-lg overflow-hidden shadow-lg bg-gray-800">
      <VectorMap // vectors map class trhewrw
        map={worldMill}
        onRegionClick={handleCountryClick}
        backgroundColor="#1f2937"
        containerClassName="w-full h-full"
        regionStyle={{
          initial: {
            fill: "#4b5563",
            stroke: "#374151",
            strokeWidth: 0.5,
          },
          hover: {
            fill: "#60a5fa",
            cursor: "pointer",
          },
          selected: {
            fill: "#3b82f6",
          },
        }}
        series={{
          regions: [
            {
              scale: ["#246bce", "#3b82f6"],
              values: getHighlightedCountries(),
              attribute: "fill",
            },
          ],
        }}
        onRegionTipShow={(_, label, code) => {
          if (countries[code]) {
            const stats = getCountryStats(countries[code]);
            return `${countries[code].name} (${stats.totalDishes} traditional dishes)`;
          }
          return label;
        }}
        zoomOnScroll={false}
        zoomButtons={true}
      />
    </div>
  );
};

// props to define worldmap there
WorldMap.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default WorldMap;
