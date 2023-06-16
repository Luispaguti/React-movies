import React from 'react'
import { useState } from "react";
import moviesData from "../../data/sample.json"

function Movies() {
  console.log(moviesData.entries[1].images["Poster Art"].url)
  const [movies, setMovies] = useState(moviesData.entries.slice(0, 20)) 
  return (
    <div className='container py-4'>
    <div class="d-flex align-content-start flex-wrap">
      {movies.map((movie => 
      <div class="card mx-2" style={{width: "8rem" , height: "8rem"}}>
        <img src={movie.images["Poster Art"].url} class="card-img-top" alt="..." />
        <div class="card-body">
        </div>
        <p class="card-title">{movie.title}</p>
      </div>))}
      
    </div>
    </div>
  )
}

export default Movies