import React from "react";
import { Music, Palette, Theater, Book } from "lucide-react";

const CulturalInsights = ({ country }) => {
  const culturalCategories = [
    {
      title: "Arts & Music",
      icon: Music,
      items: country.culture.filter(
        (item) =>
          item.toLowerCase().includes("music") ||
          item.toLowerCase().includes("art") ||
          item.toLowerCase().includes("dance")
      ),
    },
    {
      title: "Traditions",
      icon: Palette,
      items: country.culture.filter(
        (item) =>
          item.toLowerCase().includes("tradition") ||
          item.toLowerCase().includes("festival")
      ),
    },
    {
      title: "Entertainment",
      icon: Theater,
      items: country.culture.filter(
        (item) =>
          item.toLowerCase().includes("cinema") ||
          item.toLowerCase().includes("theatre") ||
          item.toLowerCase().includes("sport")
      ),
    },
    {
      title: "Heritage",
      icon: Book,
      items: country.culture.filter(
        (item) =>
          !item.toLowerCase().includes("music") &&
          !item.toLowerCase().includes("art") &&
          !item.toLowerCase().includes("tradition") &&
          !item.toLowerCase().includes("cinema")
      ),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Cultural Heritage of {country.name}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore the rich cultural tapestry of {country.name}, from traditional
          arts to modern entertainment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {culturalCategories.map((category) => (
          <div key={category.title} className="bg-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-6 h-6 mr-3 text-[#ffc20d]" />
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalInsights;
