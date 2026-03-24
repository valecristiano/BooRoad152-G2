export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <div className="input-group">
        <span className="input-group-text bg-white border-end-0" id="search-logo">
          <i className="bi bi-search text-"></i>
        </span>
        <input
          id="customer-searchbar"
          type="text"
          className="form-control border-start-0 p-1"
          placeholder="Cerca per nome o cognome..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
