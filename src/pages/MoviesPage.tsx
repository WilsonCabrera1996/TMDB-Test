import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/MovieList';

const MoviesPage: React.FC = () => {
    const { moviesQuery, getNextPage, getPrevPage } = useMovies();

    if (moviesQuery.isLoading || !moviesQuery.data) return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
            <p>Cargando peliculas...</p>
        </div>
    )

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 36 }}>
            <h2 style={{ textAlign: 'center' }}>Peliculas Populares</h2>
            <MovieList movies={moviesQuery.data.results} />
            <div style={{ display: "flex", gap: 16, paddingTop: 36 }}>
                <button style={{ width: 150 }} onClick={getPrevPage} disabled={moviesQuery.isFetching}>Anterior</button>
                <button style={{ width: 150 }} onClick={getNextPage} disabled={moviesQuery.isFetching}>Siguiente</button>
            </div>
        </div>
    );
};

export default MoviesPage;