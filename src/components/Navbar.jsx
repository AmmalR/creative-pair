import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      className="flex justify-between items-center px-8 py-4 bg-brand-dark shadow-md sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <Link to="/" className="flex items-center font-bold text-xl">
          <div className="w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm"><img src="public/logo__2.png" alt="CP" /></span>
          </div>
          Creative Pair
        </Link>
        
      
      <div className="space-x-6">
        <Link to="/" className="hover:text-brand-light">Home</Link>
        <Link to="/about" className="hover:text-brand-light">About</Link>
        <Link to="/services" className="hover:text-brand-light">Services</Link>
        <Link to="/contact" className="hover:text-brand-light">Contact</Link>
      </div>
    </motion.nav>
  )
}
