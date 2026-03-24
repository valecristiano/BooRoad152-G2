import { useParams } from "react-router-dom";
import trips from "../data/trips";
import members from "../data/members";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function TripMembersPage() {
  const { id } = useParams();

  const trip = trips.find((trip) => trip.id === parseInt(id, 10));

  //stato lettura searchbar
  const [searchBar, setSearchBar] = useState("");

  //filtro rubrica
  const filteredMembers = members.filter((member) => {
    const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
    return fullName.includes(searchBar.toLowerCase());
  });

  return (
    <div className="container">
      <div className="row g-4">
        {/* infos */}
        <section className="col-4 d-flex align-items-center">
          <div className="card p-3 w-100 d-flex flex-column justify-content-around">
            <h2 className="h1 mb-1">{trip.destination}</h2>
            <div className="fs-5 mb-1">{`Starting: ${trip.start_date}`}</div>
            <div className="fs-5 mb-1">{`Ending: ${trip.end_date}`}</div>
          </div>
        </section>
        {/* poster */}
        <div className="col-8">
          <div className="poster-container">
            <img className="img-fluid" src={trip.image} alt="poster" />
          </div>
        </div>
        <section className="col-12 members-list">
          <h3 className="ms-2">Members List</h3>
          <ul className="list-group">
            {members.map((member) => (
              <button key={member.id} className="btn text-start px-0 py-1">
                <li className="list-group-item">{`• ${member.first_name} ${member.last_name} ${member.phone}`}</li>
              </button>
            ))}
          </ul>
        </section>
      </div>
      {/* members list */}
    </div>
  );
}
