import logo from "../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="left-container">
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="#2D2D2D"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburger-icon"
          >
            <rect width="40" height="4" rx="2" />
            <rect y="8" width="40" height="4" rx="2" />
            <rect y="16" width="40" height="4" rx="2" />
          </svg>
          <div className="logo-container">
            <img className="logo" src={logo} alt="" />
            <span className="logo-name">GreenWorld</span>
          </div>
        </div>
        <button className="secondary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
