import React from "react";
import { Camera, MapPin } from "lucide-react";

const PhotoGallery = ({ country }) => {
  // Simulate multiple photos for each landmark
  const photos = country.landmarks.flatMap((landmark) => [
    {
      title: landmark,
      location: country.name,
      imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(
        landmark
      )}`,
    }, // fetch specific landamarks there
    {
      title: `${landmark} - Detail`,
      location: country.name,
      imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(
        landmark + " architecture"
      )}`,
    },
  ]);

  // define div for recipe world cusine images
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore the stunning landmarks and scenic beauty of {country.name}{" "}
          through our curated collection of photographs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg aspect-square hover:transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {photo.title}
                </h3>
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
