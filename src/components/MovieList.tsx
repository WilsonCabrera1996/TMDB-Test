import React from 'react';
import type{ Movie } from '../types/Movie';
import MovieCard from './MovieCard';

interface Props {
    movies: Movie[];
}

const MovieList: React.FC<Props> = ({movies}) => {
    return(
        <div style={{display:'flex',flexWrap:'wrap', justifyContent: 'center'}}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );

};

export default MovieList;