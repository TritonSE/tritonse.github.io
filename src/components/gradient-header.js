import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/header.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

class Header extends React.Component {
  componentDidMount() {
    require('../../node_modules/materialize-css/dist/js/materialize.min.js');
    window.M.AutoInit();
    window.Waves.displayEffect();
  }

  render() {
    const {data, title, subtitle, buttons, background} = this.props;
    return (<div>
      <ul id="tse-navbar-dropdown" className="dropdown-content blue darken-3">
        <li><Link to="/students" className="white-text">Students</Link></li>
        <li><Link to="/nonprofits" className="white-text">Nonprofits</Link></li>
      </ul>
      <nav className="blue darken-3">
        <div className="nav-wrapper container">
          <div className="row">
            <div className="col s6">
              <Link to="/">
                <Img fluid={data.logo.childImageSharp.fluid} className="tse-navbar-logo" ></Img>
              </Link>
            </div>
            <div className="col s6 show-on-medium-and-down">
              <a href="#" data-target="tse-mobile-menu" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
            </div>
            <div className="col s6 hide-on-med-and-down">
              <ul className="right">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="tse-navbar-dropdown">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav blue darken-3" id="tse-mobile-menu">
        <li><Link to="/about" className="white-text">About</Link></li>
        <li><Link to="/projects" className="white-text">Projects</Link></li>
        <li><Link to="/students" className="white-text">Students</Link></li>
        <li><Link to="/nonprofits" className="white-text">Nonprofits</Link></li>
      </ul>
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
