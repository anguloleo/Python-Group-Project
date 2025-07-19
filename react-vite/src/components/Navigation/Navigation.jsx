import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img src="https://lodgr.s3.us-east-2.amazonaws.com/Navbar+Logo.jpg" alt="Pintrix Logo" className="nav-logo" />
      </div>

      <div className="nav-links">
        <NavLink to="/boards" className="nav-btn">
          <span className="heart">♥</span> Boards
        </NavLink>
        <NavLink to="/pins/new" className="nav-btn">
          Add New Pin
        </NavLink>
        <NavLink to="/pins/manage" className="nav-btn">
          Manage Pins
        </NavLink>
        <NavLink to="/login" className="nav-btn">
          Login
        </NavLink>
        <NavLink to="/signup" className="nav-btn black-btn">
          Signup
        </NavLink>
      </div>

      <div className="nav-profile">
        <ProfileButton />
      </div>
    </nav>
  );
}

export default Navigation;
