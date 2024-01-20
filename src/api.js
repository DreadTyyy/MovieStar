import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASEURL;
const apiKey = import.meta.env.VITE_APP_APIKEY;

export const getPopularMovies = async () => {
  const popularMovies = await axios.get(
    `${baseURL}/movie/popular?api_key=${apiKey}`
  );
  return popularMovies.data.results;
};
export const getNewMovies = async () => {
  const newMovies = await axios.get(
    `${baseURL}/trending/movie/day?language=en-US&api_key=${apiKey}`
  );
  return newMovies.data.results;
};

export const queryMovies = async (keyword) => {
  const movies = await axios.get(
    `${baseURL}/search/movie?api_key=${apiKey}&query=${keyword}?`
  );
  return movies.data.results;
};
