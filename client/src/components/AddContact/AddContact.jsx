import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addContact, updateContacts } from "../../fetchData/fetchContact";
import { ContactContext } from "../../context/Context";

const AddContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    birth: "",
    image: "",
  });
  const { update, setUpdate } = ContactContext();

  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(addContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });

  const { mutate: updateContact } = useMutation(updateContacts, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });

  useEffect(() => {
    if (update) {
      setContact({
        ...contact,
        fullName: update.fullName,
        phoneNumber: update.phoneNumber,
        email: update.email,
        birth: update.birth.split("T")[0],
        image: update.image,
        _id: update._id,
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!update) {
      mutate(contact);
      navigate(-1);
    } else {
      updateContact(contact);
      navigate(-1);
      setUpdate(null);
    }
  };

  if (isLoading) return "Loading...";
  if (isError) return "something went wrong...";

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[2rem] left-[4rem] button px-5 text-sm">
        Go Back
      </button>
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md
            shadow-md shadow-gray-400 m-5 lg:m-0">
          <h1 className="text-center text-xl font-medium">
            {update ? "Update Contact" : "Add new Contact"}
          </h1>
          <input
            required
            className="input"
            type="text"
            value={contact.fullName}
            onChange={(e) =>
              setContact({ ...contact, fullName: e.target.value })
            }
            placeholder="Full Name..."
          />
          <input
            required
            className="input"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            placeholder="Email..."
          />
          <input
            required
            className="input"
            type="text"
            value={contact.phoneNumber}
            onChange={(e) =>
              setContact({ ...contact, phoneNumber: e.target.value })
            }
            placeholder="Phone Number..."
          />
          <input
            required={!update && true}
            className="input cursor-pointer"
            type="date"
            value={contact.birth}
            onChange={(e) => setContact({ ...contact, birth: e.target.value })}
          />
          <input
            type="file"
            onChange={(e) =>
              setContact({ ...contact, image: e.target.files[0] })
            }
          />
          <button className="button">{update ? "Update" : "Submit"}</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
