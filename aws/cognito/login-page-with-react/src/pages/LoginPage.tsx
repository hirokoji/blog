import React from 'react';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';

export const LoginPage: React.FC = () => {
    return (
        <>
            <Container>
                <Jumbotron>
                    <div>
                        <h3> Login Form</h3>
                    </div>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>username</Form.Label>
                            <Form.Control type='string' placeholder='Enter username' />
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Button variant='primary' type='submit' onClick={(() => alert("hoge"))}>
                           Login 
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>
        </>
    );
};