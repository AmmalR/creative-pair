import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'
import { Section } from '../components/Section.jsx'

export default function Blog() {
  return (
    <main>
      <Section title="Blog" subtitle="News, notes, and tutorials.">
        <div className="grid gap-6">
          {posts.map(p => (
            <article key={p.slug} className="card">
              <h3 className="h3"><Link to={`/blog/${p.slug}`} className="hover:text-brand">{p.title}</Link></h3>
              <p className="text-sm text-gray-500 mt-1">{new Date(p.date).toLocaleDateString()}</p>
              <p className="p mt-3">{p.summary}</p>
              <Link to={`/blog/${p.slug}`} className="btn mt-4 w-fit">Read more</Link>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}
