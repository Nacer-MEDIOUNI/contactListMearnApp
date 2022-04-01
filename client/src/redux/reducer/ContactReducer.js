import { GETCONTACTS, GETCONTACT } from "../actiontype/ContactTypes";

const initialState = {
  contacts: [],
  contact: {},
  edit: false,
};
const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCONTACTS:
      return { ...state, contacts: action.payload.contacts };
    case GETCONTACT:
      return { ...state, contact: action.payload.onecontact };
    default:
      return state;
  }
};
export default ContactReducer;
