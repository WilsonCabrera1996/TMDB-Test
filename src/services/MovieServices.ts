import type { Movie, Result } from "../types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = 'https://api.themoviedb.org/3';

async function sleep(milliseconds: number) {
  return new Promise(
    (res) => {
      setTimeout(() => {
        res(true)
      }, milliseconds);
    }
  )
}

export const getPopularMovies = async ({ pageParam }: { pageParam: number }): Promise<Result> => {
  // await sleep(1000)
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageParam}`);
  const data = await res.json();
  return data;
};

export const getTopRatedMovies = async ({ pageParam = 1 }: { pageParam?: number }): Promise<Result> => {
  // await sleep(1000)
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${pageParam}`);
  const data = await res.json();
  return data;
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES&page=1`);
  const data = await res.json();
  return data;
};
