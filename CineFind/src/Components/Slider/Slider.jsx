/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef();
    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    };

    const sliderRight = (element) => {
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft = (element) => {
        element.scrollLeft-=screenWidth-110
    }

    return (
        <div className="fixed w-full top-20 left-0">
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" 
            onClick={()=>sliderLeft(elementRef.current)} />
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" 
            onClick={()=>sliderRight(elementRef.current)} />

            <div className="flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} alt="slider"
                        className="min-w-full md:h-[315px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in" />
                ))}
            </div>
        </div>
    );
}

export default Slider;
