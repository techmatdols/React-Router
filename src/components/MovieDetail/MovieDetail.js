import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {movies} from '../MovieList/MovieList'; 

const MovieDetail = () => {
  const { id } = useParams();


  const movie = movies.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title={movie.title} width="560" height="315" src={movie.trailerLink} frameborder="0" allowfullscreen></iframe>
      <Link to="/movies">Back to Movies</Link>

    </div>
  );
};

export default MovieDetail;
