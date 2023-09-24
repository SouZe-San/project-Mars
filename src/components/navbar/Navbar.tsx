// import React from 'react'
import './nav_style.scss'
const Navbar = () => {
  return (
    <div className='nav-section'>
        <div className="logo-part">
                <h1>Logo</h1>
        </div>
        <nav>
                <div className='nav-item'><a href="#">Our Mars</a></div>
                <div className='nav-item'><a href="#">Process</a></div>
                <div className='nav-item'><a href="#">Buy Ticket</a></div>
                <div className='nav-item'><a href="#">blog</a></div>
                <div className='nav-item'><a href="#">Contacts</a></div>
        </nav>
    </div>
  )
}

export default Navbar
