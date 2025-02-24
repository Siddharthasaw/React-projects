import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MarketNews from "./pages/MarketNews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Banner from "./Components/Banner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RiskDisclaimer from "./pages/RiskDisclaimer";
import SupportCenter from "./pages/SupportCenter";
import Dashboard from "./pages/dashboard/Dashboard";
import ManageBlogs from "./pages/dashboard/ManageBlogs";
import ShowAndHide from "./Components/ShowAndHide";
import Categories from "./pages/dashboard/Categories";
import ManageComments from "./pages/dashboard/ManageComments";
import Users from "./pages/dashboard/Users";
import SeoSettings from "./pages/dashboard/SEOSettings";
import Analytics from "./pages/dashboard/Analytics";
import Settings from "./pages/dashboard/Settings";
import DashboardContent from "./pages/dashboard/components/DashboardContent";
import BlogForm from "./pages/dashboard/components/BlogForm";

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
        {/* 🔹 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<MarketNews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/risk-disclaimer" element={<RiskDisclaimer />} />
        <Route path="/support-center" element={<SupportCenter />} />

        {/* 🔹 Admin Routes */}
        <Route path="/admin/*" element={<Dashboard />}>
          <Route index element={<DashboardContent/>} /> 
          <Route path="manage-blogs" element={<ManageBlogs />} />
          <Route path="manage-categories" element={<Categories />} />
          <Route path="manage-comments" element={<ManageComments />} />
          <Route path="users" element={<Users />} />
          <Route path="seo-settings" element={<SeoSettings />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="manage-blogs/new" element={<BlogForm />} />
          <Route path="manage-blogs/edit/:id" element={<BlogForm />} />

        </Route>
      </Routes>

      <ShowAndHide>
        <Footer />
      </ShowAndHide>
    </BrowserRouter>
  );
}

export default App;
