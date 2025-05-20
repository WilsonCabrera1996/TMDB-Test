import React, {useContext} from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieList from '../components/MovieList';

const FavoritesPage: React.FC =() => {
    const {favorites} = useContext(FavoritesContext);

    return(
        <div>
            <h2 style={{textAlign:'center'}}> Mis peliculas favoritas</h2>
            <MovieList movies={favorites}/>
        </div>
    );
};

export default FavoritesPage;