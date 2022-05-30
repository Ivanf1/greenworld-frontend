import "./SideMenu.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../hooks/windowSize";
import { TAILWINDCSS_LG_BREAKPOINT } from "../constants/tailwind";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SideMenu = ({ open, onClose }: Props) => {
  const [width] = useWindowSize();

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
            className={`w-[90%] lg:w-1/4 h-full bg-white fixed z-50`}
            initial={{ left: width > TAILWINDCSS_LG_BREAKPOINT ? "-25%" : "-90%" }}
            animate={{ left: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            exit={{
              left: width > TAILWINDCSS_LG_BREAKPOINT ? "-25%" : "-90%",
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
              <Link to="segnalazioni" className="text-lg pl-10 py-3 " onClick={onClose}>
                Segnalazioni
              </Link>
              <Link to="segnala" className="text-lg pl-10 py-3 " onClick={onClose}>
                Segnala un luogo
              </Link>
              <Link to="crea-evento" className="text-lg pl-10 py-3 " onClick={onClose}>
                Crea evento
              </Link>
              <Link to="profilo" className="text-lg pl-10 py-3 " onClick={onClose}>
                Diventa Organizzatore
              </Link>
              <Link to="candidatura-sponsor" className="text-lg pl-10 py-3 " onClick={onClose}>
                Diventa Sponsor
              </Link>
              <Link to="testimonianze" className="text-lg pl-10 py-3 " onClick={onClose}>
                Elenco Testimonianze
              </Link>
              <Link to="testimonia" className="text-lg pl-10 py-3 " onClick={onClose}>
                Inserisci testimonianza
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
