import React from 'react'

const FullLinks = ({links}) => {
  return (
    <div class="flex px-4 gap-8 h-screen w-screen">
      {links?.map((item, index) => (
        <div className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100" key={index}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default FullLinks