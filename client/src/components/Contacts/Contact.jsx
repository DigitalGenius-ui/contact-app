import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import moment from "moment";

const Contact = ({ user }) => {
  const { fullName, email, phoneNumber, image, birth } = user;

  const folder = "http://localhost:5000/upload/";

  return (
    <div className="w-[18rem] shadow-md shadow-gray-400 overflow-hidden rounded-lg">
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
        <button className="cursor-pointer text-red-700 hover:opacity-75">
          <BsFillTrashFill />
        </button>
        <button className="text-xl text-blue-600 hover:opacity-75">
          <AiFillEdit />
        </button>
      </div>
    </div>
  );
};

export default Contact;
