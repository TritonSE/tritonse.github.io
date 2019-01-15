import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    <div class="siimple-grid-col siimple-grid-col--3 siimple-grid-col--sm-6">
      <div class="siimple-card">
        <div class="siimple-card-header">
          {value.node.name}
        </div>
        <div class="siimple-card-body">
          <img src={value.node.image} class="tse-profile-image"/>
        </div>
        <div class="siimple-card-footer">
          {value.node.role} 
        </div>
      </div>
    </div>
  ));

  return (<div>
    <Navbar></Navbar> 
    <div class="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div class="siimple-jumbotron-title">Current Members</div>
      <div class="siimple-jumbotron-subtitle">Our executive board, project managers, developers, and designers</div>
    </div>
    <div class="siimple-content siimple-content--large">
      <div class="siimple-grid-row" id="tse-members-list">
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
        }
      }
    }
  }
`
