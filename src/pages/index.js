import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/blue-header.js'
import Footer from '../components/footer.js'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import '../styles/site.css'

export default ({data}) => (
  <div>
    <SEO title="Home" keywords={[`ucsd`, `tse`, `software`, `nonprofit`]} />
    <Header></Header> 
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
