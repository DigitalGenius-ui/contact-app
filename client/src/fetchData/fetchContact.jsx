import axios from "axios";

const baseURL = "http://localhost:5000";

// add a new contact
export const addContact = async (data) => {
  if (data.image) {
    const form = new FormData();
    const name = Date.now() + data.image.name;
    form.append("name", name);
    form.append("file", data.image);
    data.image = name;

    try {
      await axios.post(`${baseURL}/api/upload`, form);
    } catch (error) {
      throw Error(error);
    }
  }
  try {
    const res = await axios.post(`${baseURL}/api/contact/create`, data);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

// get all contacts
export const getAllContacts = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/contact`);
    return res.data;
  } catch (error) {
    throw Error(error);
  }
};

// remove contact details
export const removeContact = async (id) => {
  try {
    await axios.delete(`${baseURL}/api/contact/delete/${id}`);
  } catch (error) {
    throw Error(error);
  }
};

// update contact
export const updateContacts = async (data) => {
  try {
    await axios.put(`${baseURL}/api/contact/update/${data._id}`, data);
  } catch (error) {
    throw Error(error);
  }
};
