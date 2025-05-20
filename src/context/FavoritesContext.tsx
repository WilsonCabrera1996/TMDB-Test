import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { Movie } from '../types/Movie';

interface FavoritesContextType {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => { },
    removeFavorite: () => { }
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie) => {
        if (!favorites.find(f => f.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };
    const removeFavorite = (id: number) => {
        setFavorites(favorites.filter(movie => movie.id !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};