import React from 'react';
import { useState, useEffect } from 'react';
import seriesData from '../../data/sample.json';
import pop from '../../../src/popcorn.jpg'

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const filteredSeries = seriesData.entries.filter((serie) => serie.programType === 'series' && serie.releaseYear >= 2010);
    setSeries(filteredSeries.slice(0, 20));
  }, []);

  const handleImageError = (event) => {
    event.target.src = pop;
    event.target.style.objectFit = 'cover';
    event.target.style.width = '100%';
    event.target.style.height = '100%';
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
               />
               <div className='card-body'>
               <p className="card-title" style={{ marginTop: '0.2rem' }}>{serie.title}</p>
               </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;