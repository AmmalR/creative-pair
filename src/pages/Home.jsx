import Hero from '../components/Hero.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { Section } from '../components/Section.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Section id="features" title="Everything you need" subtitle="A modern, responsive template with best practices baked-in.">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Fast Vite Dev" desc="Enjoy lightning-fast DX with hot module replacement." icon="🚀" />
          <FeatureCard title="Tailwind Styling" desc="Build interfaces quickly with utility-first CSS." icon="🎨" />
          <FeatureCard title="Router Included" desc="Ship multi-page flows with React Router v6." icon="🧭" />
        </div>
      </Section>
      <Section id="cta" title="Ready to launch?">
        <div className="flex justify-center">
          <a className="btn" href="/contact">Let's Talk</a>
        </div>
      </Section>
    </main>
  )
}
