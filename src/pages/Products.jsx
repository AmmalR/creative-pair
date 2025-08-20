import { Section } from '../components/Section.jsx'

const products = [
  { name: 'Starter Kit', price: '$49', desc: 'Source code + docs to launch fast.' },
  { name: 'Pro Kit', price: '$149', desc: 'Everything in Starter + advanced components.' },
  { name: 'Enterprise', price: 'Custom', desc: 'White-glove support and custom builds.' },
]

export default function Products() {
  return (
    <main>
      <Section title="Products" subtitle="Simple pricing for every stage.">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.name} className="card">
              <h3 className="h3">{p.name}</h3>
              <p className="p mt-2">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold">{p.price}</span>
                <button className="btn">Buy</button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
