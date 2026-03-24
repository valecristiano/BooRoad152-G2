import { Link } from "react-router-dom";
import trips from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="my-4 h3 text-center text-white">
          Scegli la tua prossima meta
        </h1>
        <div className="row row-cols-1 gap-4">
          {trips.map((trip) => {
            return (
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
                        <h5 className="card-title fs-2 fw-bolder">
                          <em> {trip.destination}</em>
                        </h5>
                      </div>
                      <div>
                        <p className="card-text">
                          <span className="d-block fw-bolder">
                            <em>Partenza</em>
                          </span>
                          {trip.start_date}
                        </p>
                        <p className="card-text ">
                          <span className="d-block fw-bolder">
                            <em>Ritorno</em>
                          </span>
                          {trip.end_date}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
