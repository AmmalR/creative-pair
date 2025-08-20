export default function FeatureCard({ title, desc, icon='⚡' }) {
  return (
    <div className="card h-full">
      <div className="text-3xl">{icon}</div>
      <h3 className="h3 mt-3">{title}</h3>
      <p className="p mt-2">{desc}</p>
    </div>
  )
}
