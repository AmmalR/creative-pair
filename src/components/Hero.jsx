import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pt-20 md:pt-28">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">Build a modern website with React + Tailwind</h1>
          <p className="p mt-4">This starter includes routing, reusable components, a blog, and a contact form. Tweak it to match your brand and content.</p>
          <div className="mt-6 flex gap-3">
            <Link className="btn" to="/services">Explore Services</Link>
            <Link className="btn btn-outline" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://picsum.photos/seed/react/800/500" alt="Hero" className="rounded-xl2 w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
