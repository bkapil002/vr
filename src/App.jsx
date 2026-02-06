import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Recover from "./components/Recover";
import Cart from "./Pages/Cart";
import About from "./Pages/About/About";
import BlogArticles from "./Pages/Blog/BlogArticles";
import ContactUs from "./Pages/Contactus/ContactUs";
import Careers from "./Pages/Careers/Careers";
import VRWeld from "./Pages/VRWeld/VRWeld";
import VRSterile from "./Pages/VRSterile/VRSterile";
import VRHVAC from "./Pages/VRHVAC/VRHVAC";
import VRMechatronics from "./Pages/VRMechatronics/VRMechatronics";

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
        <Route path="/about" element={<About/>}/>
        <Route path="/blog-articles" element={<BlogArticles/>}/>
        <Route path ='/contactus' element={<ContactUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/vrweld" element={<VRWeld/>}/>
        <Route path="/vrsterile" element={<VRSterile/>}/>
        <Route path="/vrhvac" element={<VRHVAC/>}/>
        <Route path ='/vrmechatronics' element={<VRMechatronics/>}/>
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;
