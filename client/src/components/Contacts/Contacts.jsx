import React from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllContacts } from "../../fetchData/contact";

const Contacts = () => {
  const navigate = useNavigate();
  const data1 = [
    {
      id: 1,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      birth: "12/14/2000",
    },
  ];

  const { data, isLoading, isError } = useQuery("contact", getAllContacts);

  if(isLoading) return "Loading..."
  if(isError) return "Something went wrong..."

  return (
    <div
      className="w-[80%] mx-auto my-[3rem] border-2 border-blue-100 shadow-md shadow-gray-400
      rounded-lg relative">
      <h1 className="p-6 text-center flex-1 text-2xl font-bold text-gray-700">
        Contact Application
      </h1>

      <button
        onClick={() => navigate("/add")}
        className="button text-sm px-4 absolute top-6 right-6">
        Add Contact
      </button>

      <div className="p-7 flex items-center flex-wrap gap-5 w-[95%] mx-auto">
        {data?.allContacts.map((user, i) => (
          <Contact user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
