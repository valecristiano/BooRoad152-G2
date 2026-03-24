export default function SearchBar({ onSearch }) {
  return (
    <div className="mb-4">
      <div className="input-group shadow-sm">
        <span className="input-group-text bg-white border-end-0">
          <i className="bi bi-search text-secondary"></i>
        </span>
        <input type="text" className="form-control border-start-0 ps-0" placeholder="Cerca partecipante per nome o cognome..." onChange={(e) => onSearch(e.target.value)} />
      </div>
    </div>
  );
}
