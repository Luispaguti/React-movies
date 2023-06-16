import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-dark bg-primary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      DEMO Streaming
      </a>
      <div>
      <button class="btn btn-sm btn-primary mx-4" type="submit">Log in</button>
      <button class="btn btn-outline-dark" type="submit">Start your free trial</button>
      </div>
    </div>
  </nav>
  <nav className="navbar navbar-dark bg-secondary mb-4">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      Popular Titles
      </a>
    </div>
  </nav>
  </>
  )
}

export default Header