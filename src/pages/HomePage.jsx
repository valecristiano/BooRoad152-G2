import { Link } from "react-router-dom";
import initialTrips from "../data/trips";
import NewTripForm from "../components/NewTripForm";
import { useState } from "react";

export default function HomePage() {
  const [trips, setTrips] = useState(initialTrips);

  return (
    <div className="container pt-1 pb-5">
      {/* trips */}
      <div className="d-flex justify-content-center my-3">
        <h2 className="text-center rounded-4 py-2 px-3 title text-white fw-bolder">
          Seleziona il Viaggio
        </h2>
      </div>
      <div className="row row-cols-1 gap-4">
        {trips.map((trip) => (
          <div key={trip.id} className="col">
            {/* trip card */}
            <Link to={`/${trip.id}`}>
              <div className="card text-bg-dark trip-card">
                <img
                  src={trip.image}
                  className="card-img object-fit-cover"
                  alt={trip.destination}
                />
                <div className="card-img-overlay overlay-dark d-flex align-items-center justify-content-between">
                  {/* trip destination */}
                  <div className="d-flex">
                    <h2 className="h1 card-title fw-bolder fst-italic">{trip.destination}</h2>
                  </div>
                  <div>
                    {/* trip dates */}
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
        {/* form modal */}
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content form-add">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <NewTripForm trips={trips} setTrips={setTrips} />
              </div>
            </div>
          </div>
        </div>
        {/* modal btn */}
        <div className="trip-form-btn rounded-4">
          <button className="btn fs-1" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
            Aggiungi Viaggio +
          </button>
        </div>
      </div>
    </div>
  );
}
