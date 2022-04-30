import React, { useState } from 'react';
import { Row, Col, Card, Image, ListGroup, FormControl, Button, InputGroup, Container, ListGroupItem, Modal } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import LecLayout from "../../shared/LecLayout";
import { getUserToken } from '../../utilities/helper';
const LecturerStudentList = () => {
    const userToken = getUserToken();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
    const [state, setState] = useState({
        SearchStudent: ""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const [studentData, setStudentData] = useState([])
    const remove = () => {
        alert('removed')
        setShow(false)
    }
    return (
        <LecLayout>
            <Card className="shadow-sm">
                <Row>
                    <Col>
                        <Card.Title className="pt-5 pl-4 lato-700" style={{ backgroundColor: 'white', borderBottom: 'none' }}>Student List</Card.Title>
                    </Col>
                    <Col>
                        <Card.Body>
                            <InputGroup className='pt-4 ml-auto' style={{ width: 'max(120px, 50%)' }}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    style={{ border: 'none', backgroundColor: '#e5e5e5', paddingLeft: "5px" }}
                                    name='SearchQuery'
                                    value={state.SearchStudent}
                                    onChange={handleChange}
                                />
                                <Button variant="outline-light" style={{ backgroundColor: '#e5e5e5', border: 'none' }}>
                                    <Icons.Search style={{ color: '#35353580' }} />
                                </Button>
                            </InputGroup>
                        </Card.Body>
                    </Col>
                </Row>

                <Card.Body className="pt-4">
                    <Container>
                        <Row>
                            <Col><Card.Subtitle className="lato-700">Student</Card.Subtitle></Col>
                            <Col style={{ textAlign: 'center' }}><Card.Subtitle className="lato-700">Enrolled Date</Card.Subtitle></Col>
                            <Col style={{ textAlign: 'end' }}><Card.Subtitle className='pr-2 lato-700'>Action</Card.Subtitle></Col>
                        </Row>
                        <Row className="pt-2">
                            <Col>
                                <ListGroup>
                                    <ListGroupItem className='p-2 m-0'>
                                        <Row>
                                            <Col className='media pl-3'>
                                                <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic hide-title-sm' roundedCircle />&nbsp;&nbsp;
                                                <Card.Text className="media-body pt-1">
                                                    <small>Muhammmed Farouk</small>
                                                </Card.Text>
                                            </Col>
                                            <Col style={{ textAlign: 'center' }}>
                                                <Card.Text className="lato-600">
                                                    <small>24th July, 2021</small>
                                                </Card.Text>
                                            </Col>
                                            <Col style={{ textAlign: 'end' }}>
                                                <Card.Text onClick={handleShow}>
                                                    <Icons.Trash color='#FF4747' size={30} />
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                </ListGroup>

                            </Col>
                        </Row>
                    </Container>
                </Card.Body>

            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Body className="p-5" >
                    <h5 className='text-center lato-500'>Are You Sure You Want To Delete This Student?</h5>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant='danger' onClick={remove} style={{ width: "100%" }}>Delete</Button>
                </Modal.Footer>
            </Modal>

        </LecLayout>
    );
};

export default LecturerStudentList;