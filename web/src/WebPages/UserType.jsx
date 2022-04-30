import "../shared/FormCarousel"
import { Row, Col, Image, Container, Card } from "react-bootstrap"
import FormCarousel from "../shared/FormCarousel";
const UserType = () => {
    return (
        <Row>
            <Col xs={12} lg={6} className="hide-carousel">
                <FormCarousel />
            </Col>
            <Col xs={12} lg={6}>
                <Image src="images/StudyItLiveLogo.webp" style={{ height: "106px" }} className="user-type-logo"/>
                <Container className="mx-auto py-3 w-75 pt-2 user-grid">
                    <h2 className="pt-4 pb-2 lato-700 hide-title-sm">Lets Get Started</h2>
                    <h5 className="lato-700 pb-4 hide-title-sm">How Best Do We Identify You?</h5>
                    <a href="/signup"><Card style={{ borderColor: "#1B2C98" }}>
                        <Card.Body className="user-type">
                            <div className='d-flex icon-text-spacer'>
                                <div className="register-logo  pr-2">
                                    <i class="bi bi-mortarboard" style={{ fontSize: "35px", color: "#1B2C98" }}></i>
                                </div>
                                <div className="d-flex flex-column align-items-start lato-700">
                                    <span style={{ color: "#1B2C98" }}>Lecturer</span>
                                    <small className="text-muted">Sign up here if you are a lecturer</small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </a>
                    <br />
                    <a href="/signup">
                        <Card style={{ borderColor: "#1B2C98" }}>
                            <Card.Body className="user-type">
                                <div className='d-flex icon-text-spacer'>
                                    <div className="register-logo pr-2">
                                        <i class="bi bi-mortarboard" style={{ fontSize: "35px", color: "#1B2C98" }}></i>
                                    </div>
                                    <div className="d-flex flex-column align-items-start lato-700">
                                        <span style={{ color: "#1B2C98" }}>Student</span>
                                        <small className="text-muted">Sign up here if you are a student </small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </a>
                </Container>
            </Col>
        </Row>
    )
}

export default UserType;