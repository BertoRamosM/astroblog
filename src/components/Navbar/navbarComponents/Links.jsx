
const Links = ({ links}) => {
  return (
    <div className="flex gap-2 sm:gap-8">
      {links?.map((item, index) => (
        <a
          href={item.link}
          rel="noopener noreferrer"
          key={index}
          className="hover:text-red-500 cursor-pointer hover:scale-105 transition-all duration-100"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Links;
