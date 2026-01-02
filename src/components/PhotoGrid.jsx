function PhotoGrid({ photos, captions }) {
  return (
    <div className="max-w mx-auto flex flex-wrap justify-center gap-6">
      {photos.map((item) => (
        <a
          key={item.id}
          href={item.largeImageURL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-60 border border-zinc-300 rounded-xl p-3 text-center hover:shadow-lg transition">
            <div className="w-full h-72 overflow-hidden rounded-lg mb-3">
              <img
                src={item.webformatURL}
                alt={item.tags}
                className="w-full h-full object-cover"
                loading="lazy"
                title={captions[item.id] || "Generating description..."}
              />
            </div>
            <p className="font-semibold text-zinc-800">By {item.user}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PhotoGrid;
