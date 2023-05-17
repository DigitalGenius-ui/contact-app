const express = require("express");
const Contact = require("../modules/contact.js");

const route = express.Router();

// get all contact users
route.get("/", async (req, res) => {
  try {
    const allContacts = await Contact.find({});
    res.status(200).json({ status: "SUCCESS", allContacts });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// create a new contact user
route.post("/create", async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(200).json({ status: "SUCCESS", newContact });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// get single contact user
route.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await Contact.findById(id);
    res.status(200).json({ status: "SUCCESS", singleUser });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// update contact user
route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await Contact.findByIdAndUpdate(id, req.body);
    res.status(200).json({ status: "SUCCESS", updatedUser });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

// delete contact user
route.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const removedUser = await Contact.findByIdAndRemove(id);
    res.status(200).json({ status: "SUCCESS", removedUser });
  } catch (error) {
    res.status(500).json({ statue: "FILED", error });
  }
});

module.exports = route;
