import React from 'react'
import {
  graphql
} from 'gatsby'
import Img from 'gatsby-image';
import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'
import '../styles/pages.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({
  data
}) => {
  return (<div>
    <SEO title="Nonprofits"/>
    <Navbar/>
    <div className="tse-apply-container">
      <div className="container">
        <div className="row black-text">
          <div className="col l6 s12 center">
            <Img fluid={data.nonprofits.childImageSharp.fluid} className="tse-apply-image"></Img>
            <h2 className="navy-text">For Nonprofits</h2>
          </div>
          <div className="col l6 s12">
            <h5 className="tse-apply-subtitle navy-text">Partner up with TSE and we will work hand-in-hand to develop the technology that will turn your vision into a reality without costing you a penny.</h5>
            <p className="tse-text-medium tse-separation-small navy-text">If you have a proposal for an appropriate project, get in touch with us by emailing <b>tse@ucsd.edu</b>. We will work with you to deliver a solution that satisfies your needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <Divider subtitle="OUR SERVICES" textColor="navy-text" lineColor="tse-divider-line-amber"/>
      <div className="row">
        <div className="col l6 s12 center">
          <Img 
            fluid={data.mobile.childImageSharp.fluid} 
            className="tse-nonprofits-mobile-image"></Img>
          <h4 className="blue-text">Mobile Development</h4>
          <p className="tse-text-medium navy-text">Mobile applications allow us to bring powerful computing power to nearly anyone.</p>
        </div>
        <div className="col l6 s12 center">
          <Img 
            fluid={data.web.childImageSharp.fluid} 
            className="tse-nonprofits-web-image"></Img>
          <h4 className="dark-yellow-text">Web Development</h4>
          <p className="tse-text-medium navy-text">TSE can help you build web applications to take advantage of the power of the Internet in expanding your organization.</p>
        </div>
      </div>
      <div className="tse-separation-medium"></div>
    </div>
    <div className="navy">
      <div className="container">
        <Divider subtitle="DECISION CRITERIA" textColor="white-text" lineColor="tse-divider-line-black"/>
        <div className="row center white-text">
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
        <div className="row center white-text">
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
        <div className="row tse-separation-medium"></div>
      </div>
    </div>
    <div className="container" id="faq">
      <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="navy-text" lineColor="tse-divider-line-amber"/>
      <div className="row">
        <div className="col s12">
          <h4 className="navy-text">How are TSE projects structured?</h4>
          <p className="tse-text-medium navy-text">TSE's structure consists of our board and 4-6 project-based teams. Each team is made up of a project leader, 3-4 developers, and a UI/UX designer. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
        </div>
        <div className="col s12">
          <h4 className="navy-text">What resources does TSE have to ensure success?</h4>
          <p className="tse-text-medium navy-text">Our organization recruits some of the most hard-working, passionate, and brighest students at UC San Diego. Through effective leadership, frequent check-ins, and organized project timelines set with our clients and board, we can ensure that our combination of talent, dedication, and care will result in projects that benefit the nonprofits we work with.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql `
  query {
    nonprofits: file(relativePath: { eq: "icon-nonprofits.png" }) {
      ...FluidImage
    }
    mobile: file(relativePath: { eq: "icon-mobile.png" }) {
      ...FluidImage
    }
    web: file(relativePath: { eq: "icon-web.png" }) {
      ...FluidImage
    }
  }
`
