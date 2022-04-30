import React from 'react';
import {
  Row,
  Col,
  Container,
  FormControl,
  Button,
  InputGroup,
  Form,
} from 'react-bootstrap';
const Footer = () => {
  return (
    <footer style={{ background: '#0C1445', color: '#fff' }}>
      <Container>
        <Row className='pt-5 pb-3 d-flex align-items-center'>
          <Col xs={12} md={12} lg={3}>
            <div className='footer-text'>
              <Row>
                <Col className='d-flex align-items-center'>
                  <img
                    src='images/smallLogo.png'
                    alt='mid section background'
                    className=''
                  />
                  <h4 className='footer-logo poppins-700 p-1'>StudyItLive</h4>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Row className='pt-3 pb-3'> */}
          <Col xs={6} md={6} lg={2}>
            <a href='#' className='footer-link poppins-500'>
              Blog
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              Terms
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              Career
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              About us
            </a>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <a href='#' className='footer-link poppins-500'>
              Contact us
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              Privacy policy
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              Teach on StudyItLive
            </a>
            <br />
            <br />
            <a href='#' className='footer-link poppins-500'>
              Help and support
            </a>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <div className='footer-newsletter'>
              <Form.Label className='poppins-700 home-title-color subscribe-text'>
                Subscribe To Our Newsletter
              </Form.Label>
              <div className='show-sm'>
                <InputGroup
                  className='mb-3 subscribe-text'
                  style={{ Width: '300px' }}
                >
                  <FormControl placeholder='email' 
                  style={{ maxWidth: '200px'}}/>
                  <Button
                    style={{
                      backgroundColor: '#1B2C98',
                      borderColor: '#1B2C98',
                    }}
                    id='navbar-button2'
                    variant='outline-light'
                    className='poppins-700'
                  >
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
              <div className='show-lg'>
                <FormControl
                  placeholder='email'
                  style={{ maxWidth: '400px', marginBottom: '1rem' }}
                />
                <Button
                  style={{ backgroundColor: '#1B2C98', borderColor: '#1B2C98' }}
                  id='navbar-button2'
                  variant='outline-light'
                  className='poppins-700'
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>

          <div className='poppins-500 footer-copyright pt-5 mt-5'>
            <hr className='footer-line' />
            <b>&copy;</b>2021 STUDYitLIVE. All rights reserved.
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
