import {Link} from 'react-router-dom';

const Navbar = ()=> {

    return(

        <nav style={{display:'flex', justifyContent: 'space-between', padding:'1rem', background:'#222', color:'#fff'}}>

            <div>
                <Link to="/" style={{marginRight:'1rem',color:'#fff'}}>Inicio</Link>
                <Link to="/movies" style={{marginRight:'1rem', color: '#fff'}}>Peliculas</Link>
                <Link to="/favorites" style={{color:'#fff'}}>Favoritas</Link>
            </div>
        </nav>
    );
};

export default Navbar;