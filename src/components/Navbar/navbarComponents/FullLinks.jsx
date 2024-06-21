import React from "react";

const FullLinks = ({ links }) => {
  return (
    <div
      className={`flex px-4 gap-8 flex-col justify-center items-center fixed top-0 left-0 h-screen w-screen backdrop-blur-lg z-50 bg-opacity-90 bg-gray-900`}
    >
      {links?.map((item, index) => (
        <a
          href={`${item.link}`}
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100 text-white font-bold text-2xl"
          key={index}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default FullLinks;
