import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts.js'
import { Section } from '../components/Section.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="container py-16">
        <h2 className="h2">Post not found</h2>
        <Link to="/blog" className="btn mt-4">Back to Blog</Link>
      </main>
    )
  }

  return (
    <main>
      <Section title={post.title} subtitle={new Date(post.date).toLocaleDateString()}>
        <div className="prose max-w-none">
          <p className="p">{post.content}</p>
        </div>
        <div className="mt-8">
          <Link to="/blog" className="btn">Back to Blog</Link>
        </div>
      </Section>
    </main>
  )
}
