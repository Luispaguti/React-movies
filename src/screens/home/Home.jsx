import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/header/Footer'
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header/>
      <div class="d-flex justify-content-start">
      <div class="mx-2 p-3 mb-2 bg-dark text-white">
        <Link to="/movies" style={{ color: '#FFF',textDecoration: 'none' }} >
        Movies
        </Link>
        </div>
      <div class="mx-2 p-3 mb-2 bg-dark text-white">Series</div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home