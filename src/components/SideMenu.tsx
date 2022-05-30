import "./SideMenu.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../hooks/windowSize";

interface Props {
  open: boolean;
  onClose: () => void;
}
const TAILWINDCSS_MD_BREAKPOINT = 768;

const SideMenu = ({ open, onClose }: Props) => {
  const [width, _] = useWindowSize();

  return (
    <AnimatePresence>
      {open && (
        <div>
          <motion.div
            className="fixed bg-gray-800 h-full w-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          ></motion.div>
          <motion.div
            className={`w-[90%] md:w-1/4 h-full bg-white fixed z-50`}
            initial={{ left: width > TAILWINDCSS_MD_BREAKPOINT ? "-25%" : "-90%" }}
            animate={{ left: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            exit={{
              left: width > TAILWINDCSS_MD_BREAKPOINT ? "-25%" : "-90%",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col gap-3 pt-10 z-10">
              <div className="ml-auto mr-10 p-2 w-[50px] ham-close-container" onClick={onClose}>
                <svg viewBox="0 0 600 600" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="6"
                    y="538"
                    width="752.468"
                    height="80"
                    rx="40"
                    transform="rotate(-45 6 538)"
                  />
                  <rect
                    x="538"
                    y="595"
                    width="752.468"
                    height="80"
                    rx="40"
                    transform="rotate(-135 538 595)"
                  />
                </svg>
              </div>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Profilo
              </Link>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Segnalazioni
              </Link>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Diventa Organizzatore
              </Link>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Diventa Sponsor
              </Link>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Elenco Testimonianze
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
