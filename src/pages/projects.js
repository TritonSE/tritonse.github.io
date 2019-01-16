import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

export default ({data}) => {
  return (<div>
    <SEO title="Projects"/>
    <Navbar></Navbar> 
    <div class="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div class="siimple-jumbotron-title">Ongoing & Past Projects</div>
      <div class="siimple-jumbotron-subtitle">Take a look at some of our work with non-profits</div>
    </div>
    <Footer></Footer> 
  </div>)
}
