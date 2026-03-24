import { Link } from "react-router-dom";
import trips from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 gap-3">
          {trips.map((trip) => {
            return (
              <div className="col">
                <Link to={`/${trip.id}`}>
                  <div className="card text-bg-dark">
                    <img
                      src={trip.image}
                      className="card-img object-fit-cover"
                      alt={trip.destination}
                      style={{ height: "200px" }}
                    />
                    <div className="card-img-overlay overlay-dark d-flex align-items-center justify-content-between">
                      <div className="d-flex">
                        <h5 className="card-title fs-2 fw-bolder">
                          {trip.destination}
                        </h5>
                      </div>
                      <div>
                        <p className="card-text fw-bolder">{trip.start_date}</p>
                        <p className="card-text fw-bolder">{trip.end_date}</p>
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
