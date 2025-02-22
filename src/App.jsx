import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import ShowAndHide from "./Components/ShowAndHide";
import Register from "./auth/Register";
import MarketNews from "./pages/MarketNews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Banner from "./Components/Banner";
import PrivecyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import SupportCenter from "./pages/SupportCenter";
import Dashboard from "./pages/dashboard/Dashboard";
import ManageBlogs from "./pages/dashboard/ManageBlogs";

function App() {
  return (
    <BrowserRouter>
      <ShowAndHide>
        <NavBar />
      </ShowAndHide>
      <ShowAndHide>
        <Banner />
      </ShowAndHide>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<MarketNews />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivecyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/support-center" element={<SupportCenter />} />

        <Route path="/admin/*" element={<Dashboard />}>
          <Route path="manage-blogs" element={<ManageBlogs />} />
        </Route>
      </Routes>
      <ShowAndHide>
        <Footer />
      </ShowAndHide>
    </BrowserRouter>
  );
}

export default App;
