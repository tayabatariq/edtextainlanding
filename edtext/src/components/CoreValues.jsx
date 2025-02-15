import React from "react";
import { FaBookOpen, FaUsers, FaHandshake, FaNetworkWired } from "react-icons/fa";

const values = [
  {
    icon: <FaBookOpen className="text-3xl text-gray-700" />, 
    title: "Embracing Outcomes", 
    bgColor: "bg-blue-100"
  },
  {
    icon: <FaUsers className="text-3xl text-gray-700" />, 
    title: "Strengthening Communities", 
    bgColor: "bg-yellow-100"
  },
  {
    icon: <FaHandshake className="text-3xl text-gray-700" />, 
    title: "Celebrating Diversity", 
    bgColor: "bg-indigo-100"
  },
  {
    icon: <FaNetworkWired className="text-3xl text-gray-700" />, 
    title: "Building Connections", 
    bgColor: "bg-teal-100"
  }
];

const CoreValues = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {values.map((value, index) => (
          <div key={index} className={`relative ${value.bgColor} p-6 rounded-lg shadow-lg w-64 text-center`}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
              {value.icon}
            </div>
            <p className="mt-10 font-semibold text-gray-800">{value.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
