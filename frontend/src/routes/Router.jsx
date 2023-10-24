import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tutorials from "../pages/Tutorials";
import Trainings from "../pages/Trainings";
import Eshop from "../pages/Eshop";
import Profile from "../pages/Profile";
import NoMatch from "../pages/NoMatch";
import TutorialId from "../pages/tutorialId";

function Router({ chatModal, setChatModal }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/tutorials/:id" element={<TutorialId />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route
        path="/eshop"
        element={<Eshop chatModal={chatModal} setChatModal={setChatModal} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default Router;
