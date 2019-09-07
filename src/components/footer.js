import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
            <Img fluid={data.logo.childImageSharp.fluid} className="tse-footer-logo"></Img>
            <p className="grey-text text-lighten-4">tse@ucsd.edu</p>
            <a href="https://fb.com/tritonse" className="tse-footer-social tse-footer-social-facebook">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://linkedin.com/company/tritonsoftwareengineering/" className="tse-footer-social tse-footer-social-linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/tritonse" className="tse-footer-social tse-footer-social-github">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">General</h5>
            <ul>
              <li><a className="tse-footer-link" href="#!">About</a></li>
              <li><a className="tse-footer-link" href="#!">Projects</a></li>
              <li><a className="tse-footer-link" href="#!">Contact</a></li>
            </ul>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">Students</h5>
            <ul>
              <li><a className="tse-footer-link" href="#!">Apply</a></li>
              <li><a className="tse-footer-link" href="#!">FAQs</a></li>
            </ul>
          </div>
          <div className="col l2 s12">
            <h5 className="white-text">Nonprofits</h5>
            <ul>
              <li><a className="tse-footer-link" href="#!">Apply</a></li>
              <li><a className="tse-footer-link" href="#!">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright blue darken-3">
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </div>
)

const FluidImage = graphql`
fragment FluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

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
