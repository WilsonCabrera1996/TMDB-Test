import { useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';
import { ArrowLeft04Icon } from 'hugeicons-react';
import { LoadingIndicator } from '../components/LoadingIndicator';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { movieQuery } = useMovie(id ? id : "")
  const navigation = useNavigate()
  const isSameTitle = movieQuery.data?.title === movieQuery.data?.original_title

  const colorVoteAverage = (avg: number) => {
    if (avg >= 8) return "green"
    if (avg < 8 && avg >= 6.5) {
      return "yellow"
    } else {
      return "red"
    }
  }

  if (movieQuery.isLoading || !movieQuery.data) return (
    <LoadingIndicator />
  )

  return (
    <div style={{ padding: '2rem', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative" }}>
      <ArrowLeft04Icon style={{ position: "absolute", left: 56, top: 56, padding: 8, borderRadius: 8, cursor: "pointer" }} className='go-back-btn' onClick={() => navigation(-1)} />
      <div style={{ display: "flex", alignItems: "center", marginBottom: 36 }}>
        {
          isSameTitle ?
            (
              <h2 style={{ margin: 0, marginRight: 12 }}>{movieQuery.data.title}</h2>
            )
            :
            (
              <>
                <h2 style={{ margin: 0, marginRight: 12 }}>{movieQuery.data.title}</h2>
                <h3 style={{ margin: 0, marginTop: 3, color: "#8b8b8b" }}>{"(" + movieQuery.data.original_title + ")"}</h3>
              </>
            )
        }
      </div>
      <div style={{ display: "flex", gap: 32, paddingRight: 24, paddingLeft: 24, alignItems: "center", marginBottom: 12 }}>
        <img src={`https://image.tmdb.org/t/p/w500${movieQuery.data.poster_path}`} alt={movieQuery.data.title} width={350} style={{ borderRadius: 16, boxShadow: "0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.16), 0 24px 24px rgba(0,0,0,0.20)" }} />
        <p style={{ width: "60ch" }}>{movieQuery.data.overview ? movieQuery.data.overview : "Esta película no tiene descripción"}</p>
      </div>
      <p><strong>Fecha de lanzamiento:</strong> {movieQuery.data.release_date.toString()}</p>
      <p style={{ color: colorVoteAverage(movieQuery.data.vote_average) }}>{movieQuery.data.vote_average.toString().slice(0, 4)}</p>
    </div>
  );
};

export default MovieDetails;