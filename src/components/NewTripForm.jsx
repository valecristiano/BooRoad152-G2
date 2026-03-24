import { useState } from "react";

const initialFormData = {
  destination: "",
  start_date: "",
  end_date: "",
  image: "",
};

export default function NewTripForm({ trips, setTrips }) {
  const [formData, setFormData] = useState(initialFormData);

  // form change handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form submit
  const formSubmit = (e) => {
    e.preventDefault();

    // new id
    const getNextId = () => {
      if (trips.length === 0) return 1;
      const maxId = Math.max(...trips.map((trip) => trip.id));
      return maxId + 1;
    };

    // new object
    const newTrip = {
      id: getNextId(),
      ...formData,
    };

    setTrips([...trips, newTrip]);

    setFormData(initialFormData);
  };

  return (
    <form onSubmit={formSubmit} className="bg-light rounded-3">
      <div className="card_header rounded-top-3 bg-dark text-white p-3">
        <h2 className="mb-1">Leave a Review</h2>
      </div>
      <div className="p-3">
        <label className="form-label fs-4" htmlFor="new-destination">
          Nuova Destinazione
        </label>
        <input
          onChange={handleFormChange}
          value={formData.destination}
          name="destination"
          //
          className="form-control"
          type="text"
          id="new-destination"
          required
        />
        <label className="form-label fs-4 mt-2" htmlFor="new-start">
          Data Inizio
        </label>
        <input
          onChange={handleFormChange}
          value={formData.start_date}
          name="start_date"
          //
          className="form-control"
          type="text"
          id="new-start"
          placeholder="AAAA-MM-GG"
          required
        />
        <label className="form-label fs-4 mt-2" htmlFor="new-end">
          Data Fine
        </label>
        <input
          onChange={handleFormChange}
          value={formData.end_date}
          name="end_date"
          //
          className="form-control"
          type="text"
          id="new-end"
          placeholder="AAAA-MM-GG"
          required
        />
        <label className="form-label fs-4 mt-2" htmlFor="new-image">
          Percorso Immagine
        </label>
        <input
          onChange={handleFormChange}
          value={formData.image}
          name="image"
          //
          className="form-control"
          type="text"
          id="new-image"
          required
        />
      </div>
      <div className="d-flex justify-content-end pe-4 pt-2 pb-3">
        <button className="btn btn-success fs-5" type="submit">
          Aggiungi
        </button>
      </div>
    </form>
  );
}
