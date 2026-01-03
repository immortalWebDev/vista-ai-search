function PhotoGrid({ photos, captions }) {
  return (
    <div className="max-w mx-auto flex flex-wrap justify-center gap-6">
      {photos.map((item) => (
        <div
          key={item.id}
          className="w-60 border border-zinc-300 rounded-xl p-3 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
        >
          <a href={item.largeImageURL} target="_blank" rel="noreferrer">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-3">
              <img
                src={item.webformatURL}
                alt={item.tags}
                loading="lazy"
                title={captions[item.id] || "Generating caption..."}
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <p className="mt-3 px-3 py-2 text-xs text-zinc-700 bg-zinc-100 rounded-lg select-text cursor-text leading-relaxed shadow-inner">
            {captions[item.id] || "Generating caption..."}
          </p>

          <p className="mt-2 font-semibold text-zinc-800">By {item.user}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;
