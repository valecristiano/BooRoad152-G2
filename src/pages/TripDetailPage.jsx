import { useParams } from "react-router-dom";
import { useState } from "react";
import trips from "../data/trips";
import members from "../data/members";
import SearchBar from "../components/SearchBar";

export default function TripMembersPage() {
  const { id } = useParams();

  const trip = trips.find((trip) => trip.id === parseInt(id, 10));

  const [searchBar, setSearchBar] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const filteredMembers = members.filter((member) => {
    const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
    return fullName.includes(searchBar.toLowerCase());
  });

  if (!trip) {
    return (
      <div className="container mt-4">
        <h2>Viaggio non trovato</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row g-4">
        <section className="col-4 d-flex align-items-center">
          <div
            className="card p-3 w-100 d-flex flex-column justify-content-around"
            id="trip-info"
          >
            <h2 className="h1 mb-1 fw-bolder">
              <em> {trip.destination}</em>
            </h2>
            <div className="fs-5 mb-1">
              <em>
                <span className="fw-semibold">Starting: </span>
                {`${trip.start_date}`}
              </em>
            </div>
            <div className="fs-5 mb-1">
              <em>
                <span className="fw-semibold">Ending: </span>
                {`${trip.end_date}`}
              </em>
            </div>
          </div>
        </section>

        <div className="col-8">
          <div className="poster-container">
            <img
              className="img-fluid"
              src={trip.image}
              alt={trip.destination}
              id="trip-img"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3>Members List</h3>
        <div style={{ width: "300px" }}>
          <SearchBar onSearch={setSearchBar} />
        </div>
      </div>

      <ul className="list-group shadow-sm mt-3" id="customers-list">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <li
              id="customer-list-item"
              key={member.id}
              className="list-group-item d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedMember(member)}
            >
              <span>
                <i className="bi bi-person-circle me-2"></i>
                {member.first_name} {member.last_name}
              </span>

              <button
                className="btn btn-sm btn-outline-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}
              >
                Dettaglio
              </button>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted fst-italic">
            "{searchBar}" non c'è nella lista!
          </li>
        )}
      </ul>

      {selectedMember && (
        <>
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
            style={{ zIndex: 1040 }}
            onClick={() => setSelectedMember(null)}
          ></div>

          <div
            className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow"
            style={{ zIndex: 1050, minWidth: "320px", maxWidth: "90%" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="m-0">Dettaglio Passeggero</h4>
              <button
                className="btn-close"
                onClick={() => setSelectedMember(null)}
              ></button>
            </div>

            <p>
              <strong>Nome:</strong> {selectedMember.first_name}
            </p>
            <p>
              <strong>Cognome:</strong> {selectedMember.last_name}
            </p>
            <p>
              <strong>Codice Fiscale:</strong> {selectedMember.tax_code}
            </p>
            <p>
              <strong>Telefono:</strong> {selectedMember.phone}
            </p>
            <p>
              <strong>E-mail:</strong> {selectedMember.email}
            </p>

            <div className="text-end mt-3">
              <button
                className="btn btn-secondary"
                onClick={() => setSelectedMember(null)}
              >
                Chiudi
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
