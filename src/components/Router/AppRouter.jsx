// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../../Page/Dashboard";
import Profile from "../../Page/Profile";
import Create from "../../Page/Create";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/profile" Component={Profile} />
        <Route path="/create" Component={Create} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
