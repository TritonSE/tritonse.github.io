import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Footer from '../components/footer.js'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import '../styles/site.css'

function gridify(elements, num_columns) {
  let rows = [];
  for (let i = 0; i < elements.length; i += num_columns) {
    rows.push(
      <div className="siimple-grid-row">
        {elements.slice(i, i + num_columns)}
      </div>
    );
  }
  return rows;
}

export default ({data}) => {
  // Member information is stored in data.allTseMembers
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let members = data.allTseMembers.edges
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
    <div className="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div className="siimple-jumbotron-title">Current Members</div>
      <div className="siimple-jumbotron-subtitle">Our executive board, project managers, developers, and designers</div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-grid">
        {gridify(members, 4)}
      </div>
    </div>
    <Footer></Footer> 
  </div>)
}

export const query = graphql`
  query {
    allTseMembers {
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
