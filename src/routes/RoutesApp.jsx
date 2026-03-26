import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const RoutesApp = () => {
  return (
    <Router>
        <div class="nav">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/myjob">MyJob</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myjob" element={<MyJob />} />
      </Routes>      
      </div>

    </Router>
  );
};

export default RoutesApp;