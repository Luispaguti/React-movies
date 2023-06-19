import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header/>
      <div class="d-flex justify-content-center ">
      <div class="mx-4 my-5 p-3 mb-2 bg-dark text-white">
        <Link to="/movies" style={{ color: '#FFF',textDecoration: 'none' }} >
        Movies
        </Link>
        </div>
      <div class="mx-2 my-5 p-3 mb-2 bg-dark text-white">Series</div>

      </div>
      <Footer/>
    </>
  )
}

export default Home