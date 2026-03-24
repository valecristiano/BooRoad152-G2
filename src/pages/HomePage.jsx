import trips from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="row row-cols-1 gap-3">
        {trips.map((trip) => {
          return (
            <div className="col">
              <div className="card text-bg-dark">
                <img
                  src={trip.image}
                  className="card-img"
                  alt={trip.destination}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">{trip.destination}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
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
    </>
  );
}
