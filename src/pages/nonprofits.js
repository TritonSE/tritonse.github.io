import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import SEO from '../components/seo.js'
import Header from '../components/apply-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => {
  return (<div>
    <SEO title="Nonprofits"/>
    <Header
      title="For Nonprofits"
      subtitle="Partner up with TSE and we will work hand-in-hand to develop the technology that will turn your vision into a reality without costing you a penny."
      icon="nonprofits"
    />
    <div class="container">
      <Divider subtitle="OUR SERVICES" textColor="black-text" lineColor="tse-divider-line-amber"/>
      <div class="row">
        <div class="col l6 s12 center">
          <Img 
            fluid={data.mobile.childImageSharp.fluid} 
            className="tse-nonprofits-mobile-image"></Img>
          <h4 className="blue-text text-darken-3">Mobile Development</h4>
          <p className="tse-text-medium">Mobile applications allow us to bring powerful computing power to nearly anyone.</p>
        </div>
        <div class="col l6 s12 center">
          <Img 
            fluid={data.web.childImageSharp.fluid} 
            className="tse-nonprofits-web-image"></Img>
          <h4 className="amber-text text-darken-1">Web Development</h4>
          <p className="tse-text-medium">TSE can help you build web applications to take advantage of the power of the Internet in expanding your organization.</p>
        </div>
      </div>
      <div class="tse-separation-medium"></div>
    </div>
    <div class="amber lighten-4">
      <div class="container">
        <Divider subtitle="DECISION CRITERIA" textColor="black-text" lineColor="tse-divider-line-black"/>
        <div className="row center black-text">
          <div className="col l4 s12">
            <div className="tse-apply-circle amber darken-1"><i className="fa fa-4x fa-globe white-text"></i></div>
            <h4>Impact</h4>
            <p className="tse-text-medium">How will your project impact the community?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle amber darken-1"><i className="fa fa-4x fa-puzzle-piece white-text"></i></div>
            <h4>Necessity</h4>
            <p className="tse-text-medium">How important is your project for your non-profit?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle amber darken-1"><i className="fa fa-4x fa-calendar white-text"></i></div>
            <h4>Scope</h4>
            <p className="tse-text-medium">Are your goals something we can achieve in the allotted time?</p>
          </div>
        </div>
        <div className="row center black-text">
          <div className="col offset-l2 l4 s12">
            <div className="tse-apply-circle amber darken-1"><i className="fa fa-4x fa-object-group white-text"></i></div>
            <h4>Technical Fit</h4>
            <p className="tse-text-medium">Is software & technological development integral to your project?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle amber darken-1"><i className="fa fa-4x fa-eye white-text"></i></div>
            <h4>Credibility</h4>
            <p className="tse-text-medium">Is there evidence that your project will make an impact?</p>
          </div>
        </div>
      </div>
      <div class="tse-separation-medium"></div>
    </div>
    <div className="container">
      <div id="faq"></div>
      <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="black-text" lineColor="tse-divider-line-amber"/>
      <div className="row">
        <div className="col s12">
          <h4>How are TSE projects structured?</h4>
          <p className="tse-faq-answer">TSE's structure consists of our board and 4-6 project-based teams. Each team is made up of a project leader, 3-4 developers, and a UI/UX designer. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
        </div>
        <div className="col s12">
          <h4>What resources does TSE have to ensure success?</h4>
          <p className="tse-faq-answer">Our organization recruits some of the most hard-working, passionate, and brighest students at UC San Diego. Through effective leadership, frequent check-ins, and organized project timelines set with our clients and board, we can ensure that our combination of talent, dedication, and care will result in projects that benefit the nonprofits we work with.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
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

export const query = graphql`
  query {
    mobile: file(relativePath: { eq: "icon-mobile.png" }) {
      ...FluidImage
    }
    web: file(relativePath: { eq: "icon-web.png" }) {
      ...FluidImage
    }
    allTseApplications {
      edges {
        node {
          id
          active
          link 
        }
      }
    }
  }
`
