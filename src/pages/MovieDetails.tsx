import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { movieQuery } = useMovie(id ? id : "")

  if (movieQuery.isLoading || !movieQuery.data) return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
      <p>Cargando peliculas...</p>
    </div>
  )
  return (
    <div style={{ padding: '2rem', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2>{movieQuery.data.title}</h2>
      <div style={{ display: "flex", gap: 32, paddingRight: 24, paddingLeft: 24, alignItems: "center", marginBottom: 12 }}>
        <img src={`https://image.tmdb.org/t/p/w500${movieQuery.data.poster_path}`} alt={movieQuery.data.title} width={350} />
        <p style={{ width: "60ch" }}>{movieQuery.data.overview}</p>
      </div>
      <p><strong>Fecha de lanzamiento:</strong> {movieQuery.data.release_date}</p>
    </div>
  );
};

export default MovieDetails;