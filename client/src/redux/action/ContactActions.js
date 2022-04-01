import { GETCONTACT, GETCONTACTS } from "../actiontype/ContactTypes";
import axios from "axios";

export const getcontacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contact/");
    dispatch({ type: GETCONTACTS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addcontacts = (newcontact) => async (dispatch) => {
  try {
    await axios.post("/api/contact/", newcontact);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const deletecontact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const editcontacts = (id, updatecontact) => async (dispatch) => {
  try {
    console.log(updatecontact);
    await axios.put(`/api/contact/${id}`, updatecontact);
    dispatch(getcontacts());
  } catch (error) {
    console.log(error);
  }
};

export const getcontact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/contact/${id}`);
    console.log(res.data);
    dispatch({ type: GETCONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
