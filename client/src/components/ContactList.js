import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../redux/action/ContactActions";
import ContactCards from "./ContactCards";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcontacts());
  }, [dispatch]);

  const data = useSelector((state) => state.ContactReducer.contacts);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "50px",
      }}
    >
      {data.map((contacts) => (
        <ContactCards contacts={contacts} key={contacts._id} />
      ))}
    </div>
  );
};

export default ContactList;
