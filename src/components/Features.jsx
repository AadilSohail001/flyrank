const features = [
  {
    title: 'React + Vite',
    description:
      'A modern frontend stack with fast refresh, lean bundles, and a smooth developer experience.',
  },
  {
    title: 'AI-Assisted Workflow',
    description:
      'Built with Cursor, Claude, and ChatGPT — with every change reviewed before commit.',
  },
  {
    title: 'Clean Architecture',
    description:
      'Functional components, reusable sections, semantic HTML, and consistent styling.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <h2>Why FlyRank?</h2>
      <p className="section-lead">
        A focused landing page that demonstrates professional frontend fundamentals.
      </p>
      <ul className="feature-grid">
        {features.map((feature) => (
          <li key={feature.title} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Features
