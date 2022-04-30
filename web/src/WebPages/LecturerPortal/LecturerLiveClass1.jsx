import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import LecLayout from "../../shared/LecLayout";
import { getUserToken } from '../../utilities/helper';


const LecturerLiveClass1 = () => {
    const userToken = getUserToken()
    const StartCall = () => {
        alert("Call Started")
    }
    return (
        <LecLayout>
            <Card className="shadow-sm">
                <Card.Img src='images/liveClass.png' id="live-class-pic" />
                <Card.ImgOverlay>
                    <Card.Header className="pt-5" style={{ borderBottom: 'none', backgroundColor: 'transparent' }}>
                        <Card.Title className="lato-700">Start Live Class</Card.Title>
                    </Card.Header>
                    <Card.Body className='pb-5 liveclass-content'>
                        <Container className="ml-2 content">
                            <Row className="pt-3">
                                <Col className='mt-3'>
                                    <div className="live-class-border">
                                        <Card.Subtitle className="text-muted pt-2 pl-4 lato-700">Course Title</Card.Subtitle>
                                        <Card.Text className="pt-2 pl-4 lato-500"><h5>Visual Basic Programming</h5></Card.Text>
                                    </div>
                                </Col>
                                <Col className='mt-3'>
                                    <div className="live-class-border">
                                        <Card.Subtitle className="text-muted pt-2 pl-4 lato-700">Lecture</Card.Subtitle>
                                        <Card.Text className="pt-2 pl-4 lato-500"><h5>7</h5></Card.Text>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="pt-5">
                                <Col>
                                    <div className="live-class-border">
                                        <Card.Subtitle className="text-muted pt-2 pl-4 lato-700">Description</Card.Subtitle>
                                        <Card.Text className="pt-3 pl-4 lato-500">
                                            <h5>
                                                Visual Basic is an object-oriented programming language developed
                                                by Microsoft. Using Visual Basic makes it fast and easy to create
                                                type-safe .NET apps.
                                            </h5>
                                        </Card.Text>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="pt-4 pb-2">
                                    <Button variant='outline-light' id='signup-button' style={{ width: 'max(110px, 13%)' }} onClick={StartCall}>Start</Button>
                                </div>
                            </Row>

                        </Container>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </LecLayout>
    )
}

export default LecturerLiveClass1;