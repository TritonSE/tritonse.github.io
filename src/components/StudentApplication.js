import React, { useState } from "react";
import "./StudentApplication.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function StudentApplication() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    position: "",
    resume: "",
    starting: "",
    graduation: "",
    about: "",
    reason: "",
  });
  const [validated, setValidated] = useState(false);

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldVal = event.target.value;
    setFields({ ...fields, [fieldName]: fieldVal });
  }

  function handleSubmit() {
    setValidated(true);
  }

  // Refer to: https://react-bootstrap.github.io/components/forms/
  return (
    <div className="studentAppContainer">
      <div className="studentAppRow">
        <h1>TSE Student Application</h1>
        <p>
          Please whitelist the email address tse.recruitment.ucsd@gmail.com to prevent any
          recruitment-related emails from going to spam!
        </p>
      </div>

      <Form validated={validated}>
        <Row className="studentAppRow">
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" name="name" onChange={handleChange} />
          </Col>
          <Col>
            <Form.Label>UCSD Email</Form.Label>
            <Form.Control required type="email" name="email" onChange={handleChange} />
          </Col>
        </Row>

        <fieldset className="studentAppRow">
          <Form.Group>
            <Form.Label>Position</Form.Label>

            <Form.Check
              required
              className="appPositionContainer"
              type="radio"
              name="position"
              onChange={handleChange}
              value="Developer"
              label={
                <>
                  Developer
                  <br />
                  <Form.Text>
                    <i>
                      Contribute code to meaningful projects while expanding your engineering
                      skillset.
                    </i>
                  </Form.Text>
                </>
              }
            />
            <Form.Check
              required
              className="appPositionContainer"
              type="radio"
              name="position"
              onChange={handleChange}
              value="Designer"
              label={
                <>
                  Designer
                  <br />
                  <Form.Text>
                    <i>
                      Design websites and mobile apps that will be widely adopted and heavily used
                      by our clients.
                    </i>
                  </Form.Text>
                </>
              }
            />
          </Form.Group>
        </fieldset>

        <Row className="studentAppRow">
          <Col>
            <Form.Label>Link to Resume (PDF)</Form.Label>
            <Form.Control required name="resume" onChange={handleChange} />
          </Col>
          <Col />
        </Row>

        <Row className="studentAppRow">
          <Col>
            <Form.Label>Starting Year + Quarter</Form.Label>
            <Form.Control required type="text" name="starting" onChange={handleChange} />
          </Col>
          <Col>
            <Form.Label>Expected Graduation Year + Quarter</Form.Label>
            <Form.Control required type="text" name="graduation" onChange={handleChange} />
          </Col>
        </Row>

        <Form.Group className="studentAppRow">
          <Form.Label>Tell us a bit about yourself</Form.Label>
          <Form.Control required as="textarea" rows={8} name="about" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="studentAppRow">
          <Form.Label>Why do you want to join TSE?</Form.Label>
          <Form.Control required as="textarea" rows={8} name="reason" onChange={handleChange} />
        </Form.Group>

        <div className="appBtnContainer">
          <Button type="submit" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
}
