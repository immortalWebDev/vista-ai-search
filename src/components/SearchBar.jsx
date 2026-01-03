function SearchBar({ input, setInput, onSearch }) {
  return (
    <div className="max-w-2xl mx-auto mb-10 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 mb-2">
        <span className="text-amber-800">Spectra</span> - Your{" "}
        <span className="text-amber-500">AI</span> image buddy
      </h1>

      <p className="text-zinc-500 mb-6">
        Search high-quality visuals curated from across the web — enhanced with
        AI captions.
      </p>

      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3 ring-1 ring-zinc-200 focus-within:ring-2 focus-within:ring-black transition">
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.3-4.3m1.3-5A7 7 0 1 1 7 3a7 7 0 0 1 11 11z"
          />
        </svg>

        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder="Search landscapes, people, textures, moods…"
          className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
        />
      </div>

      <p className="text-xs text-zinc-400 mt-3">
         AI captions are generated automatically — you can copy them from below each image.
      </p>
    </div>
  );
}

export default SearchBar;
