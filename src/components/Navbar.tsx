import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222' }}>
            <div style={{ justifyContent: "center", gap: 12, display: "flex" }}>
                <Link to="/" style={{ color: '#fff', userSelect: "none" }}>Inicio</Link>
                <Link to="/movies" style={{ color: '#fff', userSelect: "none" }}>Películas</Link>
                <Link to="/favorites" style={{ color: '#fff', userSelect: "none" }}>Favoritas</Link>
            </div>
        </nav>
    );
};

export default Navbar;