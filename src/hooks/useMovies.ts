import { useState } from 'react';
import { getPopularMovies, getTopRatedMovies } from '../services/MovieServices';
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {

    const [page, setPage] = useState(1)

    const topRatedMoviesQuery = useQuery({
        queryKey: ["movies", "top_rated"],
        queryFn: () => getTopRatedMovies({}),
        staleTime: 1000 * 60,
    })

    const popularMoviesQuery = useQuery({
        queryKey: ["movies", "popular", page],
        queryFn: () => getPopularMovies({ pageParam: page }),
        staleTime: 1000 * 60,
    })

    const getNextPage = () => {
        if (popularMoviesQuery.data?.results.length === 0) return
        setPage(page + 1)
    }

    const getPrevPage = () => {
        if (page === 1) return
        setPage((prev) => prev - 1)
    }

    return {
        popularMoviesQuery,
        topRatedMoviesQuery,
        getNextPage,
        getPrevPage,
    };
};
