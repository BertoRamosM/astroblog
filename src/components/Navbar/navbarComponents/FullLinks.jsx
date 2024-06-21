import React from 'react'

const FullLinks = ({links}) => {
  return (
    <div
      class={`flex px-4 gap-8 flex-col justify-center items-center absolute top-0 left-0 h-screen w-screen backdrop-blur-lg z-40 bg-zinc-900/80`}
    >
      {links?.map((item, index) => (
        <div
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100 text-white font-bold text-2xl"
          key={index}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default FullLinks