import { useMemo } from "react";
import { useCountry } from "../context/CountryContext.jsx";

export const useCountryData = (searchQuery, selectedRegion) => {
  const { getCountriesByRegion, searchCountries } = useCountry();

  const filteredCountries = useMemo(() => {
    let result = getCountriesByRegion(selectedRegion);
    if (searchQuery) {
      result = searchCountries(searchQuery);
    }
    return result;
  }, [searchQuery, selectedRegion, getCountriesByRegion, searchCountries]);

  return filteredCountries;
};
