import React, { useState } from "react"
import { Form, Button, Container, Alert, Card, Image } from "react-bootstrap"

const NewPassword = () => {
    const [changeDisplay, setChangeDisplay] = useState(true);
    const [error, setError] = useState('');
    const [state, setState] = useState({
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const reset = () => {
        if (state.newPassword !== state.confirmNewPassword) {
            setError('Passwords Do Not Match')

        } else if (state.newPassword.length === 0 && state.confirmNewPassword.length === 0) {
            setError('Passwords Feilds Are Empty')
        }
        else if ((state.newPassword === state.confirmNewPassword) && (state.newPassword.length !== 0 && state.confirmNewPassword.length !== 0)) {
            setChangeDisplay(false);
        }
    }
    return (
        <>
            <img src="images/ellipse-green.png" alt="ellipse" className="ellipse-green hide-title-sm" />
            <Container className='newpassword-reset-grid mx-auto w-75'>
            <div className="mx-auto pb-2">
          <img
                    src='images/sil-logo.png'
                    alt='mid section background'
                    className=''
                  /></div>
                {changeDisplay ? (
                    <div className="">
                        <h4 className="text-center lato-700">Reset Password</h4>
                        <p className="text-center text-muted lato-500">Kindly Fill In Your New Password Details</p>
                        <Card className="shadow mt-4">
                            <Card.Body>
                                <Form className="reset-width">
                                    {error && <Alert key={'error' + error} variant='danger'>{error}</Alert>}
                                    <Form.Group>
                                        <Form.Label className="text-muted lato-500">New Password</Form.Label>
                                        <Form.Control type="password" id="form-control-style" name="newPassword" value={state.newPassword} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label className="text-muted lato-500">Confirm Password</Form.Label>
                                        <Form.Control type="password" id="form-control-style" name="confirmNewPassword" value={state.confirmNewPassword} onChange={handleChange} />
                                    </Form.Group>
                                    <Button variant='outline-light' id='signup-button' size='lg' className="lato-700" style={{ width: '100%' }} onClick={reset}>Reset Password</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>) : (<>
                        <h4 className="text-center pb-4 lato-700">Reset Password</h4>
                        <p className=" text-muted pb-2 lato-500">Password Reset Successfull. Press The Button Below And Enter Your Login Details</p>
                        <Button variant='outline-light' id='signup-button' size='lg' href='/login' className='lato-700' style={{ width: '100%' }}>Back To Login</Button>
                    </>
                )}
            </Container>
        </>
    )
}

export default NewPassword;