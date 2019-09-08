import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/gradient-header.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => (
  <div>
    <SEO title="Home" keywords={[`ucsd`, `tse`, `software`, `nonprofit`]} />
    <Header
      title={
        <span><span className="amber-text">T</span>riton <span className="amber-text">S</span>oftware <span className="amber-text">E</span>ngineering</span>
      }
      subtitle="We're an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits."
      buttons={
        <span>
          <a className="waves-effect waves-light btn-large blue darken-4 tse-header-button">Apply</a> 
          <a className="waves-effect btn-large white black-text tse-header-button">Learn More</a>
        </span>
      }
      background='tse-header-geisel'
      ></Header> 
    <Footer></Footer> 
  </div>
)

export const FluidImage = graphql`
fragment FluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
