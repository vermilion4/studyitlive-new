import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Alert,
  Image,
  Card,
} from 'react-bootstrap';
import FormCarousel from '../shared/FormCarousel';
const PasswordReset = () => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const PostUserData = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className='unscrollable-view'>
      <Row>
        <Col xs={12} lg={6} className='hide-carousel'>
          <FormCarousel />
        </Col>
        <Col xs={12} lg={6} className='d-grid'>
          <h6 className='ml-auto lato-400 p-3'>
            Not a member?{' '}
            <a href='/signup' className='signup-login-link lato-500'>
              <strong>Sign up now</strong>
            </a>
          </h6>
          
          <Container className='mx-auto password-reset-grid w-75'>
          <div className='hide-title-sm pb-2 d-flex justify-content-center'>
              <img
                src='images/sil-logo.png'
                alt='mid section background'
                className=''
              />
            </div>
            <h2 className='pb-1 lato-700 text-center'>Forgot Password?</h2>
            <h6 className='text-muted lato-400 pb-2'>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password.
            </h6>
            <Card className='shadow'>
              <Card.Body>
                <Form className='pt-2' noValidate validated={validated}>
                  <Form.Group className='pb-2'>
                    <Form.Label className='lato-500'>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      size='lg'
                      name='email'
                      value={state.email}
                      onChange={handleChange}
                      id='form-control-style'
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant='outline-light'
                    onClick={PostUserData}
                    id='signup-button'
                    size='lg'
                    className='lato-700'
                    style={{ width: '100%' }}
                  >
                    Send Reset Link
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
export default PasswordReset;
