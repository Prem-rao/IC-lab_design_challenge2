import React from 'react'
import {Link} from "react-router-dom"
import '../CSS/nav.css'
const NavBar = () => {
  return (
    <div>
      <nav className='navbar bg-dark text-white'>
        <Link to={'/'} className='text-decoration-none h4 text-white mx-2'>NavBar</Link>
        <ul className='d-flex list-unstyled fs-5 text-white'>
            <li className='me-3 li-item'><Link to={'/'} className='text-decoration-none text-white p-2'>Carousel</Link></li>
            <li className='me-3 li-item'><Link to={'/accordion'} className='text-decoration-none text-white'>Accordion</Link></li>
            <li className='me-3 li-item'><Link to={'/button'} className='text-decoration-none text-white'>Button</Link></li>
            <li className='me-3 li-item'><Link to={'/card'} className='text-decoration-none text-white'>Card</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
