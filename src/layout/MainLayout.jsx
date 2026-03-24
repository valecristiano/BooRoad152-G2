import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      {/* header */}
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg border-body bg-body-tertiary">
          <div className="container-fluid py-2 justify-content-center">
            <NavLink to="/" className="text-decoration-none fw-bold" aria-current="page">
              <h1 className="fw-bold">BooRoad</h1>
            </NavLink>
          </div>
        </nav>
      </header>
      {/* main */}
      <main>
        <div className="py-3">
          <Outlet />
        </div>
      </main>
    </>
  );
}
