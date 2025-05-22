import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useMovies } from '../hooks/useMovies';
import { LoadingIndicator } from '../components/LoadingIndicator';

const Home = () => {
    const { topRatedMoviesQuery } = useMovies();

    if (topRatedMoviesQuery.isLoading || !topRatedMoviesQuery.data?.results) return (
        <LoadingIndicator />
    )

    return (
        <div className="hero-background">
            <div className="welcome-text">
                <h1>Bienvenido a Cine APP</h1>
            </div>

            <p>Explora peliculas populares, descubre tus favoritas y mas.</p>

            <div>
                <MovieList movies={topRatedMoviesQuery.data.results} minimized />
                <Link to="/movies">
                    <button>Explorar</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;