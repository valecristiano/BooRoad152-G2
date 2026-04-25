import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import TripDetailPage from "./pages/TripDetailPage";
import MainLayout from "./layout/MainLayout";

import initialTrips from "./data/trips";
import { useState } from "react";

export default function App() {
  const [trips, setTrips] = useState(initialTrips);

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={MainLayout}>
          <Route index element={<HomePage trips={trips} setTrips={setTrips} />}></Route>
          <Route path="/:id" element={<TripDetailPage trips={trips} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
