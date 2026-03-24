import { useParams } from "react-router-dom";
import { useState } from "react";
import trips from "../data/trips";
import members from "../data/members";
import SearchBar from "../components/SearchBar";
import "../assets/css/members-detail.css";

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
            <h2 className="h1 mb-1 fw-bolder mb-2 fst-italic">
              {trip.destination}
            </h2>
            <div className="fs-5 mb-1 fst-italic">
              <span className="fw-semibold">Starting: </span>
              <span>{`${trip.start_date}`}</span>
            </div>
            <div className="fs-5 mb-1 fst-italic">
              <span className="fw-semibold">Ending: </span>
              <span>{`${trip.end_date}`}</span>
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
            "{searchBar}" non è nella lista!
          </li>
        )}
      </ul>

      {selectedMember && (
        <>
          <div
            className="member-overlay-backdrop"
            onClick={() => setSelectedMember(null)}
          ></div>

          <div className="member-overlay-wrapper">
            <div className="member-overlay-card" id="layover-info">
              <div className="member-overlay-header text-white p-3 d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={selectedMember.avatar || "/img/members/memberM1.jpg"}
                    alt={`${selectedMember.first_name} ${selectedMember.last_name}`}
                    className="rounded-circle border border-3 border-white member-avatar-lg"
                  />

                  <div>
                    <div className="small opacity-75">PASSENGER PROFILE</div>

                    <h5 className="mb-1">
                      {selectedMember.first_name} {selectedMember.last_name}
                    </h5>

                    <div className="small opacity-75">
                      {selectedMember.email}
                    </div>
                  </div>
                </div>

                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedMember(null)}
                ></button>
              </div>

              <div className="member-overlay-scroll p-3">
                <div className="p-3 mb-3 shadow-sm">
                  <div className="text-muted small">Nome</div>
                  <div className="fw-semibold">{selectedMember.first_name}</div>
                </div>

                <div className="p-3 mb-3 shadow-sm">
                  <div className="text-muted small">Cognome</div>
                  <div className="fw-semibold">{selectedMember.last_name}</div>
                </div>

                <div className="p-3 mb-3 shadow-sm">
                  <div className="text-muted small">Codice Fiscale</div>
                  <div className="fw-semibold">{selectedMember.tax_code}</div>
                </div>

                <div className="p-3 mb-3 shadow-sm">
                  <div className="text-muted small">Telefono</div>
                  <div>{selectedMember.phone}</div>
                </div>

                <div className="p-3 mb-2 shadow-sm">
                  <div className="text-muted small">Email</div>
                  <div>{selectedMember.email}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
