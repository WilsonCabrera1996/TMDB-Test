import { useEffect, useState } from "react";
import { getPopularMovies } from '../services/MovieServices';
import type { Movie } from '../types/Movie';


export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data);
            setloading(false);
        });
    }, []);
    return{movies, loading} ;
};
