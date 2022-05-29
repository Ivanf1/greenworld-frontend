import logo from "../assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="h-14 md:h-20 px-4 md:px-20 w-full bg-white">
      <div className="nav-container m-auto flex items-center min-h-full justify-between">
        <div className="left-container flex items-center gap-4 md:gap-10">
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
          <div className="flex md:gap-2 items-center logo-container hover:cursor-pointer">
            <img className="logo w-[30px] h-[30px] md:w-[50px] md:h-[50px]" src={logo} alt="" />
            <span className="logo-name mb-[6px] text-lg md:text-xl">GreenWorld</span>
          </div>
        </div>
        <button className="secondary nav">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
