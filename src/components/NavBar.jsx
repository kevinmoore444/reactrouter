import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className='nb-div'>
        <ul className='nav-bar'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"kevin"}>About Us</Link></li>
            <li><Link to={"teams"}>Teams</Link></li>
            <li><Link to={"contact"}>Contact</Link></li>
            <li><Link to={"players"}>Players</Link></li>
        </ul>
    </div>
  )
}

export default NavBar