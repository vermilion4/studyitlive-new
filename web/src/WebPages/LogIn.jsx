import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Image
} from "react-bootstrap";
import '../shared/passwordToggle.jsx'
import FormCarousel from "../shared/FormCarousel";
import { AlignCenter } from "react-bootstrap-icons";
const LogIn = (props) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [checkBox, setCheckBox] = useState({
    checkBox: false,
  });
  const [validated, setValidated] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
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
    }
    setValidated(true);
    fetch("https://studyitlive.herokuapp.com/everest/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    }).then(async function (response) {
      const resp = await response.json()
      if (response.status === 200) {
        document.cookie = `uid=${resp.token}; max-age=${60 * 60 * 24 * 7}; path=/`;
        history.push('/lecProfile')
      } else {
        setError(resp.errors)
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
          <Container className="mx-auto pt-2 w-75 login-grid">
          <div className="mx-auto hide-title-sm pb-2">
          <img
                    src='images/sil-logo.png'
                    alt='mid section background'
                    className=''
                  /></div>
            <h2 className="pt-1lato-700 hide-title-sm text-center" style={{color:"#1D2B4F"}}>Login To Your Account</h2>
            <h2 className="lato-700 show-title-sm text-center">Welcome back</h2>
            <Form
              className="pb-1 pt-1 login-form"
              noValidate
              validated={validated}
            >
              {error && (
                <Alert key={"error" + error} variant="danger">
                  {error}
                </Alert>
              )}

              <Form.Group>
                <Form.Label className="email lato-400">E-mail</Form.Label>
                <Form.Control
                  type="email"
                  size="lg"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  id="form-control-style"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a email.
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
                    size="lg"
                    id="form-control-style"
                    required
                  />
                  <div class="input-group-addon">
                    <a href="">
                      <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="pb-2 login-deet">
                <div>
                  <Form.Check
                    className="lato-600"
                    name="rememberBox"
                    onChange={handleCheckBoxChange}
                    label={"Remember Me"}
                    required
                  />
                </div>
                <div className="forgot-pass">
                  <a
                    href="/passwordreset"
                    className="forgot-password-link lato-700 footer-copyright"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <Button
                variant="outline-light"
                onClick={PostUserData}
                id="signup-button"
                size="lg"
                className="lato-700"
                style={{ width: "100%" }}
              >
                Sign In
              </Button>
            </Form>
            <hr className="mb-4 mt-4 hide-title-sm" />
            <h6 className="lato-400 pb-3 no-account">
              Dont Have an account?&nbsp;
              <a href="/signup" className="signup-login-link lato-600">
                Sign Up
              </a>
            </h6>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
export default LogIn;
