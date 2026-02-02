import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Recover from "./components/Recover";
import Cart from "./Pages/Cart";

function Layout() {
  const location = useLocation();

  // Routes where header & footer should be hidden
  const hideLayoutRoutes = ["/signin", "/signup", "/recover"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
