import React from 'react';
import { useState, useEffect } from 'react';
import moviesData from '../../data/sample.json';
import pop from '../../../src/popcorn.jpg'

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = moviesData.entries.filter((movie) => movie.programType === 'movie' && movie.releaseYear >= 2010);
    setMovies(filteredMovies.slice(0, 20));
  }, []);

  console.log(moviesData.entries[1].releaseYear)

  const handleImageError = (event) => {
    event.target.src = pop;
    event.target.style.objectFit = 'cover';
    event.target.style.width = '100%';
    event.target.style.height = '100%';
  };

  return (
    <div className="container">
      <div className="d-flex align-content-start flex-wrap">
        {movies.map((movie) => (
          <div className="card mx-2 my-5" style={{ width: '8rem', height: '12rem' }} key={movie.title}>
            <img src={movie.images['Poster Art'].url} 
            className="card-img"
              alt="..."
              onError={handleImageError}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
               <div className='card-body'>
               <p className="card-title" style={{ marginTop: '0.2rem' }}>{movie.title}</p>
               </div>
            
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Movies;