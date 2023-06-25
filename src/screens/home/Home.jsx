import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Link, NavLink } from 'react-router-dom';
import "./Home.css"

function Home() {
  return (
    <>
      <Header/>
      <div class="d-flex justify-content ">
      <div class="mx-4 my-1 p-3 mb-2 text-white">
        <Link to="/movies"  >
        <div className='movies'>MOVIES</div>
        </Link>
        </div>
      <div class="mx-2 my-1 p-3 mb-2  text-white">
      <Link to="/series" >
      <div className='series'>SERIES</div>
        </Link>
        </div>
      

      </div>
      <Footer/>
    </>
  )
}

export default Home