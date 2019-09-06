import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/site.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const Footer = ({data}) => (
  <div>
    <div class="tse-footer-semicircle"></div>
    <footer class="page-footer blue darken-3">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <Img fluid={data.logo.childImageSharp.fluid} className="tse-footer-logo"></Img>
            <p class="grey-text text-lighten-4">tse@ucsd.edu</p>
            <a href="https://fb.com/tritonse" className="tse-footer-social"><i className="fa fa-facebook"></i></a>
            <a href="https://linkedin.com/company/tritonsoftwareengineering/" className="tse-footer-social"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/tritonse" className="tse-footer-social"><i className="fa fa-github"></i></a>
          </div>
          <div class="col l2 s12">
            <h5 class="white-text">General</h5>
            <ul>
              <li><a class="tse-footer-link" href="#!">About</a></li>
              <li><a class="tse-footer-link" href="#!">Projects</a></li>
              <li><a class="tse-footer-link" href="#!">Contact</a></li>
            </ul>
          </div>
          <div class="col l2 s12">
            <h5 class="white-text">Students</h5>
            <ul>
              <li><a class="tse-footer-link" href="#!">Apply</a></li>
              <li><a class="tse-footer-link" href="#!">FAQs</a></li>
            </ul>
          </div>
          <div class="col l2 s12">
            <h5 class="white-text">Nonprofits</h5>
            <ul>
              <li><a class="tse-footer-link" href="#!">Apply</a></li>
              <li><a class="tse-footer-link" href="#!">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright blue darken-3">
      </div>
    </footer>
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
