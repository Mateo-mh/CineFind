/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import logo from "./../../assets/images/logo.png";
import { HiHome, HiPlayCircle } from "react-icons/hi2";
import HeaderItem from './HeaderItem';
import ModalCard from '../Cards/ModalCard';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const apiKey = 'a84c9a23c13fab9faf36a06b6f43fd09'; // Reemplaza con tu clave de API de TMDb
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: apiKey,
          query: searchQuery,
        }
      });
      const movie = response.data.results[0]; // Tomamos la primera película de los resultados
      if (movie) {
        setSelectedMovie(movie);
        setShowModal(true);
      } else {
        alert('Movie not found');
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
      alert('An error occurred while searching for the movie.');
    }
  };

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'MOVIES', icon: HiPlayCircle },
  ];

  return (
    <>
      <header className="w-full fixed top-0 left-0 px-2 md:px-4 py-2 bg-[#1a202c] shadow-md z-10 flex items-center justify-between">
        <div className="flex items-center space-x-7">
          <img src={logo} alt="Logo" className="w-[35px] md:w-[40px] object-cover mr-4" />
          <div className="hidden md:flex gap-8">
            {menu.map((item) => (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className="flex md:hidden gap-8">
            {menu.map((item, index) => index < 3 && (
              <HeaderItem key={item.name} name={''} Icon={item.icon} />
            ))}
          </div>
        </div>

        <form className="hidden md:flex relative w-full px-2 max-w-md" onSubmit={handleSearch}>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-2 pl-10 py-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search..." 
              required 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#3c73cd] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="perfil"
          className="w-[40px] rounded-full mr-1 md:mr-4" />
      </header>

      {showModal && selectedMovie && (
        <ModalCard show={showModal} onClose={() => setShowModal(false)} movie={selectedMovie} />
      )}
    </>
  );
}

export default Header;
