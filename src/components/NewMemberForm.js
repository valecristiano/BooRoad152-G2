import { useState } from "react";

const initialData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  tax_code: "",
  avatar: "https://i.pravatar.cc/150", // Un avatar di default
};

export default function NewMemberForm({ members, setMembers }) {
  const [formData, setFormData] = useState(initialData);

  //funzione onChange
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //funzione onSumbmit
  const formSubmit = (e) => {
    e.preventDefault();

    //  id
    const getNextId = () => {
      if (members.length === 0) return 1;
      const maxId = Math.max(...members.map((m) => m.id));
      return maxId + 1;
    };

    // nuovo membro
    const newMember = {
      ...formData,
      id: getNextId(),
    };

    setMembers([...members, newMember]);

    // Reset del form
    setFormData(initialData);
  };

  return (
    <form onSubmit={formSubmit} className="bg-light rounded-3 shadow-sm mt-4">
      <div className="card_header rounded-top-3 bg-dark text-white p-3">
        <h2 className="mb-0 h4">Aggiungi membro</h2>
      </div>

      <div className="p-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fs-5" htmlFor="first_name">
              Nome
            </label>
            <input className="form-control" type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleFormChange} required />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label fs-5" htmlFor="last_name">
              Cognome
            </label>
            <input className="form-control" type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleFormChange} required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} required />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fs-5" htmlFor="phone">
              Telefono
            </label>
            <input className="form-control" type="text" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label fs-5" htmlFor="tax_code">
              Codice Fiscale
            </label>
            <input className="form-control" type="text" id="tax_code" name="tax_code" value={formData.tax_code} onChange={handleFormChange} />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end pe-4 pt-2 pb-3">
        <button className="btn btn-success fs-5 px-4" type="submit">
          Aggiungi Membro
        </button>
      </div>
    </form>
  );
}
