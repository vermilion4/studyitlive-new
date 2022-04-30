import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert
} from "react-bootstrap";
import '../shared/passwordToggle.jsx'
import "../shared/FormCarousel"
import FormCarousel from "../shared/FormCarousel";
const SignUp = (props) => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [errorArray, setErrorArray] = useState([]);
  const [checkBox, setCheckBox] = useState({
    checkBox: false,
  });
  const [confirmPassword, setConfirmPassword] = useState()

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    // subDomainCode: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckBoxChange = (e) => {
    setCheckBox({
      ...checkBox,
      [e.target.name]: e.target.checked,
    });
  };

  const PostUserData = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (state.password !== confirmPassword) {
      setErrorArray((errorArray) => [...errorArray, "Passwords Do Not Match"]);
    }

    setValidated(true);
    fetch("https://studyitlive.herokuapp.com/everest/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    }).then(async function (response) {
      const resp = await response.json()
      if (response.status === 200) {
        history.push('/login')
      } else {
        setErrorArray(resp.errors)
      }

    });

  };


  return (
    <div className="unscrollable-view">
      <Row>
        <Col xs={12} lg={6} className="hide-carousel">
          <FormCarousel />
        </Col>

        <Col xs={12} lg={6}>
          <Container className="mx-auto signup-grid py-3 w-75">
            <div className="mx-auto hide-title-sm pb-2">
          <img
                    src='images/sil-logo.png'
                    alt='mid section background'
                    className=''
                  /></div>
            <h2 className="pt-1 pb-1 lato-700 hide-title-sm text-center" style={{color:"#1D2B4F"}}>Create your account</h2>
            <h2 className="pt-3 pb-3 lato-700 text-center show-title-sm">
              Sign up
            </h2>
            <h6 className="pb-1 lato-500 hide-title-sm text-center">
              Already have an account?&nbsp;
              <a
                href="/login"
                id="error"
                className="signup-login-link lato-700"
              >
                Login
              </a>
            </h6>
            <h6 className="pb-3 lato-500 text-center show-title-sm">
              Join everest today and start taking classes from the comfort of
              your home, office, on the go.
            </h6>
            <Form className="signup-form" noValidate validated={validated}>
              {errorArray &&
                errorArray.map((error) => (
                  <Alert key={"error" + error} variant={"danger"}>
                    {error}
                  </Alert>
                ))}
              <Row className="fullname">
                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                  <Form.Group>
                    <Form.Label className="uname lato-400">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      value={state.firstname}
                      onChange={handleChange}
                      id="form-control-style"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a first name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={{ span: 12 }} lg={{ span: 6 }}>
                  <Form.Group>
                    <Form.Label className="uname lato-400">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      value={state.lastname}
                      onChange={handleChange}
                      id="form-control-style"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a last name.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label className="email lato-400">E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  id="form-control-style"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label className="pwd lato-400">Password</Form.Label>
                <div className="password" id="show_hide_password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    id="form-control-style"
                    required
                  />
                  <div className="input-group-addon">
                    <a href="">
                      <i className="fa fa-eye-slash" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label className="pwd lato-400">
                  Confirm Password
                </Form.Label>
                <div className="password" id="show_hide_password2">
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange2}
                    id="form-control-style"
                    required
                  />
                  <div className="input-group-addon">
                    <a href="">
                      <i className="fa fa-eye-slash" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>

              {/* <Form.Group className="pb-2">
                <Form.Label className="sub-code lato-400">
                  Sub-Domain Code
                </Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  name="subDomainCode"
                  value={state.subDomainCode}
                  onChange={handleChange}
                  placeholder="Optional"
                  id="form-control-style"
                  required
                />

                <Form.Control.Feedback type="invalid">
                  Please provide a domain code.
                </Form.Control.Feedback>
              </Form.Group> */}

              <Form.Check
                className="pb-2 lato-400"
                name="termsBox"
                required
                onChange={handleCheckBoxChange}
                label={
                  "I agree with the terms of service & condition and Privacy policy"
                }
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />

              <Button
                variant="outline-light"
                onClick={PostUserData}
                id="signup-button"
                className="lato-700"
                size="lg"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
              <h6 className="p-3 lato-500 show-title-sm text-center">
              Already have an account?&nbsp;
              <a
                href="/login"
                id="error"
                className="signup-login-link lato-700"
              >
                Login
              </a>
            </h6>
            </Form>
          </Container>
        </Col>
      </Row >
    </div >
  );
};
export default SignUp;
