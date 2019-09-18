import React from "react"
import { graphql } from 'gatsby'

import SEO from "../components/seo.js"
import Header from "../components/header.js"
import Divider from "../components/divider.js"
import Footer from "../components/footer.js"

import { condense } from '../util/styling.js'

export default ({ data }) => {
  let project = data.tseProjects;
  return (
    <div>
      <SEO title={project.title}/>
      <Header
        title={
          <span>{project.title}</span>
        }
        subtitle={condense(project.subtitle, 250)}
        buttons={
          <span>
            <a className="waves-effect waves-light btn-large blue darken-4 tse-header-button" href={project.github}>
              Visit Our GitHub
              <i className="material-icons right">code</i>
            </a>
          </span>
        }
        background='tse-header-gradient'
      />
      <div class="container">
        <Divider title="What's This Project About?" subtitle="OVERVIEW" textColor="black-text" lineColor="tse-divider-line-amber"/>
        <p className="tse-text-medium">{project.overview}</p>
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql`
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
