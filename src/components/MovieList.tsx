import React from 'react';
import type { Movie } from '../types/Movie';
import MovieCard from './MovieCard';

interface Props {
    movies: Movie[];
    minimized?: boolean
}

const MovieList: React.FC<Props> = ({ movies, minimized }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                !minimized ?
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    )) :
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} showDate={false} />
                    )).slice(0, 5)
            }
        </div>
    );

};

export default MovieList;