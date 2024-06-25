/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ModalCard from './ModalCard';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <img 
        src={IMAGE_BASE_URL + movie.poster_path} 
        className='w-[110px] md:w-[200px] rounded-lg
          hover:border-[3px] border-gray-400 cursor-pointer
          hover:scale-110 transition-all duration-150 ease-in'
        onClick={handleCardClick}
      />
      <ModalCard show={showModal} onClose={handleCloseModal} movie={movie} />
    </>
  )
}

export default MovieCard;