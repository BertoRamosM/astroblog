
import Links from "../Navbar/navbarComponents/Links.jsx"
import Icons from "../Navbar/navbarComponents/Icons.jsx"



const Footer = ({links}) => {
  return (
    <div class="bottom-0 backdrop-blur-lg w-full text-zinc-100 h-36 flex items-center justify-around border-t border-gray-800">
      <div class="w-1/2 flex flex-col gap-4">
        <div class="flex items-center align-center gap-4">
          <img
            src="/images/logoPerso.png"
            alt="perso logo"
            class="rounded-full size-8 sm:size-14"
          />
          <h1 class="font-bold sm:text-2xl hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100">
            Berto<span class="font-light">Blog</span>
          </h1>
        </div>
        <p>Powered by coffee, code, and occasional memes.</p>
      </div>
      <div class="flex items-center gap-6 flex-col">
        <Links links={links} />
        <Icons />
      </div>
    </div>
  );
}

export default Footer
