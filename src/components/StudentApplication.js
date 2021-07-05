import React, { useState } from "react";
import "./StudentApplication.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

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
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    message: "",
  });

  function handleChange(event) {
    const fieldName = event.target.name;
    const fieldVal = event.target.value;
    setFields({ ...fields, [fieldName]: fieldVal });
  }

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAlert({
      show: false,
      variant: "",
      message: "",
    });
    const form = event.currentTarget;

    // missing fields or invalid email
    if (!form.checkValidity()) {
      setValidated(true);
      setAlert({
        show: true,
        variant: "danger",
        message: "Please fill out all fields in the application.",
      });
      return;
    }

    setValidated(false);
    setLoading(true);

    // post field data – fake for now
    fakeRequest().then(() => {
      // success
      form.reset();
      setLoading(false);
      setAlert({
        show: true,
        variant: "success",
        message: "Submitted! Expect to hear back within a few weeks.",
      });
    });
  }

  return (
    <div className="studentAppContainer">
      <div className="studentAppRow">
        <h1>TSE Student Application</h1>
        <p>
          Please whitelist the email address tse.recruitment.ucsd@gmail.com to prevent any
          recruitment-related emails from going to spam!
        </p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
          <Button id="studentAppBtn" variant="custom" type="submit" disabled={loading}>
            SUBMIT
          </Button>
        </div>
      </Form>

      <Alert className="studentAppAlert" show={alert.show} variant={alert.variant}>
        {alert.message}
      </Alert>
    </div>
  );
}
