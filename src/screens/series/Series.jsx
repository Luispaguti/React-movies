import React from 'react';
import { useState, useEffect } from 'react';
import seriesData from '../../data/sample.json';
import pop from '../../../src/popcorn.jpg'
import './Series.css'

function Series() {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    const filteredSeries = seriesData.entries.filter((serie) => serie.programType === 'series' && serie.releaseYear >= 2010);
    const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
    setSeries(sortedSeries.slice(0, 20));
  }, []);

  const handleImageError = (event) => {
    event.target.src = pop;
    event.target.style.objectFit = 'cover';
    event.target.style.width = '100%';
    event.target.style.height = '100%';
  };

  const handleImgClick = (serie) => {
    if (selectedSeries && selectedSeries === serie) {
      // Si ya hay una serie seleccionada y se hace clic en la misma, deseleccionarla
      setSelectedSeries(null);
    } else {
      // Si se hace clic en una serie diferente o no hay ninguna seleccionada, seleccionar la serie clicada
      setSelectedSeries(serie);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-content-start flex-wrap">
        {series.map((serie) => (
          <div className="card mx-2 my-5" style={{ width: '8rem', height: '12rem' }} key={serie.title}>
            <img 
            src={serie.images['Poster Art'].url}
             className="card-img"
              alt="..."
              onError={handleImageError}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onClick={() => handleImgClick(serie)} 
               />
               
               <p className="card-title" style={{ marginTop: '0.2rem' }}>{serie.title}</p>
               
          </div>
        ))}
      </div>

      {selectedSeries && (
        <div className="popup">
          <h2>{selectedSeries.title}</h2>
          <p>{selectedSeries.description}</p>
          <p>Release Year: {selectedSeries.releaseYear}</p>
          <img src={selectedSeries.images['Poster Art'].url} alt="Poster" />
        </div>
      )}


    </div>
  );
}

export default Series;