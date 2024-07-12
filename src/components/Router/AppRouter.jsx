import Dashboard from "../../Page/Dashboard";
import Profile from "../../Page/Profile";
import CreateTask from "../../Page/Create";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
