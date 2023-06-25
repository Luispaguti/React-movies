import React from 'react';
import { useState, useEffect } from 'react';
import seriesData from '../../data/sample.json';

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const filteredSeries = seriesData.entries.filter((serie) => serie.programType === 'series');
    setSeries(filteredSeries.slice(0, 20));
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex align-content-start flex-wrap">
        {series.map((serie) => (
          <div className="card mx-2" style={{ width: '8rem', height: '8rem' }} key={serie.title}>
            <img src={serie.images['Poster Art'].url} className="card-img-top" alt="..." />
            <div className="card-body"></div>
            <p className="card-title">{serie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;