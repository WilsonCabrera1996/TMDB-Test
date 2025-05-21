import React from 'react';
import type { Movie } from '../types/Movie';
import { Link } from 'react-router-dom';

interface Props {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} style={{ color: "white", margin: 8 }}>
            <div style={{ width: '180px', margin: '1rem' }} className='card'>
                <div className='overlay'>
                    <img
                        className='card-img'
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style={{ width: '100%', borderRadius: '10px', boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.16), 0 24px 24px rgba(0,0,0,0.20)" }}
                    />
                </div>
                <h3>{movie.title}</h3>
                <p><small>{movie.release_date.toString()}</small></p>
            </div>
        </Link>
    );
};

export default MovieCard;