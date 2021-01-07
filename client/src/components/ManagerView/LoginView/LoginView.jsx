import React, { useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { AuthContext } from '../../../share/context/auth-context';
//import { FacebookIcon, GTranslateIcon } from '@material-ui/icons';
import { Facebook, GTranslate } from '@material-ui/icons';



function LoginView() {
    const auth = useContext(AuthContext);
    return (
        <div className="mt-5 pt-5 pb-5">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={5}>
                        <h1 className="text-center mb-5">Login</h1>
                        <Form>
                            <a className="mb-4 btn btn-primary w-100"
                                href={process.env.REACT_APP_BACKEND_URL + '/auth/facebook'}>
                                <span className="mr-4">
                                    <Facebook />
                                </span>
                                Login with Facebook
                            </a>
                            <a className="btn btn-danger w-100"
                                href={process.env.REACT_APP_BACKEND_URL + '/auth/google'} >
                                    <span className="mr-4">
                                        <GTranslate />
                                    </span>
                                Login with Google
                            </a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginView;