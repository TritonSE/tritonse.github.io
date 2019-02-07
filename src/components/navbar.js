import React from 'react'
import { Link } from 'gatsby'

import '../styles/site.css'

import '../../node_modules/siimple/dist/siimple.min.css'

const Navbar = () => (
  <div className="siimple-navbar tse-navbar siimple-navbar--large">
    <Link to="/" className="siimple-navbar-title">TSE</Link>
    <div className="siimple--float-right">
      <a href="#!" className="siimple-navbar-item">Blog</a>
      <Link to="/projects" className="siimple-navbar-item">Projects</Link>
      <Link to="/members" className="siimple-navbar-item">Members</Link>
      <Link to="/contact" className="siimple-navbar-item">Contact</Link>
    </div>
  </div>
)

export default Navbar 
