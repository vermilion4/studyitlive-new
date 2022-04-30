import React, { useState } from 'react';
import { ListGroup, Card, Button, Modal, Dropdown } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import LecLayout from '../../shared/LecLayout';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import { getUserToken } from '../../utilities/helper';
registerPlugin(FilePondPluginFileValidateType);
const LecturerMaterials = (props) => {
  const userToken = getUserToken();
  const [materialsList, setMaterialsList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  const [files, setFiles] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setFiles(null);
    setShow(false);
  };
  const Delete = () => {
    alert('Deleted');
  };

  const Open = () => {
    alert('Opened');
  };

  return (
    <LecLayout>
      <Card>
        <Button
          className=' ml-auto text-white m-3 lato-700'
          variant='light'
          style={{ width: 'max(100px, 13%)', background: '#2CDCD9' }}
          onClick={handleShow}
        >
          Upload
        </Button>
        <Card.Body className='pb-5'>
          {materialsList ? (
            materialsList.map((materialsList) => (
              <ListGroup variant='flush'>
                <ListGroup.Item className='p-3'>
                  <div className='media'>
                    <div className='media-title'>
                      <div className='material-logo'>
                        <Icons.FileEarmarkText
                          color='rgba(53, 53, 53, 0.5)'
                          size={30}
                        />
                      </div>
                      &nbsp;&nbsp;
                      <div className='media-body'>
                        <span className='lato-400'>
                          Unit 1<br />
                          <span
                            style={{ fontWeight: 'bold' }}
                            className='poppins-500'
                          >
                            QBasic Basic commands
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className='ml-auto show-lg'>
                      <Icons.EyeFill
                        size={30}
                        color='rgba(53, 53, 53, 0.5)'
                        onClick={Open}
                      />
                      &nbsp;&nbsp;&nbsp;
                      <Icons.Trash
                        size={30}
                        color='rgba(53, 53, 53, 0.5)'
                        onClick={Delete}
                      />
                    </div>
                      <Dropdown className='show-sm'>
                        <Dropdown.Toggle
                          variant='secondary'
                          id='dropdown-basic'
                        ></Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href='#/action-1' >
                            <Icons.EyeFill
                              size={30}
                              color='rgba(53, 53, 53, 0.5)'
                              onClick={Open}
                            />&nbsp;&nbsp;&nbsp;Expand
                          </Dropdown.Item>
                          <Dropdown.Item href='#/action-2' >
                            <Icons.Trash
                              size={30}
                              color='rgba(53, 53, 53, 0.5)'
                              onClick={Delete}
                            />&nbsp;&nbsp;&nbsp;Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <hr className='material-class' />
                </ListGroup.Item>
              </ListGroup>
            ))
          ) : (
            <>
              <Card.Img
                src='images/UploadLogo.png'
                className='material-upload-logo'
                style={{ opacity: '20%', width: '50%' }}
              />
              <Card.Text className='center__text text-muted lato-700'>
                Sorry, there is no content here at the moment.
                <br />
                Click on the Add button to upload
                <br />
                materials
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size='md' centered>
        <Modal.Header style={{ borderBottom: 'none' }}>
          <Modal.Title>Document Uploader</Modal.Title>
        </Modal.Header>
        <Modal.Body className=' upload-outline p-5'>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            server='/'
            labelIdle='Drag & Drop Your Document Here Or <br/><span class="filepond--label-action text-info">Browse</span>'
            instantUpload={false}
            allowFileTypeValidation={true}
            acceptedFileTypes={['application/*']}
          />
        </Modal.Body>
        <Modal.Footer style={{ borderTop: 'none' }}>
          <Button
            variant='light'
            className='text-white'
            style={{ backgroundColor: '#2CDCD9' }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </LecLayout>
  );
};

export default LecturerMaterials;
