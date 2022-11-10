import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Registration() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default Registration;