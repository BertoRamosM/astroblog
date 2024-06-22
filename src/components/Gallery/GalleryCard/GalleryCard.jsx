const GalleryCard = ({ article }) => {
  return (
    <div className="mt-10 pb-4 rounded-xl backdrop-blur-lg text-white border-red-100 border-1">
      <a href={`/${article.slug}`}>
        {article?.data.image ? (
          <img
            src={article.data.image}
            alt={article.data.title}
            className="w-full h-48 object-cover hover:scale-105 transition duration-200 ease-in-out rounded-t-xl"
          />
        ) : (
          <p>Loading ...</p>
        )}
      </a>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">
          <a href={`/${article.slug}`}>{article.data.title}</a>
        </h2>
        <p className="text-gray-200 text-sm mb-4">
          {new Date(article.data.pubDate).toLocaleDateString()}
        </p>
        <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs hover:opacity-90">
          <a href="#">Test</a>
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;
