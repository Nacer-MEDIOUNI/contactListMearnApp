import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { editcontacts, getcontact } from "../redux/action/ContactActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state) => state.ContactReducer.contact);
  const edit = useSelector((state) => state.ContactReducer.edit);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getcontact(id));
  }, []);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
  }, [contact]);

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editcontacts(id, { name, email }));
    navigate("/contacts");
  };

  return (
    <div>
      <Card>
        <Card.Header>Edit Contact</Card.Header>
        <Card.Body style={{ width: "20rem", margin: " 5rem auto " }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={nameHandler}
                value={name}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={emailHandler}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditContact;
