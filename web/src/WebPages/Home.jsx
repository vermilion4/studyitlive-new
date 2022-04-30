import React from 'react';
import Layout from '../shared/Layout';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
const Home = (props) => {
  return (
    <Layout>
      <section className='pt-5 pb-5 home-head'>
        <Container>
          <Row className='pt-1 home-head-flex'>
            <Col xs={12} md={6} lg={5} className='landing-text'>
              <span className='center__button home-head-text'>
                <h1
                  className='home-title-text poppins-700'
                  style={{ color: '#103449' }}
                >
                  <b>Start Your Course From Here</b>
                </h1>
                <h5 className='home-sub poppins-400'>
                  Join the best online classes which has all you need to get
                  that degree
                </h5>
                <br />
                <div className='register-btn'>
                  <Button
                    variant='outline-light'
                    style={{
                      backgroundColor: '#1B2C98',
                      width: '150px',
                      borderColor: '#1B2C98',
                    }}
                    href='/usertype'
                    className='poppins-700'
                    size='lg'
                    id='navbar-button2'
                  >
                    Register
                  </Button>
                </div>
              </span>
            </Col>
            <Col xs={12} md={6} lg={7}>
              <Image
                src='images/studentReading.webp'
                alt='Students Reading'
                className='home-page-pic'
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pb-5' style={{ background: '#FFF8F8' }}>
        <Container>
          <Row className='pt-5'>
            <h3 className='home-title my-5 pb-5 text-center poppins-600'>
              Achieve your goals with StudyItLive
            </h3>
            <Col xs={12} md={4} lg={4}>
              <h6 className='center__text poppins-500'>
                <div className='video-logo'>
                  <Icons.PlayCircle color='blue' size={35} />
                </div>
                Online tutoring
              </h6>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <h6 className='center__text poppins-500'>
                <div className='laptop-logo'>
                  <Icons.Laptop color='white' size={35} />
                </div>
                Active Learning
              </h6>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <h6 className='center__text poppins-500'>
                <div className='certificate-logo'>
                  <Icons.CardHeading color='green' size={35} />
                </div>
                Earn a Certificate
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='midsection'>
        <div className='mid-div'>
          <Image
            src='images/joinBackground.png'
            alt='mid section background'
            className='midsection-bg'
          />
          <div className='mid-section'>
            <h1 className='poppins-700'>Join us today</h1>
            <p className='poppins-700 p-2'>1000+ million people already learning on our platform</p>
            <Button
              id="navbar-button2"
              variant='outline-light'
              style={{ width: '150px' }}
              href='/usertype'
              className='poppins-700 p-2'
            >
              Join for free
            </Button>
          </div>
        </div>
      </section>
      {/* <section className='pt-2'>
        <Container>
          <Row className='pt-5'>
            <h3 className='pb-4 my-5 text-center poppins-600'>
              Schools Who Have Joined StudyItLive
            </h3>
            <Col className='pb-3'>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variant='top'
                    src='/images/Bulogo.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Babcock University
                  </Card.Title>
                  <Card.Subtitle className='text-center poppins-500'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Ademola Tayo</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pb-3'>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variant='top'
                    src='/images/Culogo.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Covenant University
                  </Card.Title>
                  <Card.Subtitle className='text-center poppins-500'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Abiodun H. Adebayo</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variant='top'
                    src='/images/Lculogo.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Lead City University
                  </Card.Title>
                  <Card.Subtitle className='text-center'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Kabiru Aderemi Adeyemo</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='pt-3'>
            <Col className='pb-3'>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variance='top'
                    src='/images/Bwulogo.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Bowen University
                  </Card.Title>
                  <Card.Subtitle className='text-center poppins-500'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Joshua Olalekan Ogunwole</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pb-3'>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variance='top'
                    src='/images/adeleke.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Adeleke University
                  </Card.Title>
                  <Card.Subtitle className='text-center poppins-500'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Samuel Ekundayo Alao</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col className='pb-3'>
              <Card border='light' className='university-logo-cards'>
                <center>
                  <Card.Img
                    variance='top'
                    src='/images/Caulogo.webp'
                    style={{ width: '138px', height: '130px' }}
                  />
                </center>
                <Card.Body>
                  <Card.Title className='home-title text-center poppins-500'>
                    Caleb University
                  </Card.Title>
                  <Card.Subtitle className='text-center poppins-500'>
                    <small className='text-muted'>Vice Chancellor</small>
                  </Card.Subtitle>
                  <Card.Text className='lec-names text-center poppins-500'>
                    <small>Prof. Nosa Owens-Ibie</small>
                  </Card.Text>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Book color='blue' />
                          &nbsp;100+ Courses
                        </small>
                      </Col>
                      <Col>
                        <small className='text-muted poppins-500'>
                          <Icons.Clock color='orange' />
                          &nbsp;100+ Hours
                        </small>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className='info-background'>
        <img src='/images/fullellipse.png' className='ellipse-bg' />
        <img src='/images/fullellipse-big.png' className='big-ellipse-bg' />
        <img src='/images/right-ellipse.png' className='ellipse-bg2' />
        <img src='/images/right-fullellipse.png' className='big-ellipse-bg2' />
        <Container className='pb-5 info-container'>
          <Row className='pt-5'>
            <Col
              xs={{ order: 2, span: 12 }}
              md={{ order: 1, span: 6 }}
              className='mb-5'
            >
              <Image
                src='images/facemaskLaptop.png'
                alt='Student With Tablet'
                fluid
                rounded
                className='offer-pic offer-pics'
              />
              <Image
                src='images/manLaughAtLaptop.png'
                alt='Teacher In A Classroom'
                fluid
                rounded
                className='offer-pic2 offer-pics'
              />
              <Image
                src='images/studentLibrary.png'
                alt='Student With Laptop'
                fluid
                rounded
                className='offer-pic3 offer-pics'
              />
            </Col>

            <Col
              xs={{ order: 1, span: 12 }}
              md={{ order: 2, span: 6 }}
              className='pt-5 pb-5 center__button'
            >
              <h2 className='poppins-600' style={{ color: ' #353535' }}>
                <b>What we offer</b>
              </h2>
              <p className='poppins-500'>
                <b>
                  <span className='info-text poppins-700'>1000+ materials</span>{' '}
                  on various courses for <br />
                  professional development.
                </b>
              </p>
              <p className='poppins-500'>
                <b>
                  <span className='info-text  poppins-700'>Pre-recorded</span>{' '}
                  lessons to access in own time
                </b>
              </p>
              <p className='poppins-500'>
                <b>
                  <span className='info-text  poppins-700'>Live sessions</span>{' '}
                  with intructor
                </b>
              </p>
            </Col>
          </Row>
          <Row className='pt-5 mt-5'>
            <Col xs={12} md={6}>
              <div className='home-banner pt-5'>
                <h2 className='home-title-color home-banner info-words poppins-600'>
                  <b>Learn From Great Instructors</b>
                </h2>
                <strong className='poppins-500'>
                  <p>Start streaming on-demand video</p>
                  <p>lectures today from top instructors</p>
                  <p>in subjects like business, computer science,</p>
                  <p>data science, language learning,& more.</p>
                </strong>
              </div>
            </Col>
            <Col xs={12} md={6} className='pt-4'>
              <Image
                src='images/teacherZoom.png'
                alt='Black Board And Teacher'
                fluid
                rounded
                id='board-teach'
                style={{ width: '350px', height: '300px' }}
              />
            </Col>
          </Row>

          <Row className='pt-5'>
            <Col
              xs={{ order: 2, span: 12 }}
              lg={{ order: 1 }}
              md={{ order: 2, span: 6 }}
              className='pb-4 thumbs'
            >
              <Image
                src='images/teacherBoard.png'
                alt='Thumbs Up Photo'
                fluid
                rounded
                id='thumbs-up-pic'
                style={{ width: '350px', height: '300px' }}
              />
            </Col>
            <Col
              xs={{ order: 1, span: 12 }}
              lg={{ order: 2 }}
              md={{ order: 2, span: 6 }}
              className='center__button'
            >
              <div className='home-banner'>
                <h2 className='home-title-color'>
                  <strong className='poppins-600'>
                    Take the next step toward your personal and professional
                    goals with StudyItLive.
                  </strong>
                </h2>
                <strong className='info-text2 poppins-500'>
                  <p>
                    Join now to receive personalized
                    <br />
                    recommendations from the full Coursera
                    <br />
                    catalog.
                  </p>
                </strong>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h3 className='text-center poppins-600 community-title'>
            From the StudyItLive Community
          </h3>
          <h4 className='text-muted text-center pb-4 poppins-500 community-subtitle'>
            1000+ million people are already learning on StudyItLive
          </h4>
          <Row className='pt-5'>
            <Col xs={12} md={6} lg={4}>
              <Card
                border='light'
                className='home-user-card shadow p-3 mb-5 bg-white rounded'
              >
                <Card.Img
                  src='/images/user1.webp'
                  variant='top'
                  id='user-card-image'
                />
                <Card.Body>
                  <Card.Title className='home-title-color poppins-500 text-center'>
                    Demola Ishola
                  </Card.Title>
                  <Card.Subtitle className='text-center'>
                    <small className='text-muted poppins-600'>
                      Product Manager
                    </small>
                  </Card.Subtitle>
                  <Card.Text className='text-center testimonial-text poppins-500'>
                    <small>
                      Recruiters saw my certificate on my LinkedIn Profile and
                      were impressed with my skills I learned. I got the job
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card
                border='light'
                className='home-user-card shadow p-3 mb-5 bg-white rounded'
              >
                <Card.Img
                  src='/images/user2.webp'
                  variant='top'
                  id='user-card-image'
                />
                <Card.Body>
                  <Card.Title className='home-title-color poppins-500 text-center'>
                    Wahab Ayomide
                  </Card.Title>
                  <Card.Subtitle className='text-center'>
                    <small className='text-muted poppins-600'>
                      Full-Stack Developer
                    </small>
                  </Card.Subtitle>
                  <Card.Text className='text-center testimonial-text poppins-500 '>
                    <small>
                      My employer was super excited with how much have learnt on
                      the job and got a raise. StudyItLive helped me track my
                      progress.
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <Card
                border='light'
                className='home-user-card shadow p-3 mb-5 bg-white rounded'
              >
                <Card.Img
                  src='/images/user3.webp'
                  variant='top'
                  id='user-card-image'
                />
                <Card.Body>
                  <Card.Title className='home-title-color poppins-500 text-center'>
                    Amood Sumayyah
                  </Card.Title>
                  <Card.Subtitle className='text-center'>
                    <small className='text-muted poppins-600 '>
                      UX Designer
                    </small>
                  </Card.Subtitle>
                  <Card.Text className='text-center testimonial-text poppins-500 '>
                    <small>
                      I started at ground zero. With StudyItLive I was able to
                      start learning UX online and eventually build up enough
                      knowledge to transition into a well paying career.
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
export default Home;
