import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import LecLayout from "../../shared/LecLayout";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata';
import { getUserToken } from '../../utilities/helper';
registerPlugin(FilePondPluginFileMetadata, FilePondPluginFileValidateType);

const LecturerVideo2 = () => {
    const userToken = getUserToken()
    const [videoInfo, setVideoInfo] = useState(true)
    const [file, setFiles] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setState("")
        setFiles(null)
        setShow(false)
    };
    const [state, setState] = useState({
        overview: "",
        courseOutcomes: "",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <LecLayout>
            <Card>
                <Card.Body className="pt-0 pb-5">
                    <Row className='p-1'>
                        <Col>
                            <Card.Title className='pl-4 pt-3 lato-600' as="h4">Tutorial Videos</Card.Title>

                        </Col>
                        <Col style={{ textAlign: 'end' }}>
                            <Button variant="light" className='text-white mt-3' style={{ background: '#2CDCD9' }} onClick={handleShow}>Upload</Button>
                        </Col>
                    </Row>

                    {videoInfo ? (
                        <>
                            <Row>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/bookPen.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">User Experience Design</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Abayomi Daniel</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/computerDesk.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">User Interface Design Analysis</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Figmama</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/ladyData.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Data Analysis using Python</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Olakunle David</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/laptopPaper.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Graphic Design Masterclass</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Figmama</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/ladyLight.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Design Thinking: Unleash Your Creativity</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Onazi Victor</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/laptop.webp' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Product Design: A Design Experience</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Adeniyi Ridwan</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/ladyData.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Data Analysis using Python</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Olakunle David</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to='/lecVideo'>
                                        <Card border="light" id="video-logo-cards" className="pt-3" >
                                            <Card.Img variant='top' src='/images/laptopPaper.jpg' className='rounded' style={{ width: '100%', height: '169px' }} />
                                            <Card.Body className="pl-1">
                                                <Card.Title as="h6" className="video-card-title-color poppins-500">Graphic Design Masterclass</Card.Title>
                                                <div className='media pl-0'>
                                                    <Image src='images/teacherBlackBoard1.webp' alt='Black Board And Teacher' className='student-list-pic' roundedCircle />&nbsp;
                                                    <Card.Subtitle className="media-body pt-2 poppins-500"><small className="text-muted">Figmama</small></Card.Subtitle>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>

                            </Row>
                        </>) : (
                        <>
                            <Card.Img src='images/UploadLogo.png' className='material-upload-logo' style={{ opacity: '20%', width: '50%' }} />
                            <Card.Text className="center__text lato-700">Sorry, there is no content here at the moment.<br />
                                Click on the Add button to upload<br />
                                materials</Card.Text>
                        </>)}
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                centered
            >
                <Modal.Header style={{ borderBottom: 'none' }}>
                    <Modal.Title>
                        Video Uploader
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className=" upload-outline p-5" >
                    <Form.Group className='pb-4'>
                        <Form.Label className="text-muted">Overview</Form.Label>
                        <Form.Control as='textarea' size="lg" name='overview' value={state.overview} onChange={handleChange} placeholder="Optional" id="form-control-style" />
                    </Form.Group>
                    <Form.Group className='pb-4'>
                        <Form.Label className="text-muted">Course Outcomes</Form.Label>
                        <Form.Control as='textarea' size="lg" name='courseOutcomes' value={state.courseOutcomes} onChange={handleChange} placeholder="Optional" id="form-control-style" />
                    </Form.Group>
                    <FilePond
                        files={file}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        server={{
                            process: {
                                url: 'https://studyitlive.herokuapp.com/everest/material/upload-video',
                                headers: {
                                    Authorization: `Bearer ${userToken}`,
                                }
                            }
                        }}
                        name="file"
                        labelIdle='Drag & Drop Your Video Here Or <br/><span class="filepond--label-action text-info">Browse</span>'
                        instantUpload={false}
                        allowFileMetadata={true}
                        fileMetadataObject={state}
                        allowFileTypeValidation={true}
                        acceptedFileTypes={['video/*']}
                    />
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 'none' }}>
                    <Button variant="light" className="text-white" style={{ backgroundColor: "#2CDCD9" }} onClick={handleClose} >Close</Button>
                </Modal.Footer>
            </Modal>

        </LecLayout >
    )
}

export default LecturerVideo2;