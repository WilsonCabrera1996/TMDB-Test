import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "../services/MovieServices"

export const useMovie = (id: string) => {

    const movieQuery = useQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieById(id),
        staleTime: 1000 * 60
    })

    return {
        movieQuery,
    }
}