/* Portfolio UI Kit — case study detail view */

function CaseStudy({ project, next, onHome, onOpen }) {
  useReveal(project.id);
  return (
    <React.Fragment>
      <Navbar mode="project" onHome={onHome} />
      <section className="proj-hero">
        <div className="proj-meta">
          <Tag tone={project.tone}>{project.cat}</Tag>
          <Tag>{project.org}</Tag>
          <Tag>{project.year}</Tag>
        </div>
        <h1 className="proj-title">{project.title}</h1>
        <p className="proj-tagline">{project.tagline}</p>
      </section>

      <div className="proj-hero-img"><img src={project.hero} alt={project.title} /></div>

      <section className="proj-metrics">
        <div className="metrics-row">
          {project.metrics.map((m, i) => (
            <div className="metric" key={i}>
              <span className="metric-val">{m.val}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="proj-body">
        <div className="proj-sections">
          {project.sections.map((s, i) => (
            <div className="proj-section" key={i}>
              <span className="proj-section-label">{s.label}</span>
              <div className="proj-section-text">
                {s.paras.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {next && (
        <section className="proj-next-nav">
          <div className="proj-next-link" onClick={() => onOpen(next.id)}>
            <span className="proj-next-eyebrow">Next Project</span>
            <span className="proj-next-name">{next.title} →</span>
          </div>
        </section>
      )}

      <Footer />
    </React.Fragment>
  );
}

Object.assign(window, { CaseStudy });
