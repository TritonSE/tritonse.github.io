import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Header from '../components/gradient-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => (
  <div>
    <SEO title="Home" keywords={[`ucsd`, `tse`, `software`, `nonprofit`]} />
    <Header
      title={
        <span><span className="amber-text">T</span>riton <span className="amber-text">S</span>oftware <span className="amber-text">E</span>ngineering</span>
      }
      subtitle="We're an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits."
      buttons={
        <span>
          <a className="waves-effect waves-light btn-large blue darken-4 tse-header-button">Apply</a> 
          <a className="waves-effect btn-large white black-text tse-header-button">Learn More</a>
        </span>
      }
      background='tse-header-geisel'
    />
    <div class="container">
      <Divider title="Technology for Good" subtitle="OUR MISSION"/>
      <p className="tse-text-medium">We believe that technology should be utilized to better the community. Something as simple as a sleek, static, and easy-to-use website or as complicated as  a mobile app to track donations to your organizations can have a huge impact on an organization of any size. Let us help you help the community.</p>
      <Link to="/about"><span className="blue-text text-darken-3 tse-text-large">Learn More <i class="material-icons tse-text-large">chevron_right</i></span></Link>
      <div class="tse-separation-medium"></div>
    </div>
    <div class="blue darken-3">
      <div class="container">
        <Divider title="Our Work So Far" subtitle="PROJECTS" textColor="white-text" lineColor="tse-divider-line-white"/>
        <p className="tse-text-medium white-text">Every year, teams of 5 to 6 students work closely with nonprofit organizations on projects that are customized for the client and that will better the community. These are often mobile or web apps, but are not limited to just those categories.</p>
        <Link to="/projects"><span className="amber-text text-lighten-1 tse-text-large">View All Projects <i class="material-icons tse-text-large">chevron_right</i></span></Link>
      </div>
      <div class="tse-separation-medium"></div>
    </div>
    <div class="container">
      <Divider title="Let's Better the World" subtitle="OUR MISSION" textColor="blue-text text-darken-3" lineColor="tse-divider-line-amber"/>
      <div class="row">
        <div class="col m6 s12">
          <div class="container">
            <h4 className="blue-text text-darken-3 center">For Nonprofits</h4>
            <Img fluid={data.nonprofits.childImageSharp.fluid} className="tse-home-apply-image"></Img> 
            <p className="tse-text-medium">If you're a nonprofit organization in need of technical help, feel free to contact us! We accept applications year round and try to respond as quickly as possible.</p>
            <Link to="/nonprofits"><span className="blue-text text-darken-3 tse-text-large">Learn More <i class="material-icons tse-text-large">chevron_right</i></span></Link>
          </div>
        </div>
        <div class="col m6 s12">
          <div class="container">
            <h4 className="amber-text text-darken-1 center">For Students</h4>
            <Img fluid={data.students.childImageSharp.fluid} className="tse-home-apply-image"></Img> 
            <p className="tse-text-medium">Our applications for student positions will open in the fall of each year. Feel free to follow our Facebook page to stay updated!</p>
            <Link to="/students"><span className="amber-text text-darken-1 tse-text-large">Learn More <i class="material-icons tse-text-large">chevron_right</i></span></Link>
          </div>
        </div>
      </div>
      <div class="tse-separation-medium"></div>
    </div>
    <div class="container">
      <Divider title="We'd Love to Hear from You" subtitle="CONTACT US" textColor="blue-text text-darken-3" lineColor="tse-divider-line-amber"/>
      <div className="row">
        <div className="col s12">
          <div className="card blue darken-4">
            <div className="card-content white-text container">
              <h4 className="center">Contact Form</h4>
              <form>
                <div className="row">
                  <div className="input-field col s6">
                    <span className="white-text"><b>Name</b></span>
                    <input id="contact_name" type="text" className="validate white-text"/>
                  </div>
                  <div className="input-field col s6">
                    <span className="white-text"><b>Email</b></span>
                    <input id="contact_email" type="email" className="validate white-text"/>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <span className="white-text"><b>Message</b></span>
                    <textarea id="contact_message" className="materialize-textarea white-text" rows="20"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col s9">
                    <p>We will do our best to answer promptly to any inquries received through this form. You can also reach us at <b>tse@ucsd.edu</b>.</p>
                  </div>
                  <div className="col s3 right-align">
                    <a className="waves-effect btn-large amber darken-1">Send</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
)

export const FluidImage = graphql`
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
    site {
      siteMetadata {
        title
        description
      }
    }
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
    nonprofits: file(relativePath: { eq: "icon-nonprofits.png" }) {
      ...FluidImage
    }
  }
`
