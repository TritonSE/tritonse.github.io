import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/header.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

require('../../node_modules/materialize-css/dist/js/materialize.min.js')

class Header extends React.Component {
  componentDidMount() {
    window.M.AutoInit();
  }

  render() {
    const {data, title, subtitle, buttons, background} = this.props;
      return (
<div>
    <ul id="tse-navbar-dropdown" className="dropdown-content">
      <li><Link to="/students">Students</Link></li>
      <li><Link to="/nonprofits">Nonprofits</Link></li>
    </ul>
    <nav className="blue darken-3">
      <div className="nav-wrapper container">
        <div className="row">
          <div className="col l6 s12">
            <Link to="/">
              <Img fluid={data.logo.childImageSharp.fluid} className="tse-navbar-logo" ></Img>
            </Link>
          </div>
          <div className="col l6 s12 hide-on-med-and-down">
            <ul className="right hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a className="dropdown-trigger" href="#!" data-target="tse-navbar-dropdown">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div className={`tse-header ${background ? background : 'tse-header-gradient'}`}>
      <div className="container">
        <div className="row center white-text">
          <div className="col s12">
            <h1>{title}</h1>
          </div>
          <div className="col s12">
            <h5>{subtitle}</h5>
          </div>
          <div className="col s12 tse-header-buttons">
            {buttons}
          </div>
        </div>
        <p></p>
      </div>
    </div>
  </div>);
  }
}

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
