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
    startingYear: "",
    startingQuarter: "Fall",
    graduationYear: "",
    graduationQuarter: "Fall",
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

  function handleSubmit(event) {
    event.preventDefault();
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

    setAlert({
      show: true,
      variant: "secondary",
      message: "Please wait up to a few seconds for the submission to go through.",
    });
    setLoading(true);

    fetch("https://tse-oktavian.herokuapp.com/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8000",
      },
      mode: "cors",
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        role: fields.position,
        resume: fields.resume,
        start_year: fields.startingYear,
        start_quarter: fields.startingQuarter,
        graduation_year: fields.graduationYear,
        graduation_quarter: fields.graduationQuarter,
        about: fields.about,
        why: fields.reason,
      }),
    })
      .then((response) => {
        response
          .json()
          .then((rjson) => {
            if (response.status === 200) {
              setAlert({
                show: true,
                variant: "success",
                message: "Submitted! Expect to hear back within a few weeks.",
              });
              form.reset();
            } else {
              setAlert({
                show: true,
                variant: "danger",
                message: "Could not submit application: " + rjson.message,
              });
            }
            setLoading(false);
          })
          .catch((error) => {
            setAlert({
              show: true,
              variant: "danger",
              message: "An error occurred: " + error.message,
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        setAlert({
          show: true,
          variant: "danger",
          message: "An error occurred: " + error.message,
        });
        setLoading(false);
      });
  }

  return (
    <div className="studentAppContainer">
      <div className="studentAppRow">
        <h1>TSE Student Application</h1>
        <p>
          Please whitelist the email address tse.oktavian.ucsd@gmail.com to prevent any
          recruitment-related emails from going to spam!
        </p>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="studentAppRow">
          <Col xs={12} md={6}>
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" name="name" onChange={handleChange} />
          </Col>
          <Col xs={12} md={6}>
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
            <Form.Check
              required
              className="appPositionContainer"
              type="radio"
              name="position"
              onChange={handleChange}
              value="Test Developer"
              label="Test Developer"
            />
            <Form.Check
              required
              className="appPositionContainer"
              type="radio"
              name="position"
              onChange={handleChange}
              value="Test Designer"
              label="Test Designer"
            />
          </Form.Group>
        </fieldset>

        <Row className="studentAppRow">
          <Col xs={12} md={6}>
            <Form.Label>Link to Resume (PDF)</Form.Label>
            <Form.Control required name="resume" onChange={handleChange} />
          </Col>
        </Row>

        <Row className="studentAppRow">
          <Col xs={12} md={6}>
            <Form.Label>Starting Year</Form.Label>
            <Form.Control required type="text" name="startingYear" onChange={handleChange} />
            <Form.Label>Starting Quarter</Form.Label>
            <select name="startingQuarter" onChange={handleChange}>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </Col>
          <Col xs={12} md={6}>
            <Form.Label>Expected Graduation Year</Form.Label>
            <Form.Control required type="text" name="graduationYear" onChange={handleChange} />
            <Form.Label>Graduation Quarter</Form.Label>
            <select name="graduationQuarter" onChange={handleChange}>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
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
