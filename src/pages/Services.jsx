export default function Services() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-4xl font-bold text-brand-accent mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-brand-light/10 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold">Service One</h3>
          <p className="text-gray-300 mt-2">Dummy description for service one.</p>
        </div>
        <div className="p-6 bg-brand-light/10 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold">Service Two</h3>
          <p className="text-gray-300 mt-2">Dummy description for service two.</p>
        </div>
        <div className="p-6 bg-brand-light/10 rounded-2xl shadow">
          <h3 className="text-2xl font-semibold">Service Three</h3>
          <p className="text-gray-300 mt-2">Dummy description for service three.</p>
        </div>
      </div>
    </section>
  )
}
