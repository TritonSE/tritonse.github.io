import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../styles/pages.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({
  data
}) => {
  return (<div>
    <SEO title="Apply"/>
    <Navbar/>
    <div className="tse-apply-container">
      <div className="container">
        <div className="row">
          <div className="col l6 s12 center">
            <Img fluid={data.nonprofits.childImageSharp.fluid} className="tse-apply-image"/>
            <h2 className="navy-text">For Nonprofits</h2>
            <p className="tse-text-large navy-text tse-apply-subtitle">Let TSE help your organization create the applications that will change the world!</p>
            <Link to="/nonprofits" className="btn-large tse-nonprofit-button">Get Connected</Link>
          </div>
          <div className="col l6 s12 center">
            <div className="tse-separation-medium hide-on-large-only"></div>
            <Img fluid={data.students.childImageSharp.fluid} className="tse-apply-image"/>
            <h2 className="navy-text">For Students</h2>
            <p className="tse-text-large navy-text tse-apply-subtitle">Join our family and truly utilize your skills to give back to the community.</p>
            <Link to="/students" className="btn-large navy">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql `
  query {
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
    nonprofits: file(relativePath: { eq: "NEW-icon-nonprofits.png" }) {
      ...FluidImage
    }
  }
`
