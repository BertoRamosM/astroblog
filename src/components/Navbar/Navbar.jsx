import Icons from "./navbarComponents/Icons";
import Links from "./navbarComponents/Links";
import BurgerIcon from "../../icons/BurgerIcon";
import React, { useState } from "react";
import FullLinks from "./navbarComponents/FullLinks";

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="backdrop-blur-lg w-full text-zinc-100 h-20 flex items-center justify-around gradient-mask-b-0 border-none relative z-30">
      <div className="hidden sm:block">
        <Icons />
      </div>
      <a
        href="/"
        className="font-bold text-2xl hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100 px-4 z-[100]"
      >
        Berto<span className="font-light">Blog</span>
      </a>

      <div
        className="fixed sm:hidden right-0 px-4 z-[100] hover:text-red-500 cursor-pointer  transition-all duration-100"
        onClick={handleOpen}
      >
        <BurgerIcon />
      </div>

      {isOpen && <FullLinks links={links} />}

      <div className="hidden sm:block">
        <Links links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
