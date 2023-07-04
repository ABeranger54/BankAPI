import logo from "../media/argentBankLogo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CookieManager from "../SessionUtils"

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const manager = new CookieManager();
  const isLogged = manager.getToken();

  function logout(){
    dispatch({type: "signOut"});
    manager.removeToken();
    return navigate("/");
  }

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
              <span href="#" onClick={() => logout()} className="main-nav-item">
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
