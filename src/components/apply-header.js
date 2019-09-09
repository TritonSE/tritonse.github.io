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
    const {data, title, subtitle, icon, buttons} = this.props;
    return (<div>
      <ul id="tse-navbar-dropdown" className="dropdown-content">
        <li><Link to="/students" className="black-text">Students</Link></li>
        <li><Link to="/nonprofits" className="black-text">Nonprofits</Link></li>
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
              <a href="#" data-target="mobile-demo" class="sidenav-trigger right black-text"><i class="material-icons">menu</i></a>
            </div>
            <div className="col s6 hide-on-med-and-down">
              <ul className="right">
                <li><Link to="/about" className="black-text">About</Link></li>
                <li><Link to="/projects"  className="black-text">Projects</Link></li>
                <li><a className="dropdown-trigger black-text" href="#!" data-target="tse-navbar-dropdown">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/about" className="black-text">About</Link></li>
        <li><Link to="/projects"  className="black-text">Projects</Link></li>
        <li><Link to="/students"  className="black-text">Students</Link></li>
        <li><Link to="/nonprofits"  className="black-text">Nonprofits</Link></li>
      </ul>
      <div className="tse-header-apply">
        <div className="container">
          <div className="row black-text">
            <div className="col l6 s12 center">
              <Img 
                fluid={icon === 'students' ? data.students.childImageSharp.fluid : data.nonprofits.childImageSharp.fluid} 
                className="tse-header-apply-image"></Img>
              <h2>{title}</h2>
            </div>
            <div className="col l6 s12">
              <h5 className="tse-header-apply-subtitle">{subtitle}</h5>
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
        logo: file(relativePath: { eq: "logo-colored.png" }) {
          ...FluidImage
        }
        students: file(relativePath: { eq: "icon-students.png" }) {
          ...FluidImage
        }
        nonprofits: file(relativePath: { eq: "icon-nonprofits.png" }) {
          ...FluidImage
        }
      }
    `}
    render={data => <Header data={data} {...props}/>}
  />
)
