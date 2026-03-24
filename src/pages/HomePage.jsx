import trips from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 gap-3">
          {trips.map((trip) => {
            return (
              <div className="col">
                <div className="card text-bg-dark">
                  {/* <div className="layover"></div> */}
                  <img
                    src={trip.image}
                    className="card-img object-fit-cover"
                    alt={trip.destination}
                    style={{ height: "200px" }}
                  />
                  <div className="card-img-overlay overlay-dark d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                      <h5 className="card-title">{trip.destination}</h5>
                    </div>
                    <div>
                      <p className="card-text">{trip.start_date}</p>
                      <p className="card-text">{trip.end_date}</p>
                    </div>
                  </div>
                </div>
              </div>

              //   <div className="col">
              //     <div className="card">
              //       <img src="..." className="card-img-top" alt="..." />
              //       <div className="card-body">
              //         <div className="d-flex justify-content-between align-items-center">
              //           <p className="card-text">{trip.destination}</p>
              //           <div>
              //             <p className="card-text">{trip.start_date}</p>
              //             <p className="card-text">{trip.end_date}</p>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
