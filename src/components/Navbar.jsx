import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-4 bg-brand-dark shadow-md sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center font-bold text-xl text-white">
        <div className="w-12 h-12 flex items-center justify-center mr-2">
          <img src="public/logo__2.png" alt="CP" className="w-full h-full object-contain" />
        </div>
        Creative Pair
      </Link>

      {/* Nav Links with Hover Animation */}
      <div className="flex space-x-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, color: "#60a5fa" }} // scale + color change
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={link.path}
              className="relative text-white"
            >
              {link.name}
              {/* Underline Animation */}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-brand-light"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}
