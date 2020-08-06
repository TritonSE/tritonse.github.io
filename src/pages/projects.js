import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo.js'
import Header from '../components/header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'
import {
  condense,
  gridify
} from '../util/styling.js'
import '../styles/pages.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({
  data
}) => {
  const get_project_html = (value) => {
    return (
      <div key={`${value.node.name}`}>
        <div className="col l4 s12">
          <Img fluid={value.node.local_image.childImageSharp.fluid} className="tse-project-image"></Img>
          <div className="tse-project-title center">
            <Link to={`/project/${value.node.id}`} className="blue-text tse-text-large"><b className="tse-project-link-blue">{value.node.title}</b></Link>
          </div>
          <p className="tse-text-medium navy-text">{condense(value.node.subtitle, 250)}</p>
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
    });
  let completed_projects = data.allTseProjects.edges
    .filter((value) => {
      return !value.node.ongoing
    })
    .map((value) => {
      return get_project_html(value);
    });

  return (<div>
    <SEO title="Projects"/>
    <Header
      title={
        <span>Our <span className="dark-yellow-text">Projects</span></span>
      }
      subtitle="At TSE, we believe in keeping our work open source because we value transparency and connectivity."
      buttons={
        <span>
          <a className="waves-effect waves-light btn-large navy tse-header-button" href="https://github.com/tritonse">
            Visit Our GitHub
            <i className="material-icons right">code</i>
          </a>
        </span>
      }
      background='tse-header-hands'
    />
    <div className="container">
      <Divider title="What We've Been Up To" subtitle="CURRENT PROJECTS" textColor="navy-text"/>
      {gridify(ongoing_projects, 3)}
    </div>
    <div className="container">
      <Divider title="What We Were Up To" subtitle="PAST PROJECTS" textColor="navy-text"/>
      {gridify(completed_projects, 3)}
    </div>
    <Footer/>
  </div>)
}

export const query = graphql `
  query {
    allTseProjects {
      edges {
        node {
          id
          title
          subtitle
          ongoing
          local_image {
            ...FluidImage
          }
        }
      }
    }
  }
`
