
import PortfolioIcon from "../../../icons/PortfolioIcon.jsx";
import LinkedinIcon from "../../../icons/LinkedinIcon.jsx";
import GithubIcon from "../../../icons/GithubIcon.jsx";

const iconsLink = [
  { component: PortfolioIcon, link: "https://albertoramos.dev/" },
  {
    component: LinkedinIcon,
    link: "https://www.linkedin.com/in/alberto-ramos-munoz-372000105/",
  },
  { component: GithubIcon, link: "https://github.com/BertoRamosM" },
];


const Icons = () => {
  return (
    <div className="flex gap-6">
      {iconsLink.map(({ component: Icon, link }, index) => (
        <a
          href={`${link}`}
          rel="noopener noreferrer"
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100"
          key={index}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Icons


