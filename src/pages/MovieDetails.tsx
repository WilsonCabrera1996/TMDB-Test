import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Movie } from '../types/Movie';

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=<<YOUR_API_KEY>>&language=es-ES`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Cargando detalles...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;