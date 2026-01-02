import { useEffect, useRef, useState } from "react";
import { searchPhotosPix } from "../utils/mediaFetch";
import { handleAI } from "../utils/handleAI";

function Base() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    searchPhotosPix(query, page)
      .then((res) => {
        setPhotos((prev) => {
          return page === 1 ? unique : [...prev, ...unique];
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        fetchSafeRef.current = false;
        setLoading(false);
      });
  }, [query, page]);

  return (
    <div className="min-h-screen bg-zinc-100 p-9">
      {photos.length >
        0(
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-8 py-3 rounded-full "
            >
              Load More
            </button>
          </div>
        )}
    </div>
  );
}

export default Base;
