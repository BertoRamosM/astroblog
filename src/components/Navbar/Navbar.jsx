
import Icons from "./navbarComponents/Icons";
import Links from "./navbarComponents/Links";
import MainLogo from "../Logo/MainLogo.astro";
import Burger from "../../icons/BurgerIcon"
import BurgerIcon from "../../icons/BurgerIcon";


import React, { useState } from 'react'
import FullLinks from "./navbarComponents/FullLinks";

const Navbar = ({links}) => {

  const [isOpen, setIsOpen] = useState(false)
  
    const handleOpen = () => {
      setIsOpen((prev) => !prev);
    };
  return (
    <nav className="backdrop-blur-lg w-full text-zinc-100 h-20 flex items-center justify-between gradient-mask-b-0 border-none">
      <div className="hidden sm:block">
        <Icons />
      </div>
      <h1 className="font-bold text-2xl hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100 px-4 z-50">
        Berto<span className="font-light">Blog</span>
      </h1>

      <div
        className="fixed sm:hidden right-0 px-4 z-50 hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100"
        onClick={handleOpen}
      >
        <BurgerIcon />
      </div>

      {isOpen && (
        <div className="block sm:hidden">
          <FullLinks links={links} />
        </div>
      )}

      <div className="hidden sm:block">
        <Links links={links} />
      </div>
    </nav>
  );
}

export default Navbar


  



