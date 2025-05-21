import type { Movie, Result } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async ({ pageParam }: { pageParam: number }): Promise<Result> => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageParam}`);
  const data = await res.json();
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES&page=1`);
  const data = await res.json();
  return data;
};
