import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FaFacebook, FaTwitter, FaHeart } from "react-icons/fa";

const server = "https://backend-p1-cgas.onrender.com";
// main function fo defining daily recommendation
const DailyRecommendation = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    const fetchDailyRecommendation = async () => {
      try {
        const response = await axios.get(`${server}/recipes`); // used to take random recipes from server
        if (response.data && response.data.length > 0) {
          const randomRecipe =
            response.data[Math.floor(Math.random() * response.data.length)];
          setRecommendation(randomRecipe);
          setIsOpen(true);
        } else {
          console.error("No recipes available to recommend.");
        }
      } catch (error) {
        console.error("Error fetching daily recommendation:", error);
      }
    };

    fetchDailyRecommendation();
  }, []);

  // recipe closemodal and handle share
  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    console.log("Recipe saved:", recommendation.name);
  };

  const handleShare = (platform) => {
    console.log(`Sharing recipe on ${platform}`);
  };

  // ui ux to for recipe recommendation systems

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Daily Food Recommendation"
      className="ReactModal__Content relative bg-[#272727] flex flex-col rounded-lg shadow-xl max-w-lg mx-auto"
      overlayClassName="ReactModal__Overlay bg-[#00000080] backdrop-blur-lg backdrop-filter"
    >
      {recommendation ? (
        <div className="p-6 text-white">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-[#272727] p-2 text-[#ffc20d] hover:text-[#e8b416] rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </button>
          <img
            className="w-full h-40 object-cover rounded-lg"
            src={recommendation.imageUrl}
            alt={recommendation.name}
          />
          <h1 className="text-3xl font-semibold mt-4">{recommendation.name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {recommendation.description}
          </p>
          <p className="mt-4 font-semibold text-lg">
            Cooking Time: {recommendation.cookingTime} mins
          </p>
          <h3 className="mt-4 font-semibold text-lg">Ingredients:</h3>
          <ul className="list-disc list-inside ml-4">
            {recommendation.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            {/* Save Recipe Button */}
            <button
              onClick={handleSave}
              className="bg-[#ffc20d] text-[#272727] px-4 py-2 rounded-lg hover:bg-[#e8b416] transition-colors"
            >
              <FaHeart className="inline-block mr-2" /> Save Recipe
            </button>

            {/* Share Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={() => handleShare("Facebook")}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaFacebook size={24} />
              </button>
              <button
                onClick={() => handleShare("Twitter")}
                className="text-blue-400 hover:text-blue-600 transition-colors"
              >
                <FaTwitter size={24} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 text-white">Loading...</div>
      )}
    </Modal>
  );
};

export default DailyRecommendation;
