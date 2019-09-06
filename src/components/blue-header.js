import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/site.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

const Header = ({data}) => (
  <div>
    <nav className="blue darken-3">
      <div className="nav-wrapper container">
        <div className="row">
          <div className="col l6 s12">
            <a href="/" >
              <Img fluid={data.logo.childImageSharp.fluid} className="tse-navbar-logo" ></Img>
            </a>
          </div>
          <div className="col l6 s12 hide-on-med-and-down">
            <ul className="right hide-on-med-and-down">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className="tse-bheader-background">
      <div className="container">
        <div className="row center white-text">
          <div className="col s12">
            <h1>Triton Software Engineering</h1>
          </div>
          <div className="col s12">
            <h5>We're an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits.</h5>
          </div>
          <div className="col s12">
            <a className="waves-effect waves-light btn blue darken-4 tse-button">Apply</a> 
            <a className="waves-effect waves-light btn white black-text tse-button">Learn More</a>
          </div>
        </div>
        <p></p>
      </div>
    </div>
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
    render={data => <Header data={data} {...props}/>}
  />
)
