import "./Navbar.css";
import { useCycle } from "framer-motion";
import logo from "../assets/Logo.png";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../context/userContext";

const Navbar = () => {
  const { currentUser } = useCurrentUser();
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <SideMenu open={open} onClose={cycleOpen} />
      <nav className="h-14 md:h-20 px-5 xl:px-5 w-full bg-white">
        <div className="nav-container m-auto flex items-center min-h-full justify-between">
          <div className="left-container flex items-center space-x-4 md:space-x-10">
            <div
              className="ham-container p-2"
              onClick={() => cycleOpen()}
              role="button"
              aria-controls="side-menu"
              aria-label="Apri menu laterale"
            >
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                className="hamburger-icon"
                aria-hidden="true"
              >
                <rect width="40" height="4" rx="2" />
                <rect y="8" width="40" height="4" rx="2" />
                <rect y="16" width="40" height="4" rx="2" />
              </svg>
            </div>
            <Link to="/">
              <div className="flex md:-2 items-center logo-container hover:cursor-pointer">
                <img
                  className="logo w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                  src={logo}
                  alt="logo GreenWorld"
                />
                <span className="logo-name mb-[6px] text-lg md:text-xl">GreenWorld</span>
              </div>
            </Link>
          </div>
          {currentUser ? (
            <div className="flex items-center space-x-5">
              <Link to="/logout" className="hover-underline-animation font-semibold">
                Logout
              </Link>
              <Link to="/profilo">
                <button className="secondary nav">Profilo</button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Link to="/registrazione" className="hover-underline-animation font-semibold">
                Registrati
              </Link>
              <Link to="/login">
                <button className="secondary nav">Login</button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
