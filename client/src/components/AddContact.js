import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { addcontacts } from "../redux/action/ContactActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = () => {
    dispatch(addcontacts({ name, email }));
    navigate("/contacts");
  };

  return (
    <div>
      <Card>
        <Card.Header>Add Contact</Card.Header>
        <Card.Body style={{ width: "20rem", margin: " 5rem auto " }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={nameHandler}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={emailHandler}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddContact;
