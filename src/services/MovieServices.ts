// services/MovieService.ts
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bde250ce834a6987890c1c2c31128dd1&language=es-ES&page=1`);
  const data = await res.json();
  return data.results;
};
