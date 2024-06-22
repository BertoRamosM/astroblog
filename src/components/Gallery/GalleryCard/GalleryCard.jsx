import { useState } from "react";

const GalleryCard = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
   const handleImageLoad = () => {
     setImageLoaded(true);
   };

  return (
    
    <div className="mt-10 pb-4 rounded-xl backdrop-blur-xl text-white border-red-100 border-1 relative overflow-hidden group flex flex-col items-center justify-between">
      
      <a href={`/articles/` + article.data.slug} className="w-full">
        {article.data.image ? (
          <img
            src={article.data.image}
            alt={article.data.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition duration-200 ease-in-out rounded-t-xl "
          />
        ) : (
          <p>Loading ...</p>
        )}
      </a>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          <a
            href={`/${article.slug}`}
            className="group-hover:text-red-500 cursor-pointer transition-all duration-100"
          >
            {article.data.title}
          </a>
        </h2>
        <p className="text-gray-200 text-sm mb-4">
          {new Date(article.data.pubDate).toLocaleDateString()}
        </p>
        <div className="flex gap-4 flex-wrap">
          {article.data.tags.map((tag) => (
            <span className="px-2 py-1 bg-transparent border-2 border-white text-white rounded-full text-xs hover:opacity-90 hover:text-red-300 cursor-pointer  transition-all duration-100 hover:border-red-500">
              <a href={`/articles/tag` + tag}>{tag}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
