import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Components/Home/Home";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/home" element={<Home/>} />
        </Routes>
        <Admin />
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;
