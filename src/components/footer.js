import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/footer.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Footer = ({data}) => (
  <div>
    <div className="tse-footer-semicircle"></div>
    <footer className="page-footer blue darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <Link to="/">
              <Img fluid={data.logo.childImageSharp.fluid} className="tse-footer-logo"></Img>
            </Link>
            <p className="grey-text text-lighten-4">tse@ucsd.edu</p>
            <a href="https://fb.com/tritonse" className="tse-footer-social">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://linkedin.com/company/tritonsoftwareengineering/" className="tse-footer-social">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/tritonse" className="tse-footer-social">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">General</h5>
            <ul>
              <li><Link to="/about" className="tse-footer-link">About</Link></li>
              <li><Link to="/projects" className="tse-footer-link">Projects</Link></li>
            </ul>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">Students</h5>
            <ul>
              <li><Link to="/students" className="tse-footer-link">Apply</Link></li>
              <li><Link to="/students#faq" className="tse-footer-link">FAQs</Link></li>
            </ul>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">Nonprofits</h5>
            <ul>
              <li><Link to="/nonprofits" className="tse-footer-link">Apply</Link></li>
              <li><Link to="/nonprofits#faq" className="tse-footer-link">FAQs</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright blue darken-3">
      </div>
    </footer>
  </div>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo-white.png" }) {
          ...FluidImage
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
