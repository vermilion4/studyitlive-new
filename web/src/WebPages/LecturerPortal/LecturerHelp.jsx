import React from 'react'
import LecLayout from "../../shared/LecLayout";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import { getUserToken } from '../../utilities/helper';
const LecturerHelp = () => {
    const userToken = getUserToken()
    return (
        <LecLayout>
            <Row>
                <Col lg={8}>

                </Col>
                <Col lg={4}>
                    <Card>
                        <Card.Header>

                        </Card.Header>
                        <Card.Body>
                            <Accordion>
                                <Accordion.Item>
                                    <Accordion.Header>
                                        Hello
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        Hello
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </LecLayout>

    )
}

export default LecturerHelp;