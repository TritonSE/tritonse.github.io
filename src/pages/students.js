import React from 'react'
import {
  graphql
} from 'gatsby'
import Img from 'gatsby-image'
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
  // Application information is stored in data.allTseApplications
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  let applications = {};
  data.allTseApplications.edges.forEach(function(value) {
    let node = value.node;
    applications[node.id] = node;
  });

  let developers_open = applications.developers.active;
  let designers_open = applications.designers.active;
  let managers_open = applications.managers.active;
  let apps_open = developers_open || designers_open || managers_open;

  let apps_message = apps_open ?
    <p className="tse-text-medium">
      Applications are open! Apply using the links below.
    </p> :
    <p className="tse-text-medium tse-separation-small">
      Applications are currently closed. Please check back next fall if you are interested in joining.
    </p>;

  return (<div>
    <SEO title="Students"/>
    <Navbar/>
    <div className="tse-apply-container">
      <div className="container">
        <div className="row navy-text">
          <div className="col l6 s12 center">
            <Img fluid={data.students.childImageSharp.fluid} className="tse-apply-image"></Img>
            <h2>For Students</h2>
          </div>
          <div className="col l6 s12">
            <h5 className="tse-apply-subtitle">Come join our family and find a way to put your skills to use by giving back to the community! We recruit annually in the fall so make sure you stay up to date.</h5>
            <div>
              {apps_message}
              <div className="row">
                {developers_open ? <div className="col s12 m4 center"><a className="waves-effect waves-light btn navy-text tse-apply-button" href={applications.developers.link}>Developers</a></div> : ""}
                {designers_open ? <div className="col s12 m4 center"><a className="waves-effect waves-light btn navy-text tse-apply-button" href={applications.designers.link}>Designers</a></div> : ""}
                {managers_open ? <div className="col s12 m4 center"><a className="waves-effect waves-light btn navy-text tse-apply-button" href={applications.managers.link}>Managers</a></div> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="navy">
      <div className="container">
        <Divider subtitle="DECISION CRITERIA" textColor="white-text" lineColor="tse-divider-line-black"/>
        <div className="row center white-text">
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-heart white-text"></i></div>
            <h4>Passion</h4>
            <p className="tse-text-medium">Are you able to demonstrate a genuine passion for problem-solving and social good?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-code white-text"></i></div>
            <h4>Skill</h4>
            <p className="tse-text-medium">Do you have the necessary skills to effectively contribute to the projects we work on?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-book white-text"></i></div>
            <h4>Experience</h4>
            <p className="tse-text-medium">Do you have any previous, relevant experience such as volunteering?</p>
          </div>
        </div>
        <div className="row center white-text">
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-handshake-o white-text"></i></div>
            <h4>Teamwork</h4>
            <p className="tse-text-medium">Are you able to work well in teams?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-thumbs-up white-text"></i></div>
            <h4>Attitude</h4>
            <p className="tse-text-medium">Do you have a positive and dedicated work ethic?</p>
          </div>
          <div className="col l4 s12">
            <div className="tse-apply-circle blue darken-3"><i className="fa fa-4x fa-users white-text"></i></div>
            <h4>Culture</h4>
            <p className="tse-text-medium">How well will you fit in with the rest of us here at TSE?</p>
          </div>
        </div>
        <div className="row tse-separation-medium"></div>
      </div>
    </div>
    <div className="container" id="faq">
      <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="navy-text" lineColor="tse-divider-line-blue"/>
      <div className="row navy-text">
        <div className="col s12">
          <h4>How are TSE projects structured?</h4>
          <p className="tse-text-medium">TSE's structure consists of our board and 4-6 project-based teams. Each team is made up of a project leader, 3-4 developers, and a UI/UX designer. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
        </div>
        <div className="col s12">
          <h4>Why should I join TSE?</h4>
          <p className="tse-text-medium">TSE is an amazing opportunity for people at any skill level to give back to the community. Whether you're a seasoned developer, or just starting in the industry, TSE will teach you skills that will carry over throughout your life while also giving you real world experience.</p>
        </div>
        <div className="col s12">
          <h4>Do I need coding experience to join TSE?</h4>
          <p className="tse-text-medium">No, you do not! We take anyone from beginners to experts. What we look for is your ability to problem solve and a passion for learning. Once accepted, we can teach you all of the necessary languages, frameworks, and libraries that we use.</p>
        </div>
        <div className="col s12">
          <h4>What sort of development work can I expect once in TSE?</h4>
          <p className="tse-text-medium">The work that you will be doing depends on your client. For most web development work, we tend to stick to the MERN stack, and for most cross-platform mobile development, we focus on using React Native with Expo. This means that, as a whole, TSE ends up with many JavaScript-based applications. However, depending on the client's needs, we have been known to use other technologies, such as Java and PHP.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql `
  query {
    allTseApplications {
      edges {
        node {
          id
          active
          link 
        }
      }
    }
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
  }
`
