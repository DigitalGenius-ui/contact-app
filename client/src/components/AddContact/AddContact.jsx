import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addContact } from "../../fetchData/contact";

const AddContact = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    birth: "",
    image: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(addContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(contact);
    navigate(-1);
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
            shadow-md shadow-gray-400">
          <h1 className="text-center text-xl font-medium">Add new Contact</h1>
          <input
            required
            className="input"
            type="text"
            name="fullName"
            onChange={handleChange}
            placeholder="Full Name..."
          />
          <input
            required
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email..."
          />
          <input
            required
            className="input"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number..."
          />
          <input
            required
            className="input cursor-pointer"
            type="date"
            name="birth"
            onChange={handleChange}
            placeholder="Phone Number..."
          />
          <input
            type="file"
            onChange={(e) =>
              setContact({ ...contact, image: e.target.files[0] })
            }
          />
          <button className="button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
