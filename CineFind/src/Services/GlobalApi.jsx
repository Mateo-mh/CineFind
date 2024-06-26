/* eslint-disable no-unused-vars */
import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_Key = 'a84c9a23c13fab9faf36a06b6f43fd09'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a84c9a23c13fab9faf36a06b6f43fd09';
//https://api.themoviedb.org/3/trending/all/day?api_key=a84c9a23c13fab9faf36a06b6f43fd09

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_Key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}