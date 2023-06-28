import React from 'react';
import { useState, useEffect } from 'react';
import moviesData from '../../data/sample.json';
import pop from '../../../src/popcorn.jpg'
import "./Movies.css"

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(null);

  useEffect(() => {
    const filteredMovies = moviesData.entries.filter((movie) => movie.programType === 'movie' && movie.releaseYear >= 2010);
    const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies.slice(0, 20));
  }, []);
  console.log(moviesData.entries[1].releaseYear)

  const handleImgClick = (movie) => {
    if (selectedMovies && selectedMovies === movie) {
      // Si ya hay una movie seleccionada y se hace clic en la misma, deseleccionarla
      setSelectedMovies(null);
    } else {
      // Si se hace clic en una movie diferente o no hay ninguna seleccionada, seleccionar la movie clicada
      setSelectedMovies(movie);
    }
  };

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
              onClick={() => handleImgClick(movie)} 
               />
               
               <p className="card-title" style={{ marginTop: '0.2rem' }}>{movie.title}</p>
              
            
            </div>
          ))}
        </div>

        {selectedMovies && (
        <div className="popup">
          <h2>{selectedMovies.title}</h2>
          <p>{selectedMovies.description}</p>
          <p>Release Year: {selectedMovies.releaseYear}</p>
          <img src={selectedMovies.images['Poster Art'].url} alt="Poster" />
        </div>
      )}
      </div>
    );
  }
export default Movies;