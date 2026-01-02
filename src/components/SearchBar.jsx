function SearchBar({ input, setInput, onSearch }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 mb-2">
        website name...
      </h1>

      <p className="mb-6">caption</p>

      <div className="flex items-center gap-3 bg-white rounded-2xl shadow-lg px-4 py-3 ring-1 ring-zinc-200 focus-within:ring-2 focus-within:ring-black transition">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onSearch(e.target.value);
          }}
          className="flex-1 bg-transparent"
        />
      </div>
    </div>
  );
}

export default SearchBar;
