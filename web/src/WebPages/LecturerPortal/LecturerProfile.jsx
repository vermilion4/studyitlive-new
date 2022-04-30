import React, { useState } from 'react'
import LecLayout from "../../shared/LecLayout";
import { Row, Col, Card, Form, Button, Modal } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { getUserToken } from '../../utilities/helper';
;
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const LecturerProfile = () => {
    const userToken = getUserToken()
    const [hover, setHover] = useState(false);
    const hovering = () => setHover(true);
    const notHovering = () => setHover(false);
    const [file, setFiles] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setFiles(null)
        setShow(false)
    };

    return (
        <LecLayout>
            <Row>

                <Col lg={4}>
                    <Card className='shadow-sm'>
                        <Card.Img src='images/manAtDesk.jpg' id="profile-pic" className="m-3" />
                        <Card.Subtitle className="center__text poppins-600">Dr. S.K Adewole</Card.Subtitle>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Text>
                                        <h6 className="center__text poppins-500">
                                            <div className="course-number ">
                                                <span>4</span>
                                            </div><br />
                                            <span>Curses Taken</span>
                                        </h6>
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        <h6 className="center__text poppins-500">
                                            <div className="people-number">
                                                <span>0</span>
                                            </div><br />
                                            <span>Curses Broken</span>
                                        </h6>
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Card.Subtitle className="pt-4 pb-2 poppins-600">Short Bio</Card.Subtitle>
                            <Card.Text className="text-muted lato-500">
                                I love mathematics so much which made me super interested in programming which in turn puts food on my table today.
                            </Card.Text>
                            <Card.Subtitle className="pt-3 pb-2 poppins-500">Settings</Card.Subtitle>
                            <Card.Text className="pb-1 pt-3">
                                <div className="media">
                                    <Icons.PersonFill color="#2CDCD9" size={20} className="align-self-center" />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="media-body">
                                        <span className='text-muted poppins-500'>Profile</span>
                                    </div>

                                </div>
                            </Card.Text>
                            <Card.Text className="pb-1">
                                <div className="media">
                                    <Icons.Gear color="#2CDCD9" size={20} className="align-self-center" />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="media-body">
                                        <span className='text-muted poppins-500'>Account</span>
                                    </div>

                                </div>
                            </Card.Text>
                            <Card.Text className="pb-4">
                                <div className="media">
                                    <Icons.Trash color="#FF0000" size={20} className="align-self-center" />&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="media-body">
                                        <span className='text-muted poppins-500'>Delete Account</span>
                                    </div>

                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card className='shadow-sm'>
                        <Card.Subtitle className='pl-4 pt-4 pb-3 lato-500'>Personal Details</Card.Subtitle>
                        <Card.Header id='profile-header'
                            className='pb-0 pt-0'
                            onMouseEnter={hovering}
                            onMouseLeave={notHovering}
                        >
                            {hover ?
                                (<Card.Img src='images/manAtDesk.jpg' id="profile-pic2" className='shadow-lg' onClick={handleShow} />) :
                                (<Card.Img src='images/manAtDesk.jpg' id="profile-pic2" />)

                            }
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="text-muted poppins-500">Full Name</Form.Label>
                                            <Form.Control type="text" size="lg" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="text-muted poppins-500">Email</Form.Label>
                                            <Form.Control type="text" size="lg" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group>
                                    <Form.Label className="text-muted poppins-500">Bio</Form.Label>
                                    <Form.Control type="textarea" size="lg" style={{ height: "100px" }} />
                                </Form.Group>
                                <Row className='pb-2'>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label className="text-muted poppins-500">Address</Form.Label>
                                            <Form.Control type="text" size="lg" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label className="text-muted poppins-500">Phone No</Form.Label>
                                            <Form.Control type="text" size="lg" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant='light' id="button-color4" className='poppins-700'>Save Profile</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant='light' id="button-color3" className='poppins-500'>Cancel</Button>
                            </Form>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header style={{ borderBottom: 'none' }}>
                    <Modal.Title>
                        Picture Uploader
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className=" upload-outline p-5" >
                    <FilePond
                        files={file}
                        name='file'
                        onupdatefiles={setFiles}
                        allowMultipl={false}
                        server={{
                            process: {
                                url: 'https://studyitlive.herokuapp.com/everest/material/upload-image',
                                headers: {
                                    Authorization: `Bearer ${userToken}`,
                                }
                            }
                        }
                        }
                        labelIdle='Drag & Drop Your Picture Here Or <br /><span class="filepond--label-action text-info">Browse</span>'
                        instantUpload={false}
                        allowFileTypeValidation={true}
                        acceptedFileTypes={['image/*']}
                    />
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant="light" className="text-white" style={{ backgroundColor: "#2CDCD9" }} onClick={handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>

        </LecLayout>
    )
}

export default LecturerProfile;