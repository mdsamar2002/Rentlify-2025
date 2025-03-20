import "./App.css";
import { Routes,Route } from "react-router";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import About from "./pages/about/About";
import Profile from "./pages/profile/profile";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={Home}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile/>} />

    </Routes>
    </>
  );
}

export default App;
