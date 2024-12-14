import React from "react";
import { Utensils, Clock, Users } from "lucide-react";

const RecipeGallery = ({ country }) => {
  // Simulated recipe data - in a real app, this would come from an API
  const recipes = country.cuisine.map((dish) => ({
    name: dish,
    prepTime: Math.floor(Math.random() * 60 + 30) + " minutes",
    servings: Math.floor(Math.random() * 6 + 2) + " servings",
    difficulty: ["Easy", "Medium", "Hard"][Math.floor(Math.random() * 3)],
    imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(
      dish
    )}`,
  }));

  return (
    <div className="space-y-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Traditional {country.name} Recipes
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the rich culinary heritage of {country.name} through these
          traditional recipes that have been passed down through generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.name}
            className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48">
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{recipe.name}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ffc20d]" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#ffc20d]" />
                  <span>{recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#ffc20d]" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGallery;
