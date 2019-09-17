import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/gradient-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import { gridify } from '../util/styling.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => {
  // Member information is stored in data.allTseMembers
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let members = data.allTseMembers.edges
    .sort((a, b) => (a.node.priority - b.node.priority))
    .map((value) => (
    <div key={`${value.node.name}`} className="col l2 m4 s6 center">
      <div>
        <Img fluid={value.node.local_image.childImageSharp.fluid} className="tse-profile-image"></Img>
      </div>
      <div className="tse-profile-name">
        <b>{value.node.name}</b>
      </div>
      <div className="tse-profile-role">
        {value.node.role} 
      </div>
    </div>
  ));

  return (<div>
    <SEO title="About"/>
    <Header
      title={
        <span>We Are <span className="amber-text">TSE</span></span>
      }
      subtitle="We're an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits."
      buttons={
        <span>
          <Link to="/about#history" className="waves-effect waves-light btn-large blue darken-4 tse-header-button">Read More</Link>
        </span>
      }
      background='tse-header-laptop'
    />
    <div className="container" id="history">
      <Divider title="Strong Mind, Stronger Heart" subtitle="ABOUT US"/>
      <div className="row valign-wrapper hide-on-med-and-down">
        <div className="col l6">
          <Img fluid={data.programming.childImageSharp.fluid} className="tse-generic-image tse-highlight-image"></Img>
        </div>
        <div className="col l6">
          <p className="tse-text-medium">In Spring of 2017, a group of passionate students banded together to form Triton Software Engineering. They saw a huge problem: nonprofits had little to no resources to procure professional web and technical development services. By providing a venue for both student engineers and nonprofits to connect, they hoped to foster growth in both social good and technical expertise.</p>
          <p className="tse-text-medium">We believe that technology should be utilized to better the community. Something as simple as a sleek, static, and easy-to-use website or as complicated as  a mobile app to track donations to your organizations can have a huge impact on an organization of any size. Let us help you help the community.</p>
        </div>
      </div>
      <div className="row hide-on-large-only">
        <div className="col s12">
          <Img fluid={data.programming.childImageSharp.fluid} className="tse-generic-image tse-highlight-image"></Img>
        </div>
        <div className="col s12">
          <p className="tse-text-medium">In Spring of 2017, a group of passionate students banded together to form Triton Software Engineering. They saw a huge problem: nonprofits had little to no resources to procure professional web and technical development services. By providing a venue for both student engineers and nonprofits to connect, they hoped to foster growth in both social good and technical expertise.</p>
          <p className="tse-text-medium">We believe that technology should be utilized to better the community. Something as simple as a sleek, static, and easy-to-use website or as complicated as  a mobile app to track donations to your organizations can have a huge impact on an organization of any size. Let us help you help the community.</p>
        </div>
      </div>
      <div className="tse-separation-medium"></div>
    </div>
    <div className="blue darken-3">
      <div className="container">
        <Divider subtitle="OUR MISSION" textColor="white-text" lineColor="tse-divider-line-white"/>
        <h5 className="white-text"><b>"Triton Software Engineering (TSE) is a multidiciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites and mobile applications pro-bono for <span className="amber-text">social good</span>, while giving our developers <span className="amber-text">practical, real world experience</span>."</b></h5>
      </div>
      <div className="tse-separation-medium"></div>
    </div>
    <div className="container" id="team">
      <Divider title="Who's Doing What?" subtitle="THE TEAM"/>
      {gridify(members, 6)}
    </div>
    <Footer/>
  </div>)
}

export const query = graphql`
  query {
    allTseMembers {
      edges {
        node {
          name
          priority
          role
          image
          local_image {
            ...FluidImage
          }
        }
      }
    }
    programming: file(relativePath: { eq: "generic-programming.png" }) {
      ...FluidImage
    }
  }
`
