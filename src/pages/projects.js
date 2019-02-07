import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

function condense(text, length) {
  if (text.length > length - 3) {
    // If the string is too long, trim it and add ellipses at the end
    return text.substring(0, length) + '...'; 
  }
  else if (text.length < length) {
    // HACKY: If the length of the text is too short, we pad it with invisible non-breaking spaces
    // These spaces ensure that the card is padded vertically to the correct size
    // Chances are descriptions are long enough but this is a fallback measure to keep card heights identical 
    let nbsp = "\xa0".repeat(4);
    let nbsp_scale = 1.7;
    return text + ` ${nbsp}`.repeat((length - text.length) / nbsp.length * nbsp_scale);
  }
  else {
    return text;
  }
}

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
  // Project information is stored in data.allFirestoreProjects
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let projects = data.allFirestoreProjects.edges.map((value) => {
    let description = condense(value.node.description, 500);
    let status = value.node.ongoing ? 
      <span class="siimple-tag siimple-tag--primary">Ongoing</span> : 
      <span class="siimple-tag siimple-tag--success">Completed</span>;
    return (
      <div key={`${value.node.name}`}>
        <div className="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
          <div className="siimple-card">
              <div className="siimple-card-body">
                  <Img fluid={value.node.local_image.childImageSharp.fluid} className="tse-project-image"></Img>
                  <div className="siimple-card-title tse-separation-small">{value.node.name}</div>
                  <div className="siimple-card-subtitle">{status}</div>
                  <p>{description}</p>
              </div>
          </div>
        </div>
      </div>
    )}
  );
  return (<div>
    <SEO title="Projects"/>
    <Navbar></Navbar> 
    <div className="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div className="siimple-jumbotron-title">Ongoing & Past Projects</div>
      <div className="siimple-jumbotron-subtitle">Take a look at some of our work with non-profits</div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-grid">
        {gridify(projects, 2)}
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
          ongoing
          image
          local_image {
            ...FluidImage
          }
        }
      }
    }
  }
`
