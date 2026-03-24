import { useState } from "react";

import trips from "../data/trips";
import members from "../data/members";
import SearchBar from "../components/SearchBar";

export default function TripMembersPage() {
  const exampleTrip = trips[0];

  //stato lettura searchbar
  const [searchBar, setSearchBar] = useState("");

  //filtro rubrica
  const filteredMembers = members.filter((member) => {
    const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
    return fullName.includes(searchBar.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex align-items-center">
          <div className="card w-100 bg-light">
            <h3>{exampleTrip.destination}</h3>
            <div>Starting:</div>
            <span>{exampleTrip.start_date}</span>
            <div>Starting:</div>
            <span>{exampleTrip.end_date}</span>
          </div>
        </div>
        <div className="col-8">
          <div className="poster-container">
            <img className="img-fluid" src={exampleTrip.image} alt="poster" />
          </div>
        </div>
      </div>

      {/* //inserisco il componente search bar */}
      <div className="">
        <h3>Members List</h3>
        <div style={{ width: "300px" }}>
          <SearchBar onSearch={setSearchBar} />
        </div>
      </div>

      {/* map partecipanti con condition rendering in caso di nome non trovato */}
      <ul className="list-group shadow-sm">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <li key={member.id} className="list-group-item">
              <i className="bi bi-person-circle me-2"></i>
              {`${member.first_name} ${member.last_name}`}
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted italic">"{searchBar}" non c'è nella lista!</li>
        )}
      </ul>

      {/* <h3>Members List</h3>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{`${member.first_name} ${member.last_name}`}</li>
        ))}
      </ul> */}
    </div>
  );
}
