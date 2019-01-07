import React from 'react'
import { Link } from 'gatsby'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

const Navbar = () => (
  <div class="siimple-navbar tse-navbar">
    <Link to="/" className="siimple-navbar-title">TSE</Link>
    <div class="siimple--float-right">
      <Link to="/projects" className="siimple-navbar-item">Projects</Link>
      <Link to="/members" className="siimple-navbar-item">Members</Link>
      <Link to="/contact" className="siimple-navbar-item">Contact</Link>
    </div>
  </div>
)

export default Navbar 
