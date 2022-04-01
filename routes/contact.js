const express = require("express");
const {
  CreateContact,
  Getcontact,
  Deletecontact,
  Updatecontact,
  GetOneContact,
} = require("../controllers/contactController");

const contactRoutes = express.Router();

contactRoutes.post("/", CreateContact);
contactRoutes.get("/", Getcontact);
contactRoutes.delete("/:id", Deletecontact);
contactRoutes.put("/:id", Updatecontact);
contactRoutes.get("/:id", GetOneContact);

module.exports = contactRoutes;
