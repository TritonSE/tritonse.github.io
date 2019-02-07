import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/seo.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import '../../node_modules/siimple/dist/siimple.min.css'
import '../styles/site.css'

export default ({data}) => (
  <div>
    <SEO title="Home" keywords={[`ucsd`, `tse`, `software`, `nonprofit`]} />
    <Navbar></Navbar> 
    <div className="siimple-jumbotron tse-jumbotron-main siimple-jumbotron--large">
      <div className="tse-jumbotron-main-padding">
        <div className="siimple-jumbotron-title">Triton <span className="siimple--color-warning">Software Engineering</span></div>
        <div className="siimple-jumbotron-subtitle">Pro-bono technical and web development services for non-profits</div>
        <div className="siimple-jumbotron-detail">We partner with non-profits to design and develop mobile and web applications for social good.</div>
      </div>
    </div>
    <div className="siimple-content siimple-content--large">
      <div className="siimple-h2">About Us</div>
      <div className="siimple-h5">Effective philanthropy takes a lot of time and creativity. That's where we come in.</div>
      <br/>
      <p className="siimple-p">
      In spring 2017, we started as a small group of passionate students at UCSD who saw a huge problem: nonprofits in San Diego and abroad had little to no resources to procure professional web and technical development services. By providing a venue for both student engineers and nonprofits to connect via our organization, we hoped to foster growth in both social good and technical expertise. 
      </p>
      <p className="siimple-p">
      Our group believes that technology should be utilized to better the community. Whether that technology is something as simple as a sleek, updated, and easy-to-use static website or as complicated as a mobile app to track donations, it is undeniable that technology can have huge impact on organizations of any size. Our developers combine industry-standard practices with their effective problem-solving skills in order to tackle any technological problems that a non-profit might have.
      </p>
      <p className="siimple-p">
      Let us let you help the community. For questions or other inquiries, please get in touch via our contact page.
      </p>

      <div className="siimple-h2">Get Involved</div>
      <div className="siimple-h5">Are you a UCSD student? Do you want to join?</div>
      <br/>
      <p className="siimple-p">
      Our organization is constantly growing. Every fall, we recruit new developers, project managers, and designers. As an organization member, you will be put on a team that works directly with a non-profit to help them accomplish their technological goals. 
      </p>
      <p className="siimple-p">
      We also take pride in the fact that we have an extremely strong alumni network. Many of our members have worked at some of the most prominent companies in the world including:
      </p>
      <div className="siimple-grid">
        <div className="siimple-grid-row">
          <div className="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
            <Img fluid={data.google.childImageSharp.fluid} className="tse-alumni-company"></Img>
            <Img fluid={data.amazon.childImageSharp.fluid} className="tse-alumni-company"></Img>
          </div>
          <div className="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
            <Img fluid={data.facebook.childImageSharp.fluid} className="tse-alumni-company"></Img>
            <Img fluid={data.salesforce.childImageSharp.fluid} className="tse-alumni-company"></Img>
          </div>
          <div className="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
            <Img fluid={data.microsoft.childImageSharp.fluid} className="tse-alumni-company"></Img>
            <Img fluid={data.workday.childImageSharp.fluid} className="tse-alumni-company"></Img>
          </div>
        </div>
      </div>
      <p className="siimple-p">
      We hope you will consider joining us! Application links will be posted in the contact page during recruiting sessions. 
      </p>
    </div>
    <Footer></Footer> 
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
    google: file(relativePath: { eq: "companies/google.jpg" }) {
      ...FluidImage 
    }
    amazon: file(relativePath: { eq: "companies/amazon.png" }) {
      ...FluidImage
    }
    facebook: file(relativePath: { eq: "companies/facebook.jpg" }) {
      ...FluidImage
    }
    salesforce: file(relativePath: { eq: "companies/salesforce.jpg" }) {
      ...FluidImage
    }
    microsoft: file(relativePath: { eq: "companies/microsoft.png" }) {
      ...FluidImage
    }
    workday: file(relativePath: { eq: "companies/workday.jpg" }) {
      ...FluidImage
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
