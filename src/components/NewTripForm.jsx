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
    <form onSubmit={formSubmit} className="rounded-3">
      <div className="card_header rounded-top-3 text-white p-3">
        <h2 className="mb-1">Aggiungi un Nuovo Viaggio</h2>
      </div>
      <div className="p-3 form-body">
        {/* destination */}
        <label className="form-label fs-4 ms-1 mb-0" htmlFor="new-destination">
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
        {/* start */}
        <label className="form-label fs-4 mt-2 ms-1 mb-0" htmlFor="new-start">
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
        {/* end */}
        <label className="form-label fs-4 mt-2 ms-1 mb-0" htmlFor="new-end">
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
        {/* image */}
        <label className="form-label fs-4 mt-2 ms-1 mb-0" htmlFor="new-image">
          Immagine
        </label>
        <input
          onChange={handleFormChange}
          value={formData.image}
          name="image"
          //
          className="form-control"
          type="text"
          id="new-image"
          placeholder="Percorso Immagine"
          required
        />
      </div>
      <div className="d-flex justify-content-end pe-4 pt-2 pb-3">
        <button className="btn btn-warning fs-5" type="submit">
          Aggiungi
        </button>
      </div>
    </form>
  );
}
