import trips from "../data/trips";
import members from "../data/members";

export default function TripMembersPage() {
  const exampleTrip = trips[0];

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

      <h3>Members List</h3>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{`${member.first_name} ${member.last_name}`}</li>
        ))}
      </ul>
    </div>
  );
}
