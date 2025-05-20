import React from 'react';
import type { Movie } from '../types/Movie';


interface Props {
    movie:Movie;
}

const MovieCard: React.FC<Props> =({ movie }) => {
    return (
        <div style ={{width: '200px', margin:'1rem'}}>
            <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width : '100%', borderRadius:'10px'}}
            />
            <h3>{movie.title}</h3>
            <p><small>{movie.release_date}</small></p>
        </div>
    );
};

export default MovieCard;