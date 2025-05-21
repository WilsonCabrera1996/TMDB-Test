import { useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { movieQuery } = useMovie(id ? id : "")
  const navigation = useNavigate()

  if (movieQuery.isLoading || !movieQuery.data) return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
      <p>Cargando peliculas...</p>
    </div>
  )

  return (
    <div style={{ padding: '2rem', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
      <button style={{ position: "absolute", top: 24, left: 110 }} onClick={() => navigation(-1)}>{"<- Volver atrás"}</button>
      <div style={{display: "flex", alignItems: "center"}}>
        <h2 style={{margin: 0}}>{movieQuery.data.title}</h2>
        <h3 style={{margin: 0}}>{movieQuery.data.original_title}</h3>
      </div>
      <div style={{ display: "flex", gap: 32, paddingRight: 24, paddingLeft: 24, alignItems: "center", marginBottom: 12 }}>
        <img src={`https://image.tmdb.org/t/p/w500${movieQuery.data.poster_path}`} alt={movieQuery.data.title} width={350} style={{ borderRadius: 16, boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.16), 0 24px 24px rgba(0,0,0,0.20)" }} />
        <p style={{ width: "60ch" }}>{movieQuery.data.overview ? movieQuery.data.overview : "Esta película no tiene descripción"}</p>
      </div>
      <p><strong>Fecha de lanzamiento:</strong> {movieQuery.data.release_date.toString()}</p>
    </div>
  );
};

export default MovieDetails;