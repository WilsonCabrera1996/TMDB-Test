import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/MovieList';

const MoviesPage: React.FC = () => {
    const{ moviesQuery } = useMovies();

    if ( moviesQuery.isLoading ) return (
        <div style={{display: "flex", justifyContent: "center", marginTop: 24}}>
            <p>Cargando peliculas...</p>
        </div>
    )
    return(
        <div>
            <h2 style={{textAlign:'center'}}>Peliculas Populares</h2>
            <MovieList movies={moviesQuery.data}/>
        </div>
    );
};

export default MoviesPage;