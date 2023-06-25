import React from 'react';
import { useState, useEffect } from 'react';
import moviesData from '../../data/sample.json';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = moviesData.entries.filter((movie) => movie.programType === 'movie');
    setMovies(filteredMovies.slice(0, 20));
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex align-content-start flex-wrap">
        {movies.map((movie) => (
          <div className="card mx-2" style={{ width: '8rem', height: '8rem' }} key={movie.title}>
            <img src={movie.images['Poster Art'].url} className="card-img-top" alt="..." />
            <div className="card-body"></div>
            <p className="card-title">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;