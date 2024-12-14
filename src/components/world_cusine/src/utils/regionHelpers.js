// get the regions code
export const getRegionFromCode = (code) => {
  const regions = {
    AS: "Asia",
    EU: "Europe",
    NA: "Americas",
    SA: "Americas",
    AF: "Africa",
    OC: "Oceania",
  };
  return regions[code.substring(0, 2)] || "Other";
};

// define the regions
export const regions = [
  "All",
  "Asia",
  "Europe",
  "Americas",
  "Africa",
  "Oceania",
  "Middle East",
];

export const getCountryStats = (country) => ({
  totalDishes: country.cuisine.length,
  totalLandmarks: country.landmarks.length,
  totalCulturalAspects: country.culture.length,
});
