import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app, send to API here.
    setSubmitted(true)
  }

  if (submitted) {
    return <div className="card"><h3 className="h3">Thanks, {form.name}!</h3><p className="p mt-2">We received your message and will reply soon.</p></div>
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required value={form.name} onChange={handleChange}
            className="mt-1 w-full border rounded-xl2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required value={form.email} onChange={handleChange}
            className="mt-1 w-full border rounded-xl2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows="5" required value={form.message} onChange={handleChange}
          className="mt-1 w-full border rounded-xl2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
      </div>
      <button className="btn w-fit">Send Message</button>
    </form>
  )
}
