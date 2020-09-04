import React from 'react'
import {
  Link,
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

class StudentsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      resume: "",
      graduation: "",
      about: "",
      why: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDirectInputChange = this.handleDirectInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm(event) {
    const validation = { valid: false, error: "Please fill out all fields in the application." };
    if (this.state.name === "" ||
      this.state.email === "" ||
      this.state.role === "" ||
      this.state.resume === "" ||
      this.state.graduation === "" ||
      this.state.about === "" ||
      this.state.why === "") 
    {
      return validation;
    }
    validation.valid = true;
    return validation;
  }

  resetForm(event) {
    this.setState({
      name: "",
      email: "",
      role: "",
      resume: "",
      graduation: "",
      about: "",
      why: ""
    });
  }

  handleInputChange(event) {
    this.handleDirectInputChange(event.target.name, event.target.value);
  }

  handleDirectInputChange(field, value) {
    this.setState({ [field]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const validation = this.validateForm(event);
    if (validation.valid) {
      document.getElementById('app-submit').disabled = true;
      fetch('https://tse-recruitment-backend.herokuapp.com/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          role: this.state.role,
          resume: this.state.resume,
          graduation: this.state.graduation,
          about: this.state.about,
          why: this.state.why
        })
      }).then(response => {
        if (response.status === 429) {
          window.M.toast({html: 'You are attempting to submit too many applications.', classes: 'red darken-2'});
          document.getElementById('app-submit').disabled = false;
          return;
        }
        response.json().then(rjson => {
          if (response.status === 200) {
            window.M.toast({html: 'Submitted! Expect to hear back within a few weeks.', classes: 'green darken-1'});
            document.getElementById('app-submit').disabled = false;
            this.resetForm();
          }
          else {
            window.M.toast({html: 'Could not submit application: ' + rjson.message, classes: 'red darken-2'});
          }
          document.getElementById('app-submit').disabled = false;
        }).catch(error => {
          window.M.toast({html: 'An error occurred: ' + error.message, classes: 'red darken-2'});
          document.getElementById('app-submit').disabled = false;
        });
      }).catch(error => {
        window.M.toast({html: 'An error occurred: ' + error.message, classes: 'red darken-2'});
        document.getElementById('app-submit').disabled = false;
      });
    }
    else {
      window.M.toast({html: validation.error, classes: 'red darken-2'});
    }
  }

  render() {
    const {data} = this.props;
    // Application information is stored in data.allTseApplications 
    // This is fetched using a GraphQL query that maps to the tritonse-source-firestore plugin 
    let apps_active = false;
    data.allTseApplications.edges.forEach(function(value) { 
      let node = value.node; 
      if (node.id === 'all') {
        apps_active = node.active;
      }
    }); 
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
            <div className="col l6 s12" id="apply">
              <h5 className="tse-apply-subtitle">Come join our family and find a way to put your skills to use by giving back to the community! We recruit annually in the fall so make sure you stay up to date.</h5>
              <div>
                {apps_active ?
                <p className="tse-text-medium">
                  Applications are open! Apply below. We will reach out to you with more details if you are selected.
                </p> :
                <p className="tse-text-medium tse-separation-small">
                  Applications are currently closed. Please check back next fall if you are interested in joining.
                </p>}
              </div>
            </div>
          </div>
        </div>
        {apps_active ? <div className="container">
          <div className="row">
            <hr/>
            <div className="tse-separation-medium col s12">
              <div className="card navy">
                <div className="card-content white-text container">
                  <h4 className="center">TSE Student Application</h4>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="input-field col s6">
                        <span className="white-text"><b>Name</b></span>
                        <input type="text" name="name" className="validate white-text" value={this.state.name} onChange={this.handleInputChange}/>
                      </div>
                      <div className="input-field col s6">
                        <span className="white-text"><b>Email</b></span>
                        <input type="email" name="email" className="validate white-text" value={this.state.email} onChange={this.handleInputChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <span className="white-text"><b>Position</b></span>
                        <div value={this.state.role} onChange={this.handleInputChange}>
                          <p><label><input className="with-gap" name="role" type="radio" value="DEVELOPER"/><span>Developer</span></label></p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="tse-text-small">Contribute code to meaningful projects while expanding your engineering skillset.</span></p>
                          <p><label><input className="with-gap" name="role" type="radio" value="DESIGNER"/><span>Designer</span></label></p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="tse-text-small">Design websites and mobile apps that will be widely adopted and heavily used by our clients.</span></p>
                          <p><label><input className="with-gap" name="role" type="radio" value="PROJECT_MANAGER"/><span>Program Manager</span></label></p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="tse-text-small">Lead a team of four to six students to complete a real project for a real client.</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s6">
                        <span className="white-text"><b>Link to Resume</b></span>
                        <input type="text" name="resume" className="validate white-text" value={this.state.resume} onChange={this.handleInputChange}/>
                      </div>
                      <div className="input-field col s6">
                        <span className="white-text"><b>Expected Graduation Year</b></span>
                        <select 
                          value={this.state.graduation} 
                          onChange={
                            (event) => { this.handleDirectInputChange('graduation', parseInt(event.target.value)) }
                          }>
                          <option value="" disabled selected>Select a year</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <span className="white-text"><b>Tell us a bit about yourself.</b></span>
                        <textarea name="about" className="materialize-textarea white-text" value={this.state.about} onChange={this.handleInputChange}></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <span className="white-text"><b>Why do you want to join TSE?</b></span>
                        <textarea name="why" className="materialize-textarea white-text" value={this.state.why} onChange={this.handleInputChange}></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 center-align">
                        <button className="waves-effect tse-separation-small btn-large amber darken-1" type="submit" id="app-submit">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div> : ""}
      </div>
      <div className="navy">
        <div className="container">
          <Divider subtitle="DECISION CRITERIA" textColor="white-text" lineColor="tse-divider-line-dark-yellow"/>
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
        <Divider subtitle="FREQUENTLY ASKED QUESTIONS" textColor="navy-text" lineColor="tse-divider-line-dark-yellow"/>
        <div className="row navy-text">
          <div className="col s12">
            <h4>What is Triton Software Engineering?</h4>
            <p className="tse-text-medium">Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience.</p>
            <p className="tse-text-medium">Want to learn more about TSE? <Link to="/about" className="link-text-color">Click here!</Link></p>
          </div>
          <div className="col s12">
            <h4>Why should I join TSE?</h4>
            <p className="tse-text-medium">If you are passionate about helping others using the skills you learn in college, then TSE is the perfect place for you! We are all about social good, and we hope you share our passion. TSE also offers a close network of like-minded students, and we can also help you build skills that can help you advance your career.</p>
          </div>
          <div className="col s12">
            <h4>What kind of experience do I need to join TSE?</h4>
            <p className="tse-text-medium">At Triton Software Engineering, we seek students who are hardworking and passionate for social good. We are a project-based organization, so experience working in teams is a plus! You will also need some prior experience with designing or developing, depending on whether you want to be a developer or designer respectively.</p>
            <p className="tse-text-medium">Designers must have working knowledge of the standard design process (i.e. stages of research, ideation, testing) and also some experience with your own UI/UX work (if you have a portfolio to show us, that’d be fantastic!).</p>
            <p className="tse-text-medium">Developers must be familiar with any one OOP language (Java, Python, and C/C++ are common ones). For bonus points, a working knowledge of web technologies (e.g. HTTP, HTML/DOM, JavaScript, CSS, AJAX, REST APIs) is impressive, but definitely not required as we will teach you the technologies necessary to contribute.</p>
          </div>
          <div className="col s12">
            <h4>What is the TSE Recruitment Process like?</h4>
            <p className="tse-text-medium">TSE recruits new members at the beginning of every Fall quarter. In 2019, we accepted a total of 31 members from 167 applicants.</p>
            <p className="tse-text-medium">There are three stages: a resume screen, a quick behavioral phone chat, and an in-person technical interview. Due to the current circumstances, we’ll be shifting our in-person interviews online. In 2020, we’ll be holding two info sessions regarding this process. Please keep an eye on our Facebook page for more details!</p>
            <p className="tse-text-medium">Interested in applying? <Link to="/students#apply" className="link-text-color">Click here!</Link></p>
          </div>
          <div className="col s12">
            <h4>How many project teams are there? How are TSE projects structured?</h4>
            <p className="tse-text-medium">The number of project teams in TSE depends on the number of nonprofits we are able to secure collaborations with every year. For the 2019-2020 school year, we had 7 project teams.</p>
            <p className="tse-text-medium">TSE's structure consists of our board, a design team, and 4-6 project-based teams. Our design team is a team of 4-5 designers led by a design lead. Each development team is made up of a project leader and 4-5 developers. Teams work independently of one another to create software for a specific non-profit they have been assigned to.</p>
          </div>
          <div className="col s12">
            <h4>What does being a designer look like at TSE?</h4>
            <p className="tse-text-medium">Designers communicate closely with our nonprofit clients in order to craft user flows, wireframes, and prototypes that align with their needs. Designers often take on projects in pairs. They are the ones creating the detailed plan for the end solution, which is then eventually handed off to TSE developers. There’s a variety of types of projects, ranging from website rebranding to internal software tools.</p>
          </div>
          <div className="col s12">
            <h4>What does being a developer look like at TSE?</h4>
            <p className="tse-text-medium">We emulate the Agile Workflow to give our developers some insight on industry standards. Developers complete weekly tasks assigned to them by their project manager during their team meetings. The work that you will be doing depends on your client. For most web development work, we tend to stick to the MERN stack, and for most cross-platform mobile development, we focus on using React Native with Expo. This means that, as a whole, TSE ends up with many JavaScript-based applications. However, depending on the client's needs, we have been known to use other technologies, such as Java and PHP.</p>
          </div>
          <div className="col s12">
            <h4>How will TSE operate under the ongoing pandemic?</h4>
            <p className="tse-text-medium">We are going fully remote. Our recruitment process will be online, and we will do our best to provide as much support as possible through Information Sessions and various panels. All teams in TSE will continue to work remotely with weekly check-ins. We will be continuing our regular virtual workshops and social events. Please visit our website and Facebook page for the most up-to-date information.</p>
          </div>
        </div>
      </div>
      <div className="tse-slogan-container">
        <div className="container">
          <Divider textColor="navy-text" lineColor="tse-divider-line-dark-yellow" caption="Develop for social good. Design for real world clients. Problem-solve with us."/>
        </div>
      </div>
      <Footer/>
    </div>)
  }
}

export default StudentsPage;

export const query = graphql `
  query {
    allTseApplications {
      edges {
        node {
          id
          active
        }
      }
    }
    students: file(relativePath: { eq: "icon-students.png" }) {
      ...FluidImage
    }
  }
`
