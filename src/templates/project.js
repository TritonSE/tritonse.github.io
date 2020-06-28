import React from "react"
import {
  graphql
} from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../components/seo.js"
import Navbar from "../components/navbar.js"
import Divider from "../components/divider.js"
import Footer from "../components/footer.js"
import {
  condense
} from '../util/styling.js'
import '../styles/header.css'
import '../styles/pages.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({
  data
}) => {
  let project = data.tseProjects;
  let jumbo_left = (
    <div className="col l6 s12">
      <h2 className="white-text">{project.title}</h2>
      <h5 className="white-text">{condense(project.subtitle, 250)}</h5>
      <div class="tse-header-buttons white-text">
        <a className="waves-effect waves-light btn-large blue darken-4" href={project.github}>
          Visit Our GitHub
          <i className="material-icons right">code</i>
        </a>
      </div>
    </div>);
  let jumbo_right = (
    <div className="col l6 s12">
      <Img fluid={project.local_image.childImageSharp.fluid} className="tse-project-template-image tse-highlight-image"></Img>
    </div>
  );
  return (
    <div>
      <SEO title={project.title}/>
      <Navbar gradient={true}/>
      <div className="tse-header-project tse-header-gradient">
        <div className="container">
          <div className="row valign-wrapper hide-on-med-and-down">
            {jumbo_left}
            {jumbo_right}
          </div>
          <div className="row hide-on-large-only">
            {jumbo_left}
            {jumbo_right}
          </div>
        </div>
      </div>
      <div class="container">
        <Divider title="What's This Project About?" subtitle="OVERVIEW" textColor="black-text" lineColor="tse-divider-line-amber"/>
        <p className="tse-text-medium" dangerouslySetInnerHTML={{__html: project.overview}}/>
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql `
  query($id: String!) {
    tseProjects(id: { eq: $id }) {
      title
      subtitle
      overview
      github
      local_image {
        ...FluidImage
      }
    }
  }
`
