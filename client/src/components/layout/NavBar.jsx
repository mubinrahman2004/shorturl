import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav>
      <div>
        <div className="container flex items-center justify-between bg-amber-600">
          <Link to={'/'}>shortner</Link>
          <div>
            <Link to={'/signin'}>login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar