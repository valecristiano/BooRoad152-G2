export default function MemberCard({ selectedMember, onClose }) {
  if (!selectedMember) return null;

  return (
    <>
      <div
        className="member-overlay-backdrop"
        onClick={onClose}
      ></div>

      <div className="member-overlay-wrapper">
        <div className="member-overlay-card">
          <div className="member-overlay-header text-white p-3 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-3">
              <img
                src={selectedMember.avatar || "/img/members/memberM1.jpg"}
                alt={`${selectedMember.first_name} ${selectedMember.last_name}`}
                className="rounded-circle border border-3 border-white member-avatar-lg"
              />

              <div>
                <div className="small opacity-75">PROFILO PASSEGGERO</div>
                <h5 className="mb-1">
                  {selectedMember.first_name} {selectedMember.last_name}
                </h5>
                <div className="small opacity-75">
                  {selectedMember.email}
                </div>
              </div>
            </div>

            <button
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>

          <div className="member-overlay-scroll p-3">
            <div className="member-info-box p-3 mb-3 shadow-sm">
              <div className="text-muted small">Nome</div>
              <div className="fw-semibold">{selectedMember.first_name}</div>
            </div>

            <div className="member-info-box p-3 mb-3 shadow-sm">
              <div className="text-muted small">Cognome</div>
              <div className="fw-semibold">{selectedMember.last_name}</div>
            </div>

            <div className="member-info-box p-3 mb-3 shadow-sm">
              <div className="text-muted small">Codice Fiscale</div>
              <div className="fw-semibold">{selectedMember.tax_code}</div>
            </div>

            <div className="member-info-box p-3 mb-3 shadow-sm">
              <div className="text-muted small">Telefono</div>
              <div>{selectedMember.phone}</div>
            </div>

            <div className="member-info-box p-3 mb-2 shadow-sm">
              <div className="text-muted small">Email</div>
              <div>{selectedMember.email}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}