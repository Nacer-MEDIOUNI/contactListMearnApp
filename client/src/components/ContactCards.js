import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletecontact, getcontacts } from "../redux/action/ContactActions";
const ContactCards = ({ contacts }) => {
  const dispatch = useDispatch();
  useEffect(
    (id) => {
      dispatch(getcontacts(id));
    },
    [dispatch]
  );

  const handleClick = () => {
    dispatch(deletecontact(contacts._id));
  };
  console.log(contacts);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{contacts.name}</Card.Title>
          <Card.Title>{contacts.email}</Card.Title>
          <Button
            style={{ margin: "10px" }}
            as={Link}
            to={`/editContact/${contacts._id}`}
          >
            Edit
          </Button>
          <Button onClick={handleClick}>Delete</Button>
        </Card.Body>
      </Card>
      ;
    </div>
  );
};

export default ContactCards;
