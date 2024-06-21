import React from "react";

const Links = ({ links}) => {
  return (
    <div className="flex gap-8">
      {links?.map((item, index) => (
        <div
          key={index}
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Links;
