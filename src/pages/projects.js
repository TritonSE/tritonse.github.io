import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/gradient-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

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

function gridify(elements) {
  let num_columns = 3;
  let rows = [];
  for (let i = 0; i < elements.length; i += num_columns) {
    rows.push(
      <div className="row">
        {elements.slice(i, i + num_columns)}
      </div>
    );
  }
  return rows;
}

export default ({data}) => {
  const get_project_html = (value) => {
    let description = condense(value.node.description, 500);
    return (
      <div key={`${value.node.name}`}>
        <div className="col l4 sm12">
          <Img fluid={value.node.local_image.childImageSharp.fluid} className="tse-project-image"></Img>
          <p><b>{value.node.name}</b></p>
          <p>{description}</p>
        </div>
      </div>
    )
  };
  // Project information is stored in data.allTseProjects
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let ongoing_projects = data.allTseProjects.edges
    .filter((value) => {
      return value.node.ongoing
    })
    .map((value) => {
      return get_project_html(value);      
    }
  );
  let completed_projects = data.allTseProjects.edges
    .filter((value) => {
      return !value.node.ongoing
    })
    .map((value) => {
      return get_project_html(value);      
    }
  );

  return (<div>
    <SEO title="Projects"/>
    <Header
      title={
        <span>Our <span className="amber-text">Projects</span></span>
      }
      subtitle="At TSE, we believe in keeping our work open source because we value transparency and connectivity."
      buttons={
        <span>
          <a className="waves-effect waves-light btn-large blue darken-4 tse-header-button" href="https://github.com/tritonse">
            Visit Our GitHub
            <i class="material-icons right">code</i>
          </a>
        </span>
      }
      background='tse-header-hands'
    />
    <div className="container">
      <Divider title="What We've Been Up To" subtitle="CURRENT PROJECTS"/>
      {gridify(ongoing_projects)}
    </div>
    <div className="container">
      <Divider title="What We Were Up To" subtitle="PAST PROJECTS"/>
      {gridify(completed_projects)}
    </div>
    <Footer/>
  </div>)
}

export const query = graphql`
  query {
    allTseProjects {
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
