const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    birth: {
      type: Date,
    },
  },
  { timeStamps: true, collection: "contact" }
);

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
