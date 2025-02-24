import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ShowAndHide({ children }) {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/register" ||
      location.pathname === "/login" ||
      location.pathname === "/admin" ||
      location.pathname === "/admin/manage-blogs" ||
      location.pathname === "/admin/manage-categories" ||
      location.pathname === "/admin/users" ||
      location.pathname === "/admin/seo-settings" ||
      location.pathname === "/admin/analytics" ||
      location.pathname === "/admin/settings" ||
       location.pathname === "/admin/manage-comments"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
}

export default ShowAndHide;
