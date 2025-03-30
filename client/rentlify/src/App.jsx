import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/ui/Header";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import House from "./pages/home/House";
import Vehicle from "./pages/home/Vehicle";
import About from "./pages/about/About";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/Home";
import Host from "./pages/host/Host";
import Helpcenter from "./pages/helpcenter/Helpcenter";
import Wishlist from "./pages/wishlist/Wishlist";
import Report from "./pages/report/Report";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/host" element={<Host />} />
        <Route path="/help-center" element={<Helpcenter />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
