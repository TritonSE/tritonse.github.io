import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo.js'
import Header from '../components/header.js'
import Divider from '../components/divider.js'
import Footer from '../components/footer.js'
import {
  condense
} from '../util/styling.js'
import '../styles/pages.css'
import '../styles/forms.css'
import '../styles/colors.css'
import '../../node_modules/materialize-css/dist/css/materialize.min.css'

class IndexPage extends React.Component {
  render() {
    const {
      data
    } = this.props;

    let project1 = data.allTseProjects.edges[0].node;
    let project2 = data.allTseProjects.edges[1].node;
    let project3 = data.allTseProjects.edges[2].node;

    return (
      <div>
      <SEO title="Home" keywords={[`ucsd`, `tse`, `software`, `nonprofit`]} />
      <Header
        title={
          <span>Triton Software Engineering</span>
        }
        subtitle="We are an organization of engineers, designers, and problem solvers offering pro-bono technical and web development services for nonprofits."
        buttons={
          <span>
            <Link to="/apply" className="waves-effect waves-light btn-large tse-apply-button tse-header-button">Apply</Link> 
            <Link to="/about" className="waves-effect btn-large navy white-text tse-header-button">Learn More</Link>
          </span>
        }
        background='tse-header-geisel'
      />
      <div className="container">
        <Divider title="Technology for Good" subtitle="OUR VALUES" textColor="navy-text" lineColor="tse-divider-line-dark-yellow"/>
        <div className="row">
          <div className="col l6 s12">
            <Img fluid={data.whiteboard.childImageSharp.fluid} className="tse-generic-image tse-highlight-image"></Img>
          </div>
          <div className="col l6 s12">
            <p className="tse-text-medium navy-text">We believe that technology should be utilized to better the community. Something as simple as a sleek, static, and easy-to-use website or as complicated as  a mobile app to track donations to your organizations can have a huge impact on an organization of any size. Let us help you help the community.</p>
            <Link to="/about"><span className="link-text-color tse-text-large">Learn More <i className="material-icons tse-text-large">chevron_right</i></span></Link> </div>
        </div>
        <div className="tse-separation-medium"></div>
      </div>
      <div className="navy">
        <div className="container">
          <Divider title="Our Work So Far" subtitle="PROJECTS" textColor="white-text" lineColor="tse-divider-line-dark-yellow"/>
          <div className="row">
            <div className="col s12">
              <p className="tse-text-medium white-text">Every year, teams of 5 to 6 students work closely with nonprofit organizations on projects that are customized for the client and that will better the community. These are often mobile or web apps, but are not limited to just those categories.</p>
              <Link to="/projects"><span className="amber-text text-lighten-1 tse-text-large">View All Projects <i className="material-icons tse-text-large">chevron_right</i></span></Link>
            </div>
          </div>
          <div className="row">
            <div className="col l4 s12">
              <Img fluid={project1.image.childImageSharp.fluid} className="tse-home-project-image tse-highlight-image"></Img>
              <div className="tse-project-title center">
                <Link to={`/project/${project1.tag}`} className="tse-text-large white-text"><b className="tse-project-link-amber">{project1.title}</b></Link>
              </div>
              <p className="tse-text-medium white-text">{condense(project1.subtitle, 250)}</p>
            </div>
            <div className="col l4 s12">
              <Img fluid={project2.image.childImageSharp.fluid} className="tse-home-project-image tse-highlight-image"></Img>
              <div className="tse-project-title center">
                <Link to={`/project/${project2.tag}`} className="tse-text-large white-text"><b className="tse-project-link-amber">{project2.title}</b></Link>
              </div>
              <p className="tse-text-medium white-text">{condense(project2.subtitle, 250)}</p>
            </div>
            <div className="col l4 s12">
              <Img fluid={project3.image.childImageSharp.fluid} className="tse-home-project-image tse-highlight-image"></Img>
              <div className="tse-project-title center">
                <Link to={`/project/${project3.tag}`} className="tse-text-large white-text"><b className="tse-project-link-amber">{project3.title}</b></Link>
              </div>
              <p className="tse-text-medium white-text">{condense(project3.subtitle, 250)}</p>
            </div>
          </div>
        </div>
        <div className="tse-separation-medium"></div>
      </div>
      <div className="container">
        <Divider title="Let's Better the World" subtitle="WORK WITH US" textColor="navy-text" lineColor="tse-divider-line-dark-yellow"/>
        <div className="row">
          <div className="col m6 s12">
            <div className="container">
              <h4 className="blue-text center">For Nonprofits</h4>
              <Img fluid={data.nonprofits.childImageSharp.fluid} className="tse-home-apply-image"></Img> 
              <p className="tse-text-medium navy-text">If you're a nonprofit organization in need of technical help, feel free to contact us! We accept applications year round and try to respond as quickly as possible.</p>
              <Link to="/nonprofits"><span className="link-text-color tse-text-large">Learn More <i className="material-icons tse-text-large">chevron_right</i></span></Link>
            </div>
          </div>
          <div className="col m6 s12">
            <div className="container">
              <h4 className="dark-yellow-text center">For Students</h4>
              <Img fluid={data.students.childImageSharp.fluid} className="tse-home-apply-image"></Img> 
              <p className="tse-text-medium navy-text">Our applications for student positions will open in the fall of each year. Feel free to follow our Facebook page to stay updated!</p>
              <Link to="/students"><span className="link-text-color tse-text-large">Learn More <i className="material-icons tse-text-large">chevron_right</i></span></Link>
            </div>
          </div>
        </div>
        <div className="tse-separation-medium"></div>
      </div>
      <div className="container">
        <Divider title="We'd Love to Hear from You" subtitle="CONTACT US" textColor="navy-text" lineColor="tse-divider-line-dark-yellow"/>
        <div className="row">
          <div className="col s12">
            <h4 className="center navy-text">Email us at <a href="mailto:tse@ucsd.edu"><b className="dark-yellow-text">tse@ucsd.edu.</b></a></h4>
            <p className="center navy-text">We will do our best to promptly answer any inquiries.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    )
  }
}

export default IndexPage;

export const FluidImage = graphql `
fragment FluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const query = graphql `
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allTseProjects {
      edges {
        node {
          tag
          title
          subtitle
          image {
            ...FluidImage
          }
        }
      }
    }
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
    nonprofits: file(relativePath: { eq: "icon-nonprofits.png" }) {
      ...FluidImage
    }
    whiteboard: file(relativePath: { eq: "declan-image.png" }) {
      ...FluidImage
    }
  }
`
