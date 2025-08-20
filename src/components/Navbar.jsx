import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/products', 'Products'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">Creative Pair</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to}
              className={({isActive}) => `text-sm hover:text-brand ${isActive ? 'text-brand font-semibold' : 'text-gray-700'}`}>
              {label}
            </NavLink>
          ))}
          <button className="ml-4 btn btn-outline" onClick={toggle}>Toggle Theme</button>
        </nav>
        <button className="md:hidden p-2 border rounded-xl2" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}
                className={({isActive}) => `text-sm ${isActive ? 'text-brand font-semibold' : 'text-gray-700'}`}>
                {label}
              </NavLink>
            ))}
            <button className="btn btn-outline w-fit" onClick={() => {toggle(); setOpen(false)}}>Toggle Theme</button>
          </div>
        </div>
      )}
    </header>
  )
}
