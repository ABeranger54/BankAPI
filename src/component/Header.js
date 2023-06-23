import logo from "../media/argentBankLogo.png"
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { getToken, removeToken } from "../SessionUtils";

function Header() {

  const [tokenChanged, setTokenChanged] = useState(false);

  if(tokenChanged){
    removeToken();
    return <Navigate to="/" />
  }

  const isLogged = getToken();

  return (
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isLogged &&
            <div>
              <Link to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Tony
              </Link>
              <span href="#" onClick={() => setTokenChanged(true)} className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                Sign Out
              </span>
            </div>
          }
          {!isLogged && 
            <Link to="/signin" className="main-nav-item">
                <i className="fa fa-user-circle"></i>Sign In
            </Link>
          }
        </div>
    </nav>
  );
}

export default Header;
