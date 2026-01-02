import { useEffect, useRef, useState } from "react";
import { searchPhotosPix } from "../utils/mediaFetch";
import { handleAI } from "../utils/handleAI";
import SearchBar from "./SearchBar";
import PhotoGrid from "./PhotoGrid";

function Base() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [captions, setCaptions] = useState({});
  const fetchSafeRef = useRef(false);

  const MAX_PAGES = 5; 


  //fetching logic
  useEffect(() => {
    if (!query) return;
    setLoading(true);

    //deduplication avoid logic
    searchPhotosPix(query, page)
      .then((res) => {
        setPhotos((prev) => {
          const seen = new Set(prev.map((p) => p.id));
          const unique = res.filter((p) => !seen.has(p.id));
          return page === 1 ? unique : [...prev, ...unique];
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        fetchSafeRef.current = false;
        setLoading(false);
      });
  }, [query, page]);

  //infinite scroll logic
  useEffect(() => {
    const onScroll = () => {
      if (fetchSafeRef.current || loading) return;

      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 250;

      if (nearBottom && page < MAX_PAGES) {
        fetchSafeRef.current = true;
        setPage((p) => p + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, page]);

  if (error) return <h1 className="text-center text-red-500">{error}</h1>;

  return (
    <div className="min-h-screen bg-zinc-100 p-9">
      <SearchBar input={input} setInput={setInput} onSearch={debouncedSearch} />

      <PhotoGrid photos={photos} captions={captions} />

      {photos.length > 0 && page <= 2 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-8 py-3 rounded-full border border-zinc-400 bg-white hover:bg-zinc-200 transition"
          >
            Load More
          </button>
        </div>
      )}

      {loading && (
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="animate-spin h-5 w-5 border-2 border-zinc-400 border-t-transparent rounded-full"></span>
            Loading more images…
          </div>
        </div>
      )}

      {(page >= MAX_PAGES || photos.length >= 11 ) && (
        <div className="text-center mt-10 text-zinc-500">
          — You’ve reached the end (API limit) —
          <footer className="mt-2">
            Created by{" "}
            <a
              href="https://web-portfolio-piyush.vercel.app/"
              className="text-2xl text-orange-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Piyush
            </a>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Base;
