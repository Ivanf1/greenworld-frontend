import "./Navbar.css";
import { useCycle } from "framer-motion";
import logo from "../assets/Logo.png";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <SideMenu open={open} onClose={cycleOpen} />
      <nav className="h-14 md:h-20 px-5 xl:px-5 w-full bg-white">
        <div className="nav-container m-auto flex items-center min-h-full justify-between">
          <div className="left-container flex items-center space-x-4 md:space-x-10">
            <div className="ham-container p-2" onClick={() => cycleOpen()}>
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                className="hamburger-icon"
              >
                <rect width="40" height="4" rx="2" />
                <rect y="8" width="40" height="4" rx="2" />
                <rect y="16" width="40" height="4" rx="2" />
              </svg>
            </div>
            <Link to="/">
              <div className="flex md:space-x-2 items-center logo-container hover:cursor-pointer">
                <img className="logo w-[30px] h-[30px] md:w-[50px] md:h-[50px]" src={logo} alt="" />
                <span className="logo-name mb-[6px] text-lg md:text-xl">GreenWorld</span>
              </div>
            </Link>
          </div>
          <button className="secondary nav">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
