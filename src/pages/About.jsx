import { Section } from '../components/Section.jsx'

export default function About() {
  return (
    <main>
      <Section title="About Us" subtitle="We craft clean, fast, and scalable web apps.">
        <div className="prose max-w-none">
          <p className="p">Our team blends design and engineering to build digital products that people love to use. We obsess over details, performance, and accessibility.</p>
          <p className="p mt-4">This starter gives you a rock-solid foundation—customize the content and styles to match your brand.</p>
        </div>
      </Section>
    </main>
  )
}
