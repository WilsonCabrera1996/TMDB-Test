import { getPopularMovies } from '../services/MovieServices';
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    const moviesQuery = useQuery({
        queryKey: ["movies"],
        queryFn: getPopularMovies,
        staleTime: 1000 * 60
    })

    return {
        moviesQuery,
    };
};
