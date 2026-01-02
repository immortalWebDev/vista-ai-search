function PhotoGrid({ photos }) {
  return (
    <div className="max-w mx-auto ">
      {photos.map((item) => (
        <a
          key={item.id}
          href={item.largeImageURL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-60 border border-zinc-300">
            <div className=" rounded-lg mb-3">
              <img
                src={item.webformatURL}
                alt={item.tags}
                className="w-full h-full object-cover"
                loading="lazy"
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
