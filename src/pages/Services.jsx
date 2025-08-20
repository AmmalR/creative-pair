import { Section } from '../components/Section.jsx'

const items = [
  { title: 'UI/UX Design', desc: 'Wireframes, prototypes, and polished design systems.' },
  { title: 'Frontend Development', desc: 'React, Tailwind, performance and accessibility.' },
  { title: 'Integrations', desc: 'APIs, auth, analytics, payments, and more.' },
  { title: 'Consulting', desc: 'Architecture reviews, audits, and mentoring.' },
]

export default function Services() {
  return (
    <main>
      <Section title="Services" subtitle="Flexible engagement models tailored to your needs.">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(i => (
            <div key={i.title} className="card">
              <h3 className="h3">{i.title}</h3>
              <p className="p mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
