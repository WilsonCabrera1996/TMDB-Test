import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/MovieList';

const MoviesPage: React.FC = () => {
    const{ movies, loading } = useMovies();

    if ( loading ) return <p>Cargando peliculas...</p>
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Peliculas Populares</h2>
            <MovieList movies={movies}/>
        </div>
    );
};

export default MoviesPage;