import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
          <a name="top"></a>
     <nav className="navbar navbar-fixed-top bg-dark navbar-dark  navbar-expand-lg " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" id="name">TJ Courses</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dashboard">Student Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    </>
  )
}