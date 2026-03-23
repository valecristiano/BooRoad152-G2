import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import TripMembersPage from "./pages/TripMembersPage";
import MemberDetailPage from "./pages/MemberDetailPage";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route index Component={HomePage}></Route>
            <Route path="/trip/:id" Component={TripMembersPage}></Route>
            <Route path="/trip/member/:id" Component={MemberDetailPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
