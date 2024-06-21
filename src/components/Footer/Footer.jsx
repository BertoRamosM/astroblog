
import Links from "../Navbar/navbarComponents/Links.jsx"
import Icons from "../Navbar/navbarComponents/Icons.jsx"



const Footer = ({ links, iconsLink }) => {
  return (
    <div className="bottom-0 backdrop-blur-lg w-full text-zinc-100 h-36 flex items-center justify-around gradient-mask-t-0 border-none max-w-full">
      <div className="w-1/2 flex flex-col gap-8 pl-4">
        <div className="flex items-center align-center gap-4">
          <img
            src="/images/logoPerso.png"
            alt="perso logo"
            className="rounded-full size-8 sm:size-14"
          />
          <h1 className="font-bold sm:text-2xl hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100">
            Berto<span class="font-light">Blog</span>
          </h1>
        </div>
        <p className="text-xs sm:text-lg">Powered by coffee, code and memes.</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-6 flex-col text-xs sm:text-sm">
        <Links links={links} />
        <Icons/>
      </div>
    </div>
  );
};

export default Footer
