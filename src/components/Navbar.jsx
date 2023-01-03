import React from 'react'
import {ImSearch} from 'react-icons/im'
import '../styles/NavbarStyle.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   <h1 id="h00" className='text-white'>MovieNow</h1>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item ">
          <a className="nav-link"  href='#'>Favourites</a>
        </li>
      </ul>
        <div id="SearchDiv" className='input-group offset-9'>
        <input id='searchInput' className='bg-dark text-white' type="search" placeholder="Search by Name..." aria-label="Search"/>
        <ImSearch className='text-white my-2 '/>
</div>
    </div>
  </nav>
 )
}

export default Navbar