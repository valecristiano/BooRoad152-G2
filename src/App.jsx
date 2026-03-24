import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import TripDetailPage from "./pages/TripDetailPage";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={MainLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/:id" Component={TripDetailPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
