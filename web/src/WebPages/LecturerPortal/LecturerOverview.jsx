import React, { useState, useEffect } from "react";
import { Row, Col, Image, Card } from "react-bootstrap";
import * as Icons from 'react-bootstrap-icons'
import LecLayout from "../../shared/LecLayout";
import ActivityChart from "../../utilities/ActvityChart";
import { getUserToken } from '../../utilities/helper';
const LecturerOverview = (prop) => {
    const userToken = getUserToken();

    return (
        <LecLayout>
            <Row>
                <Col xs={12} sm={7} lg={8} className="calendar">
                    <Row>
                        <Col>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <Card.Title style={{ color: '#2CDCD9' }} className='lato-700'>Welcome Dr. K.S Adewole</Card.Title>
                                    <Card.Text className='lato-500'>Ad Lorem proident reprehenderit enim cupidatat irure quis mollit duis eu elit esse nisi. Commodo anim amet dolor duis excepteur ut ut pariatur reprehenderit nulla amet ipsum nostrud. Ullamco veniam amet eu commodo dolor culpa eu consectetur ipsum elit ullamco.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card className="shadow-sm mb-4 title-card">

                                <Card.Title className="pt-4 title__">
                                    <div className='d-flex icon-text-spacer'>
                                        <div className="student-logo">
                                            <Icons.Person color="blue" size={30} />
                                        </div>
                                        <div className="d-flex flex-column align-items-start lato-700">
                                            <span>120</span>
                                            <span className="text-muted"><h6>Registered Pupils</h6></span>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col lg={4}  >
                            <Card className="shadow-sm mb-4 title-card">
                                <Card.Title className="pt-4">
                                    <div className='d-flex icon-text-spacer'>
                                        <div className="semester-logo">
                                            <Icons.Pencil color="#1F5372" size={30} />
                                        </div>
                                        <div className="d-flex flex-column align-items-start lato-700">
                                            <span>Rain</span>
                                            <span className="text-muted"><h6>Semester</h6></span>
                                        </div>
                                    </div>
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <a href='/lecCourses' style={{ textDecoration: 'none' }}>
                                <Card className="shadow-sm mb-4 title-card">
                                    <Card.Title className="pt-4">
                                        <div className='d-flex icon-text-spacer'>
                                            <div className="course-logo">
                                                <Icons.FileEarmarkTextFill color="#FFFFFF" size={30} />
                                            </div>
                                            <div className="d-flex flex-column align-items-start lato-700">
                                                <span style={{ "color": "#000" }}>4</span>
                                                <span className="text-muted"><h6>Allocated Courses</h6></span>
                                            </div>
                                        </div>
                                    </Card.Title>

                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <Card.Title style={{ color: '#2CDCD9' }} className='lato-700'>Activity</Card.Title>
                                    <ActivityChart />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={5} lg={4}>
                    <Row>
                        <Col>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <Card.Title style={{ color: '#2CDCD9' }} className='lato-700'>Notifications</Card.Title>
                                    <div className='media pb-3'>
                                        <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='navbar-pic' roundedCircle />&nbsp;&nbsp;
                                        <div className="media-body">
                                            <Card.Text>
                                                <span className='lato-700'>Dr. Akintola set up a zoom meeting for 4pm</span> <br /><span className="text-muted lato-500">1hr ago</span>
                                            </Card.Text>
                                        </div>
                                    </div>
                                    <div className='media'>
                                        <Image src='images/teacherClassroom.webp' alt='Teacher In A Classroom' className='navbar-pic' roundedCircle />&nbsp;&nbsp;
                                        <div className="media-body">
                                            <Card.Text>
                                                <span className='lato-700'>400 level class rep set up a meeting </span> <br /><span className="text-muted lato-500">1hr ago</span>
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <Card.Title style={{ color: '#2CDCD9' }} className='lato-700'>Upcoming Events</Card.Title>
                                    <Card.Subtitle className='lato-700'>Google Annual Developer Convention </Card.Subtitle>
                                    <Card.Text><small><span className='text-muted lato-700'>Hosted by</span> <span style={{ color: '#1B2C98' }} className='lato-700'><b>Google Nigeria</b></span></small></Card.Text>
                                    <Card.Text style={{ color: '#353535' }}><small className='lato-700'>Members Attending</small></Card.Text>
                                    <Card.Text style={{ color: '#1B2C98' }}><small className='lato-700'>Aug 19th, 2021</small> &bull; <small className='lato-700'>10:00am - 2:00pm</small> &bull; <small className='lato-700'>Google Meet</small></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="shadow-sm mb-4">
                                <Card.Body>
                                    <Card.Title style={{ color: '#2CDCD9' }} className='lato-700'>Live Chat</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </LecLayout >
    );
};

export default LecturerOverview;
