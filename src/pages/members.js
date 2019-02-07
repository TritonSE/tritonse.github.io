import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

export default ({data}) => {
  // Member information is stored in data.allFirestoreMembers
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let members = data.allFirestoreMembers.edges
    .sort((a, b) => (a.node.priority - b.node.priority))
    .map((value) => (
    <div key={`${value.node.name}`} className="siimple-grid-col siimple-grid-col--3 siimple-grid-col--sm-6">
      <div className="siimple-card">
        <div className="siimple-card-header">
          {value.node.name}
        </div>
        <div className="siimple-card-body">
          <div class="tse-square-image">
            <Img fluid={value.node.local_image.childImageSharp.fluid}></Img>
          </div>
        </div>
        <div className="siimple-card-footer">
          {value.node.role} 
        </div>
      </div>
    </div>
  ));

  return (<div>
    <SEO title="Members"/>
    <Navbar></Navbar> 
    <div className="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div className="siimple-jumbotron-title">Current Members</div>
      <div className="siimple-jumbotron-subtitle">Our executive board, project managers, developers, and designers</div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-grid-row" id="tse-members-list">
        {members}
      </div>
    </div>
    <Footer></Footer> 
  </div>)
}

export const query = graphql`
  query {
    allFirestoreMembers {
      edges {
        node {
          name
          priority
          role
          image
          local_image {
            ...FluidImage
          }
        }
      }
    }
  }
`
