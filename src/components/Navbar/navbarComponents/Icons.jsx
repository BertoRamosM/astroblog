
import PortfolioIcon from "../../../icons/PortfolioIcon.jsx";
import LinkedinIcon from "../../../icons/LinkedinIcon.jsx";
import GithubIcon from "../../../icons/GithubIcon.jsx";

const icons = [
  { component: PortfolioIcon, alt: "Portfolio" },
  { component: LinkedinIcon, alt: "LinkedIn" },
  { component: GithubIcon, alt: "GitHub" },
];


import React from 'react'

const Icons = () => {
  return (
    <div className="flex px-4 gap-8">
      {icons.map(({ component: Icon }, index) => (
        <div
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100"
          key={index}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
}

export default Icons


