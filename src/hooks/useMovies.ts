import { useState } from 'react';
import { getPopularMovies } from '../services/MovieServices';
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {

    const [page, setPage] = useState(1)

    const moviesQuery = useQuery({
        queryKey: ["movies", page],
        queryFn: () => getPopularMovies({ pageParam: page }),
        staleTime: 1000 * 60,
    })

    const getNextPage = () => {
        if (moviesQuery.data?.results.length === 0) return 
        setPage(page + 1)
    }

    const getPrevPage = () => {
        if (page === 1) return
        setPage((prev) => prev - 1)
    }

    return {
        moviesQuery,
        getNextPage,
        getPrevPage,
    };
};
