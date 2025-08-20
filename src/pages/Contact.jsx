export default function Contact() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl font-bold text-brand-accent mb-6">Contact Us</h2>
      <form className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Your Name" className="p-3 rounded-xl bg-brand-light/10 text-white"/>
        <input type="email" placeholder="Your Email" className="p-3 rounded-xl bg-brand-light/10 text-white"/>
        <textarea placeholder="Your Message" className="p-3 rounded-xl bg-brand-light/10 text-white"></textarea>
        <button type="submit" className="bg-brand-accent hover:bg-brand-light px-6 py-3 rounded-xl text-white font-semibold">
          Send Message
        </button>
      </form>
    </section>
  )
}
