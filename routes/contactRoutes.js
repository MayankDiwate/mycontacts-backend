const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const route = express.Router();

const {
  getContacts,
  getContact,
  updateContact,
  createContact,
  deleteContact,
} = require("../controllers/contactController");

route.use(validateToken);
route.route("/").get(getContacts).post(createContact);
route.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = route;
