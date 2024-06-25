/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/navBar/Header';
import Slider from './Components/Slider/Slider';
import GenreMovieList from './Components/GenreMovies/GenreMovieList';
import MoviePage from './Components/MoviePage/MoviePage';

function App() {
  const [isMoviesRoute, setIsMoviesRoute] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/movies"
            element={
              <MoviePage
                setIsMoviesRoute={setIsMoviesRoute}
              />
            }
          />
          <Route path="/" element={<HomePage isMoviesRoute={isMoviesRoute} />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componente que representa la página de inicio
function HomePage({ isMoviesRoute }) {
  return (
    <>
      {!isMoviesRoute && (
        <>
          <Slider />
          <GenreMovieList />
        </>
      )}
    </>
  );
}

export default App;
