import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { init_all } from '../util/init.js'

import '../styles/navbar.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

class Navbar extends React.Component {
  componentDidMount() {
    init_all();
  }

  render() {
    const {data, gradient} = this.props;
    const foreground = gradient ? 'white-text' : 'black-text';
    const background = gradient ? 'blue darken-3' : 'white';
    const logo = gradient ? data.wlogo.childImageSharp.fluid : 
      data.clogo.childImageSharp.fluid;
    return (<div>
      <ul id="tse-navbar-dropdown" className="dropdown-content">
        <li><Link to="/students"><span className={foreground}>Students</span></Link></li>
        <li><Link to="/nonprofits"><span className={foreground}>Nonprofits</span></Link></li>
      </ul>
      <nav className={background}>
        <div className="nav-wrapper container">
          <div className="row">
            <div className="col s6">
              <Link to="/">
                <Img fluid={logo} className="tse-navbar-logo"></Img>
              </Link>
            </div>
            <div className="col s6 show-on-medium-and-down">
              <a href="#" data-target="tse-mobile-menu" class={`sidenav-trigger right ${foreground}`}><i class="material-icons">menu</i></a>
            </div>
            <div className="col s6 hide-on-med-and-down">
              <ul className="right">
                <li><Link to="/about"><span className={`tse-navbar-link ${foreground}`}>About</span></Link></li>
                <li><Link to="/projects"><span className={`tse-navbar-link ${foreground}`}>Projects</span></Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="tse-navbar-dropdown"><span className={`tse-navbar-link ${foreground}`}>Connect</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="tse-mobile-menu">
        <li><Link to="/about" className={foreground}><span className="tse-text-medium">About</span></Link></li>
        <li><Link to="/projects" className={foreground}><span className="tse-text-medium">Projects</span></Link></li>
        <li><Link to="/apply" className={foreground}><span className="tse-text-medium">Connect</span></Link></li>
      </ul>
    </div>);
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        clogo: file(relativePath: { eq: "logo-colored.png" }) {
          ...FluidImage
        }
        wlogo: file(relativePath: { eq: "logo-white.png" }) {
          ...FluidImage
        }
      }
    `}
    render={data => <Navbar data={data} {...props}/>}
  />
)
