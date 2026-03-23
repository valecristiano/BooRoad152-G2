import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom border-body">
        <div className="container-fluid mx-2 p-2 rounded">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            BooRoad
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/trip/2" className="nav-link" aria-current="page">
                  List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/trip/member/2" className="nav-link" aria-current="page">
                  Member
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
