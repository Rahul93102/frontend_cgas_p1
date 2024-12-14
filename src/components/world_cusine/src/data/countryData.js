import { europeanCountries } from "./regions/europe.js";
import { asianCountries } from "./regions/asia.js";
import { americanCountries } from "./regions/americas.js";
import { africanCountries } from "./regions/africa.js";
import { oceaniaCountries } from "./regions/oceania.js";
import { middleEastCountries } from "./regions/middleEast.js";

export const countryData = {
  ...europeanCountries,
  ...asianCountries,
  ...americanCountries,
  ...africanCountries,
  ...oceaniaCountries,
  ...middleEastCountries,
};
