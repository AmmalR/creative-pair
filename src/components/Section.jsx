export function Section({ id, title, subtitle, children, cta }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-10 text-center">
          {title && <h2 className="h2">{title}</h2>}
          {subtitle && <p className="p mt-3">{subtitle}</p>}
          {cta}
        </div>
        {children}
      </div>
    </section>
  )
}
