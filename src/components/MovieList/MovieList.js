import React from 'react';
import { Link } from 'react-router-dom';
// import movies from './movies'; // Your movie data


export const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description for Movie 1.',
      trailerLink: './video/banana.mp4',
    },

    // {
    //   id: 2,
    //   title: 'Movie 2',
    //   description: 'Description for Movie 2.',
    //   trailerLink: './video/banana.',
    // },
    // ... other movies
  ];
  
const MovieList = () => {


    
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to="/movie/:1"> View Details</Link>
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
