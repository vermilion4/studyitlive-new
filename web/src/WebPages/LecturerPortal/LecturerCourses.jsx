import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Modal, Image, Form } from 'react-bootstrap';
import LecLayout from "../../shared/LecLayout";
import * as Icons from 'react-bootstrap-icons'
import { getUserToken } from '../../utilities/helper';
const LecturerCourses = () => {
    const userToken = getUserToken()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <LecLayout>
            <Row style={{ height: "max-content" }}>
                <div className="pb-4 w-100" >
                    <Button className='text-white lato-700' variant="light" style={{ background: '#2CDCD9', float: "right", color: 'white' }}
                        onClick={handleShow}>+ Add New Course</Button>
                </div>
                <Col xs={12} sm={6} md={3} className='pb-3'>
                    <Link to='/lecMaterial' className="course-card-link">
                        <Card className='shadow-sm' style={{ minHeight: "250px" }}>
                            <Card.Body className='pt-3'>
                                <Card.Subtitle className='pb-5'>
                                    <Image src='/images/manAtDesk.jpg' roundedCircle className='course-card-pic' /><br />
                                    <span style={{ fontSize: '12px' }} className='lato-700'>Human Computer Interaction</span>
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Footer style={{ borderTop: 'none', backgroundColor: 'inherit' }}>
                                <Card.Subtitle>
                                    <Icons.Calendar size={14} color={'#35353580'} />&nbsp;
                                    <small style={{ color: '#35353580' }} className='lato-400'>Monday, <span style={{ color: 'orange' }}>08:00 AM</span></small>
                                </Card.Subtitle>
                            </Card.Footer>
                        </Card>
                    </Link>
                </Col>

                <Col xs={12} sm={6} md={3} className='pb-3'>
                    <Link to='/lecMaterial' className="course-card-link">
                        <Card className='shadow-sm' style={{ minHeight: "250px" }}>
                            <Card.Body className='pt-3'>
                                <Card.Subtitle className='pb-5'>
                                    <Image src='/images/manAtDesk.jpg' roundedCircle className='course-card-pic' /><br />
                                    <span style={{ fontSize: '12px' }}>Human Computer Interaction</span>
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Footer style={{ borderTop: 'none', backgroundColor: 'inherit' }}>
                                <Card.Subtitle>
                                    <Icons.Calendar size={14} color={'#35353580'} />&nbsp;
                                    <small style={{ color: '#35353580' }} className='lato-400'>Monday, <span style={{ color: 'orange' }}>08:00 AM</span></small>
                                </Card.Subtitle>
                            </Card.Footer>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={3} className='pb-3'>
                    <Link to='/lecMaterial' className="course-card-link">
                        <Card className='shadow-sm' style={{ minHeight: "250px" }}>
                            <Card.Body className='pt-3'>
                                <Card.Subtitle className='pb-5'>
                                    <Image src='/images/manAtDesk.jpg' roundedCircle className='course-card-pic' /><br />
                                    <span style={{ fontSize: '12px' }}>Human Computer Interaction</span>
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Footer style={{ borderTop: 'none', backgroundColor: 'inherit' }}>
                                <Card.Subtitle>
                                    <Icons.Calendar size={14} color={'#35353580'} />&nbsp;
                                    <small style={{ color: '#35353580' }} className='lato-400'>Monday, <span style={{ color: 'orange' }}>08:00 AM</span></small>
                                </Card.Subtitle>
                            </Card.Footer>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={3} className='pb-3'>
                    <Link to='/lecMaterial' className="course-card-link">
                        <Card className='shadow-sm' style={{ minHeight: "250px" }}>
                            <Card.Body className='pt-3'>
                                <Card.Subtitle className='pb-5'>
                                    <Image src='/images/manAtDesk.jpg' roundedCircle className='course-card-pic' /><br />
                                    <span style={{ fontSize: '12px' }}>Human Computer Interaction</span>
                                </Card.Subtitle>
                            </Card.Body>
                            <Card.Footer style={{ borderTop: 'none', backgroundColor: 'inherit' }}>
                                <Card.Subtitle>
                                    <Icons.Calendar size={14} color={'#35353580'} />&nbsp;
                                    <small style={{ color: '#35353580' }} className='lato-400'>Monday, <span style={{ color: 'orange' }}>08:00 AM</span></small>
                                </Card.Subtitle>
                            </Card.Footer>
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header style={{ borderBottom: 'none' }}>
                    <Modal.Title className='lato-700'>
                        Create New Course
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form>
                        <Form.Group>
                            <Form.Label className='lato-500'>Course Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant="light" className='text-white lato-700' style={{ background: '#1B2C98', width: "100%", color: 'white' }} onClick={handleClose}>Create Course</Button>
                </Modal.Footer>
            </Modal>
        </LecLayout>
    )


}

export default LecturerCourses;