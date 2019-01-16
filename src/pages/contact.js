import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

export default ({data}) => {
  let applications = {};

  // Application information is stored in data.allFirestoreApplications
  // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin
  data.allFirestoreApplications.edges.forEach(function (value) {
    let node = value.node;
    if (node.active) {
      applications[node.id] = <span class="siimple--color-success">
        Applications are open for this position! <strong><a class="siimple--color-success" href={node.link}>Apply here.</a></strong>
      </span>;
    }
    else {
      applications[node.id] = <span class="siimple--color-error">
        Applications for this position are currently closed.
      </span>;
    }
  });

  return (<div>
    <SEO title="Contact"/>
    <Navbar></Navbar> 
    <div class="siimple-jumbotron tse-jumbotron-normal siimple-jumbotron--large">
      <div class="siimple-jumbotron-title">Get in Contact</div>
      <div class="siimple-jumbotron-subtitle">Shoot us a message and we will be in touch with you shortly</div>
    </div>
    <div class="siimple-content siimple-content--large">
      <div class="siimple-grid-row">
        <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
          <div class="siimple-h2">Students</div>
          <div class="siimple-h6">What positions do we have?</div>
          <br/>
          <p class="siimple-p"><strong>Project managers</strong> lead a team of four to six students to complete a project for a client. This is not your typical class project. This is a project for a real client. {applications['managers']}</p>
          <p class="siimple-p"><strong>Developers</strong> learn, program, and grow. You are matched up to a team and client upon joining, and you get the opportunity to develop your skillset by contributing your code to meaningful projects. {applications['developers']}</p> 
          <p class="siimple-p"><strong>Designers</strong>, like developers, are assigned to teams and clients upon joining. You will get to integrate your designs into real client-facing projects, and you will get to guide the design process for your team. {applications['designers']}</p>
        </div>
        <div class="siimple-grid-col siimple-grid-col--6 siimple-grid-col--sm-12">
          <div class="siimple-h2">Non-profits</div>
          <div class="siimple-h6">Why work with us?</div>
          <br/>
          <p class="siimple-p">We are <strong>affordable</strong>. You can get your website or application designed at almost no cost.</p>
          <p class="siimple-p">We are <strong>dedicated</strong>. You will get a dedicated team that can develop a tailored solution for your organization's needs.</p>
          <p class="siimple-p">We are <strong>personal</strong>. Your team will be in constant, one-on-one contact with you, so that we can deliver to you what you need the most.</p>
          <p class="siimple-p">We are <strong>long-term</strong>. Even after building what you need, we will continue to provide maintenance and updates to it when necessary.</p>
          <p class="siimple-p">If you are a non-profit and believe that we can help you, send us an email. Our contact information is listed below.</p>
        </div>
      </div>
      <div class="siimple-box">
        <div class="siimple-box-title">Email Us!</div>
        <div class="siimple-box-subtitle">tse@ucsd.edu</div>
        <div class="siimple-box-detail">Direct any inquries you might have to this email address. We will respond promptly.</div>
      </div>
    </div>
    <Footer></Footer> 
  </div>)
}

export const query = graphql`
  query {
    allFirestoreApplications {
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