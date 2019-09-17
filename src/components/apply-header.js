import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { init_all } from '../util/init.js'

import '../styles/header.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

class Header extends React.Component {
  componentDidMount() {
    init_all();
  }

  render() {
    const {data} = this.props;
    return (<div>
      <ul id="tse-navbar-dropdown" className="dropdown-content">
        <li><Link to="/students"><span className="black-text">Students</span></Link></li>
        <li><Link to="/nonprofits"><span className="black-text">Nonprofits</span></Link></li>
      </ul>
      <nav className="white">
        <div className="nav-wrapper container">
          <div className="row">
            <div className="col s6">
              <Link to="/">
                <Img fluid={data.logo.childImageSharp.fluid} className="tse-navbar-logo" ></Img>
              </Link>
            </div>
            <div className="col s6 show-on-medium-and-down">
              <a href="#" data-target="tse-mobile-menu" class="sidenav-trigger right black-text"><i class="material-icons">menu</i></a>
            </div>
            <div className="col s6 hide-on-med-and-down">
              <ul className="right">
                <li><Link to="/about"><span className="black-text tse-navbar-link">About</span></Link></li>
                <li><Link to="/projects"><span className="black-text tse-navbar-link">Projects</span></Link></li>
                <li><a className="dropdown-trigger" href="#!" data-target="tse-navbar-dropdown"><span className="black-text tse-navbar-link">Connect</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="tse-mobile-menu">
        <li><Link to="/about"><span className="tse-text-medium">About</span></Link></li>
        <li><Link to="/projects"><span className="tse-text-medium">Projects</span></Link></li>
        <li><Link to="/apply"><span className="tse-text-medium">Connect</span></Link></li>
      </ul>
    </div>);
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo-colored.png" }) {
          ...FluidImage
        }
      }
    `}
    render={data => <Header data={data} {...props}/>}
  />
)
