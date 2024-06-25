/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import ModalCard from './ModalCard';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <section className='hover:scale-110 transition-all duration-150 ease-in' onClick={handleCardClick}>
        <img src={IMAGE_BASE_URL + movie.backdrop_path} 
          className='w-[110px] md:w-[260px] rounded-lg
          hover:border-[3px] border-gray-400 cursor-pointer' />
        <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
      </section>
      <ModalCard show={showModal} onClose={handleCloseModal} movie={movie} />
    </>
  )
}

export default HrMovieCard;
