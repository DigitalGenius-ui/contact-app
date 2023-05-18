import React, { useEffect } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import moment from "moment";
import { useMutation, useQueryClient } from "react-query";
import { removeContact } from "../../fetchData/fetchContact";
import { ContactContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Contact = ({ user }) => {
  const { fullName, email, phoneNumber, image, birth, _id } = user;
  const { setUpdate } = ContactContext();
  const navigate = useNavigate();

  const folder = import.meta.env.VITE_REACT_FOLDER;

  // remove contact details
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(
    ["contact", _id],
    removeContact,
    {
      onSuccess: () => queryClient.invalidateQueries("contact"),
    }
  );

  const handleUpdate = () => {
    setUpdate(user);
    navigate("/add");
  };

  return (
    <div className="w-[17rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
      {isError && "Something went wrong..."}
      <img
        className="w-full h-[12rem] object-cover"
        src={image && folder + image}
        alt="contactImg"
      />
      <div className="p-3 text-sm flex flex-col gap-1">
        <p className="text-sm">Full Name : {fullName}</p>
        <p>Email : {email}</p>
        <p>Phone : {phoneNumber}</p>
        <p>Date of Birth : {moment(birth).format("l")}</p>
      </div>

      <div className="p-3 flex items-center justify-end gap-2">
        <button
          onClick={() => mutate(_id)}
          className={`cursor-pointer text-red-700 hover:opacity-75 ${
            isLoading && "opacity-20"
          }`}>
          <BsFillTrashFill />
        </button>
        <button
          onClick={handleUpdate}
          className="text-xl text-blue-600 hover:opacity-75">
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default Contact;
