import { useMovies } from '../hooks/useMovies';
import MovieList from '../components/MovieList';
import { LoadingIndicator } from '../components/LoadingIndicator';

const MoviesPage: React.FC = () => {
    const { popularMoviesQuery, getNextPage, getPrevPage } = useMovies();

    if (popularMoviesQuery.isLoading || !popularMoviesQuery.data) return (
        <LoadingIndicator />
    )

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 36 }}>
            <h2 style={{ textAlign: 'center' }}>Peliculas Populares</h2>
            <MovieList movies={popularMoviesQuery.data.results} />
            <div style={{ display: "flex", gap: 16, paddingTop: 36 }}>
                <button style={{ width: 150 }} onClick={getPrevPage} disabled={popularMoviesQuery.isFetching}>Anterior</button>
                <button style={{ width: 150 }} onClick={getNextPage} disabled={popularMoviesQuery.isFetching}>Siguiente</button>
            </div>
        </div>
    );
};

export default MoviesPage;