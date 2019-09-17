import React from "react"
import { graphql } from 'gatsby'

import SEO from "../components/seo.js"
import Header from "../components/header.js"
import Divider from "../components/divider.js"
import Footer from "../components/footer.js"

export default ({ data }) => {
  let project = data.tseProjects;
  return (
    <div>
      <SEO title={project.name}/>
      <Header
        title={
          <span>{project.name}</span>
        }
        subtitle="This will need to be filled in."
        buttons={
          <span>
            <a className="waves-effect waves-light btn-large blue darken-4 tse-header-button" href="https://github.com/tritonse">
              Visit Our GitHub
              <i className="material-icons right">code</i>
            </a>
          </span>
        }
        background='tse-header-gradient'
      />
      <div class="container">
        <Divider title="What's This Project About?" subtitle="OVERVIEW" textColor="black-text" lineColor="tse-divider-line-amber"/>
        <p className="tse-text-medium">{project.description}</p>
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    tseProjects(id: { eq: $id }) {
      name
      description
      image
      local_image {
        ...FluidImage
      }
    }
  }
`
