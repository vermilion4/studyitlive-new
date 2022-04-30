import React, { useState } from 'react';
import { Row, Col, Card, Tabs, Tab, Image, FormControl, InputGroup, Button } from 'react-bootstrap';
import LecLayout from "../../shared/LecLayout";
import ReactPlayer from 'react-player/lazy'
import * as Icons from 'react-bootstrap-icons'
import { getUserToken } from '../../utilities/helper';
const LecturerVideos = () => {
    const userToken = getUserToken()
    const [videoInfo, setVideoInfo] = useState([])
    const [state, setState] = useState({
        Comment: "",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <LecLayout>
            <Row>
                <Col>
                    <Card>
                        <Card.Header style={{ borderBottom: 'none' }}>
                            <ReactPlayer url='Video1.mp4' controls={true} width='100%' />
                        </Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey="overview" className="mb-3 lato-500" >
                                <Tab eventKey="overview" title="Overview">
                                    <Row style={{ overflowY: 'auto', height: '200px' }}>
                                        <Row >
                                            <Col>
                                                <h5 className="lato-600">Visual Basic Programming</h5>
                                                <p className='text-muted lato-500'>Visual Basic is an object-oriented programming language developed by Microsoft.
                                                    Using Visual Basic makes it fast and easy to create type-safe .NET apps.</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5 className="lato-600">Course Outcomes</h5>
                                                <Row>
                                                    <Col>
                                                        <ul className="lato-500">
                                                            <li className='text-muted'>Define Visual Programming Language</li>
                                                            <li className='text-muted'>Discuss the benefits of Visual Basic</li>
                                                            <li className='text-muted'>Change objects characteristics</li>
                                                        </ul>
                                                    </Col>
                                                    <Col>
                                                        <ul className="lato-500">
                                                            <li className='text-muted'>Build a simple and functional Visual Basic application</li>
                                                            <li className='text-muted'>Add controls to a Form and work with codes</li>
                                                            <li className='text-muted'>Run Visual Basic program</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Row>
                                </Tab>
                                <Tab eventKey="q&a" title="Q&A">
                                    <p>Questions And Answer Section</p>
                                </Tab>
                                <Tab eventKey="notes" title="Notes">
                                    <p>Notes</p>
                                </Tab>
                                <Tab eventKey="comments" title="Comments">
                                    <div style={{ overflow: 'auto', height: '200px' }}>
                                        <div className='media'>
                                            <Image src='images/laptopThinker.webp' alt='Student Thinking On Laptop' className='navbar-pic' roundedCircle />&nbsp; &nbsp;
                                            <div className="media-body">
                                                <Card.Text>
                                                    <span className="lato-500">Owonubi Job</span> <br /><small className="text-muted">Student | 2hrs ago</small>
                                                    <p className="lato-600" style={{ textAlign: 'left' }}>Lorem elit nisi deserunt officia excepteur culpa enim anim veniam tempor labore ullamco sit esse.
                                                        Velit ipsum occaecat consequat eiusmod occaecat laborum culpa esse est ea consequat fugiat officia.</p>
                                                </Card.Text>
                                            </div>
                                        </div>
                                        <div className='media'>
                                            <Image src='images/girlWithBook.jpg' alt='A Girl Holding A Book' className='navbar-pic' roundedCircle />&nbsp; &nbsp;
                                            <div className="media-body">
                                                <Card.Text>
                                                    <span className="lato-500">Tolani Okerinde</span> <br /><small className="text-muted">Student | 3hrs ago</small>
                                                    <p className="lato-600" style={{ textAlign: 'left' }}>Lorem elit nisi deserunt officia excepteur culpa enim anim veniam tempor labore ullamco sit esse.
                                                        Velit ipsum occaecat consequat eiusmod occaecat laborum culpa nisi esse est ea consequat fugiat officia.</p>
                                                </Card.Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <InputGroup>
                                            <FormControl
                                                type="search"
                                                placeholder="Type your message here"
                                                style={{ width: '100%' }}
                                                name='Comment'
                                                value={state.Comment}
                                                onChange={handleChange}
                                            />
                                            <Button variant="outline-light" style={{ backgroundColor: '#e5e5e5' }}>
                                                <Icons.Forward style={{ color: '#35353580' }} />
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </LecLayout >
    )
};

export default LecturerVideos;