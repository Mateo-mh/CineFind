/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../Cards/MovieCard';

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'a84c9a23c13fab9faf36a06b6f43fd09';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
          params: {
            api_key: apiKey,
            page: page,
          },
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="pt-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handlePrevPage} disabled={page === 1} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
        <button onClick={handleNextPage} disabled={page === totalPages} className="bg-gray-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default MoviePage;
