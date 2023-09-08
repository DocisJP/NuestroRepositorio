import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Profile/Login";
import Register from "./Components/Profile/Register";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to our website</h1>
      {/* Add navigation links or a navbar here */}
    </div>
  );
}

export default App;
