import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero-background">
            <div className="welcome-text">
                <h1>Bienvenido a Cine APP</h1>
            </div>

            <p>Explora peliculas populares, descubre tus favoritas y mas.</p>

            <div>
                <Link to="/movies">
                    <button>Explorar</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;