import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/75 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 px-6 lg:px-10 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl lg:text-3xl font-extrabold cursor-pointer"
        >
          <span className="text-sky-400">Tanmay</span>
          <span className="text-white">.</span>
        </motion.h1>

        {/* Desktop */}

        <ul className="hidden md:flex items-center gap-2 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-full px-3 py-2">
          {links.map((item) => (
            <li key={item}>
              <Link
                activeClass="bg-sky-500 text-white"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="
                  px-5
                  py-2
                  rounded-full
                  cursor-pointer
                  text-slate-300
                  transition-all
                  duration-300
                  hover:text-white
                  hover:bg-slate-800
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800"
        >
          {links.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-sky-400"
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-8
                py-4
                text-slate-300
                cursor-pointer
                transition
                hover:bg-slate-800
                hover:text-sky-400
              "
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;