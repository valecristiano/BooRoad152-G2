import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom border-body">
        <div className="container-fluid mx-2 p-2 rounded">
          {/* home-page */}
          <NavLink to="/" className="navbar-brand" aria-current="page">
            <img src="/bus-booroad.png" alt="bus-icon" width="50" />
            <span className="brand-title ps-2">BooRoad</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list custom-burger"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* home-page */}
                <NavLink to="/:id" className="nav-link" aria-current="page">
                  TripDetailPage DEV
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/member/:id" className="nav-link" aria-current="page">
                  MemberDetailPage DEV
                </NavLink>
              </li>
            </ul>
            {/* <span class="navbar-text">Navbar</span> */}
          </div>
        </div>
      </nav>
      <main>
        <div className="py-3">
          <Outlet />
        </div>
      </main>
    </>
  );
}
