import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

export default ({data}) => {
  // Project information is stored in data.allFirestoreProjects
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let projects = data.allFirestoreProjects.edges
    .map((value) => (
    <div key={`${value.node.name}`}>
      <div className="siimple-grid-col siimple-grid-col--6">
        <h3>{value.node.name}</h3>
        <Img fluid={value.node.local_image.childImageSharp.fluid} className="tse-profile-image"></Img>
      </div>
      <div className="siimple-grid-col siimple-grid-col--6">
        {value.node.description} 
      </div>
    </div>
  ));
  return (<div>
    <SEO title="Projects"/>
    <Navbar></Navbar> 
    <div className="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div className="siimple-jumbotron-title">Ongoing & Past Projects</div>
      <div className="siimple-jumbotron-subtitle">Take a look at some of our work with non-profits</div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-grid-row" id="tse-members-list">
        {projects}
      </div>
    </div>
    <Footer></Footer> 
  </div>)
}

export const query = graphql`
  query {
    allFirestoreProjects {
      edges {
        node {
          name
          description
          image
          local_image {
            ...FluidImage
          }
        }
      }
    }
  }
`
