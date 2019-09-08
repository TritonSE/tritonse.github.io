import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.js'
import Header from '../components/apply-header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'

import '../styles/pages.css'

import '../../node_modules/materialize-css/dist/css/materialize.min.css'

export default ({data}) => {
  let applications = {};

  // Application information is stored in data.allTseApplications
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  data.allTseApplications.edges.forEach(function (value) {
    let node = value.node;
    if (node.active) {
      applications[node.id] = <span className="siimple--color-success">
        Applications are open for this position! <strong><a className="siimple--color-success" href={node.link}>Apply here.</a></strong>
      </span>;
    }
    else {
      applications[node.id] = <span className="siimple--color-error">
        Applications for this position are currently closed.
      </span>;
    }
  });

  return (<div>
    <SEO title="Students"/>
    <Header
      title="For Students"
      subtitle="Come join our family and find a way to put your skills to use by giving back to the community! Our recruitment process may be tough, but we recruit annually in the fall so make sure you stay up to date."
      icon="students"
    />
    <div class="blue lighten-3">
      <div class="container">
        <Divider subtitle="DECISION CRITERIA" textColor="black-text" lineColor="tse-divider-line-black"/>
        <div className="row center black-text">
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
        <div className="row center black-text">
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
      </div>
      <div class="tse-separation-medium"></div>
    </div>
    <div className="container">
      <div id="faq"></div>
      <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="black-text" lineColor="tse-divider-line-blue"/>
      <div className="row">
        <div className="col s12">
          <h4>How are TSE projects structured?</h4>
          <p className="tse-text-medium">TSE's structure consists of our board and 4-6 project-based teams. Each team is made up of a project leader, 3-4 developers, and a UI/UX designer. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
        </div>
        <div className="col s12">
          <h4>Why should I join TSE?</h4>
          <p className="tse-text-medium">TSE is an amazing opportunity for people at any skill level to give back to the community. Whether you're a seasoned developer, or just starting in the industry, TSE will teach you skills that will carry over throughout your life while also giving you real world experience.</p>
        </div>
      </div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-grid">
        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
            <div className="siimple-h2">Students</div>
            <div className="siimple-h6">What positions do we have?</div>
            <br/>
            <p className="siimple-p"><strong>Project managers</strong> lead a team of four to six students to complete a project for a client. This is not your typical class project. This is a project for a real client. {applications['managers']}</p>
            <p className="siimple-p"><strong>Developers</strong> learn, program, and grow. You are matched up to a team and client upon joining, and you get the opportunity to develop your skillset by contributing your code to meaningful projects. {applications['developers']}</p> 
            <p className="siimple-p"><strong>Designers</strong>, like developers, are assigned to teams and clients upon joining. You will get to integrate your designs into real client-facing projects, and you will get to guide the design process for your team. {applications['designers']}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>)
}

export const query = graphql`
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
  }
`
