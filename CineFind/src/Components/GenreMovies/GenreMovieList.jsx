/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import GenresList from '../../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div className='mt-5 ml-1 py-5'>
        {GenresList.genere.map((item, index) => index <= 4 && (
            <div className='mb-20 text-left' key={index}>
                <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                <MovieList genreId={item.id} index_={index}/>
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList
