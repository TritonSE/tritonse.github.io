import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Navbar from '../components/navbar.js'

import '../styles/header.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

const Header = ({data, title, subtitle, buttons, background}) => ( 
  <div>
    <Navbar gradient={true}/>
    <div className={`tse-header ${background ? background : 'tse-header-gradient'}`}>
      <div className="container">
        <div className="row center white-text">
          <div className="col s12">
            <h1>{title}</h1>
          </div>
          <div className="col s12">
            <h5>{subtitle}</h5>
          </div>
          <div className="col s12 tse-header-buttons">
            {buttons}
          </div>
        </div>
        <p></p>
      </div>
    </div>
  </div>
) 

export default Header;
