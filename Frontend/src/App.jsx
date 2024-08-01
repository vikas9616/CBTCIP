import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EventCreation from "./components/EventCreation";
import GuestList from "./components/GuestList";
import BudgetTracking from "./components/BudgetTracking";
import VendorCoordination from "./components/VendorCoordination";
import Scheduling from "./components/Scheduling";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className=" bg-gray-700 h-[100vh]">
        <nav className="flex items-center text-white mb-8 justify-center bg-gray-800 py-3 px-1 ">
          <Link to="/" className="hover:bg-green-500 rounded-lg px-2 py-1 mr-4">
            Home
          </Link>
          <Link
            to="/create-event"
            className="hover:bg-green-500 rounded-lg px-2 py-1 mr-4"
          >
            Create Event
          </Link>
          <Link
            to="/guest-list"
            className="hover:bg-green-500 rounded-lg px-2 py-1 mr-4"
          >
            Guest List
          </Link>
          <Link
            to="/budget-tracking"
            className="hover:bg-green-500 rounded-lg px-2 py-1 mr-4"
          >
            Budget Tracking
          </Link>
          <Link
            to="/vendor-coordination"
            className="hover:bg-green-500 rounded-lg px-2 py-1 mr-4"
          >
            Vendor Coordination
          </Link>
          <Link
            to="/scheduling"
            className="hover:bg-green-500 rounded-lg px-2 py-1"
          >
            Scheduling
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<EventCreation />} />
          <Route path="/guest-list" element={<GuestList />} />
          <Route path="/budget-tracking" element={<BudgetTracking />} />
          <Route path="/vendor-coordination" element={<VendorCoordination />} />
          <Route path="/scheduling" element={<Scheduling />} />
        </Routes>
      <div className="fixed bottom-0 w-full">
        <Footer/>
      </div>
      </div>
    </Router>
  );
};

export default App;
