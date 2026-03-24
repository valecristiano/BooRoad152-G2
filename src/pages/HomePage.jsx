import { Link } from "react-router-dom";
import initialTrips from "../data/trips";
import NewTripForm from "../components/NewTripForm";
import { useState } from "react";

export default function HomePage() {
  const [trips, setTrips] = useState(initialTrips);

  return (
    <div className="container">
      <div className="d-flex justify-content-center my-3">
        <h2 className="text-center rounded-4 py-2 px-3 title text-white">
          Seleziona il Viaggio
        </h2>
      </div>
      <div className="row row-cols-1 gap-4">
        {trips.map((trip) => (
          <div key={trip.id} className="col">
            <Link to={`/${trip.id}`}>
              <div className="card text-bg-dark trip-card">
                <img
                  src={trip.image}
                  className="card-img object-fit-cover"
                  alt={trip.destination}
                  style={{ height: "200px" }}
                />
                <div className="card-img-overlay overlay-dark d-flex align-items-center justify-content-between">
                  <div className="d-flex">
                    <h2 className="card-title fw-bolder fst-italic">
                      {trip.destination}
                    </h2>
                  </div>
                  <div>
                    <div className="card-text fst-italic fs-5">
                      <div className="fw-bolder">Partenza</div>
                      <div>{trip.start_date}</div>
                    </div>
                    <div className="card-text fst-italic fs-5">
                      <div className="fw-bolder">Ritorno</div>
                      <div>{trip.end_date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <section className="new-trip-section mt-5">
        <NewTripForm trips={trips} setTrips={setTrips} />
      </section>
    </div>
  );
}
