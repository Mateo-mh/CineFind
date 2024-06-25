/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ModalCard({ show, onClose, movie }) {
  if (!show) return null;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 10; i += 2) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating === i - 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-lg w-full">
        <button onClick={onClose} className="text-gray-400 text-[13px] float-right mb-5">X</button>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full rounded-lg mb-4" />
        <h2 className="text-white text-2xl mb-2">{movie.title}</h2>
        <p className="mt-2 text-[#3c73cd]">Release Date: {movie.release_date}</p>
        <p className="flex mt-2 mb-2 text-[#3c73cd]">{renderStars(movie.vote_average)}</p>
        <p className="text-gray-400">{movie.overview}</p>
      </div>
    </div>
  );
}

export default ModalCard;
