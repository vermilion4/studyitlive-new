import React, { useState } from 'react'
import LecLayout from "../../shared/LecLayout";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { getUserToken } from '../../utilities/helper';

const LecturerSearch = () => {
    const userToken = getUserToken()
    const [state, setState] = useState({
        query: "",
        filter: ""
    })

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const postQuery = () => {
        alert("Query Posted")
    }
    return (
        <LecLayout>
            <Row>
                <Col>
                    <Card style={{ height: "98%" }}>
                        <Card.Header style={{ border: "none", backgroundColor: "inherit" }}>
                            <Form className="pt-3">
                                <Row>
                                    <Col lg={8}>

                                        <Form.Control type="text" style={{ backgroundColor: "#EDFCFF" }} name='query' value={state.query} onChange={handleChange} />

                                    </Col>
                                    <Col lg={2}>

                                        <Form.Control as="select" name="filter" className="lato-700" value={state.filter} onChange={handleChange}>
                                            <option>Filter By ...</option>
                                            <option>Video</option>
                                            <option>Material</option>
                                            <option>Student</option>
                                        </Form.Control>

                                    </Col>
                                    <Col lg={2}>
                                        <Button type="submit" className="lato-700 text-white" variant="light" style={{ background: '#2CDCD9' }} onClick={postQuery}>Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </LecLayout>
    )

}

export default LecturerSearch;