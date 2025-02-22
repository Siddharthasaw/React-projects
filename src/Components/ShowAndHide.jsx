import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ShowAndHide({children}) {

  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    if(location.pathname === "/register" || location.pathname === "/login" || location.pathname === "/admin"){  
        setShowNavbar(false)
    }else{
        setShowNavbar(true)
    }
  },[location])

  return (
    <div>
      {showNavbar && children}
    </div>
  )
}

export default ShowAndHide;


