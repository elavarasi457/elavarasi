import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    </>
  )
}

export default Navbar