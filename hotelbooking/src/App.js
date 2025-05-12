import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
import Rooms from "./Rooms";
import ContactPage from "./ContactPage";
import BookNow from "./BookNow";
import AdminDashboard  from "./AdminDashboard";
import AvailableRooms from './AvailableRooms';
import AdminFeedbackPage from './AdminFeedbackPage';
import BookingDetails from './BookingDetails';
import Checkouts from './Checkouts';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/services" element={<Service />} />
       <Route path="/rooms" element={<Rooms />} />
       <Route path="/contact" element={<ContactPage />} />
        <Route path="/book/:roomName" element={<BookNow />} />
<Route path="/admin" element={<AdminDashboard />} />
 <Route path="/rooms-available" element={<AvailableRooms />} />
 <Route path="/booking-details" element={<BookingDetails />} />
<Route path="/feedback" element={<AdminFeedbackPage />} />
            <Route path="/checkouts" element={<Checkouts />} />
            <Route path="/logout" element={<Navigate to="/"  />} />
      </Routes>
    </Router>
  );
}

export default App;
