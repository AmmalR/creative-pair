import { Section } from '../components/Section.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
  return (
    <main>
      <Section title="Contact Us" subtitle="Tell us about your project. We'll get back within 1 business day.">
        <ContactForm />
      </Section>
    </main>
  )
}
