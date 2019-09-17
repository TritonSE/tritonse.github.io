import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/apply-header.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => {
  return (<div>
    <SEO title="Apply"/>
    <Header/>
    <div className="tse-apply-container">
      <div className="container">
        <div className="row black-text">
          <div className="col l6 s12 center">
            <Img fluid={data.nonprofits.childImageSharp.fluid} className="tse-apply-image"/>
            <h2>For Nonprofits</h2>
            <p className="tse-text-large">Let TSE help your organization create the applications that will change the world!</p>
            <Link to="/nonprofits" className="btn-large waves-effect amber darken-1">Get Connected</Link>
          </div>
          <div className="col l6 s12 center">
            <div className="tse-separation-medium hide-on-large-only"></div>
            <Img fluid={data.students.childImageSharp.fluid} className="tse-apply-image"/>
            <h2>For Students</h2>
            <p className="tse-text-large">Join our family and truly utilize your skills to give back to the community.</p>
            <Link to="/students" className="btn-large waves-effect blue darken-3">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql`
  query {
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
    nonprofits: file(relativePath: { eq: "icon-nonprofits.png" }) {
      ...FluidImage
    }
  }
`
