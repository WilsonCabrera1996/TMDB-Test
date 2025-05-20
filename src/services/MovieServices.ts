import type { Movie } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

function sleep(time: number) {
  return new Promise(res => 
    setTimeout(() => {
      res(true)
    }, time)
  )
}

export const getPopularMovies = async () => {
  await sleep(1000)
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
  const data = await res.json();
  return data.results;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  await sleep(1000)
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES&page=1`);
  const data = await res.json();
  return data;
};
