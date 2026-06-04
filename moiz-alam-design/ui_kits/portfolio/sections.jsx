/* Portfolio UI Kit — page sections
   Hero, AboutStrip, WorkCard, WorkGrid, Journey, Personal, Contact. */

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-label">Senior Product Manager · Sydney</div>
        <h1 className="hero-heading">
          <span className="line">From ambiguity,</span>
          <span className="line italic">to clarity,</span>
          <span className="line">to shipped.</span>
        </h1>
        <p className="hero-sub">8 years turning unclear problems into shipped products — across AI, mobile, SaaS, and marketplaces. I don't just manage. I build, I orchestrate, and I move fast.</p>
        <div className="hero-bottom">
          <div className="hero-stats">
            {[["8+","Years"],["$700K+","Revenue unlocked"],["14 wks","0 to beta"],["200+","Day-1 users"]].map(([v,l],i,a) => (
              <React.Fragment key={l}>
                <div className="hero-stat"><span className="sv">{v}</span><span className="sl">{l}</span></div>
                {i < a.length-1 && <div className="stat-div"></div>}
              </React.Fragment>
            ))}
          </div>
          <div className="hero-actions">
            <Button variant="primary">See my work ↓</Button>
            <Button variant="secondary">Resume ↓</Button>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <img src="../../assets/hero-illustration-v2.png" alt="Moiz Alam" className="hero-photo" />
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}

function AboutStrip() {
  const tags = ["AI-Native","0 to 1","B2B SaaS","Marketplaces","EdTech","LLMs","Vibe-Coding"];
  return (
    <section className="about-strip">
      <div className="strip-inner">
        <p>Currently at <strong>Arbisoft</strong> — leading AI-native products, running product bootcamps, and vibe-coding things into existence.</p>
        <div className="strip-tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
      </div>
    </section>
  );
}

function WorkCard({ project, onOpen, scroll }) {
  const sizeCls = project.size ? " " + project.size : "";
  return (
    <a className={"work-card" + sizeCls} onClick={() => onOpen(project.id)}>
      {project.cover !== false && <div className="card-cover"><img src={project.hero} alt={project.title} loading="lazy" /></div>}
      <div className="card-top">
        <div className="card-num">{project.num}</div>
        <div className="card-tags">
          <Tag tone={project.tone}>{project.cat}</Tag>
          <Tag>{project.org}</Tag>
        </div>
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.blurb }} />
      </div>
      {!scroll && (
        <div className="card-footer">
          <div className="card-pills">{project.pills.map(p => <span key={p}>{p}</span>)}</div>
          <span className="card-link">Case study →</span>
        </div>
      )}
    </a>
  );
}

function WorkGrid({ projects, onOpen, onViewAll }) {
  const featured = [...projects].sort((a,b) => a.num.localeCompare(b.num)).slice(0, 4);
  const scrollRef = React.useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const cardStep = () => {
    const grid = scrollRef.current; if (!grid) return 340;
    const card = grid.querySelector('.work-card');
    return card ? card.offsetWidth + 14 : 340;
  };
  const update = () => {
    const g = scrollRef.current; if (!g) return;
    setAtStart(g.scrollLeft <= 1);
    setAtEnd(g.scrollLeft + g.offsetWidth >= g.scrollWidth - 1);
  };
  useEffect(() => { update(); }, []);
  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-header work-section-header">
          <div>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-sub">A few products I've taken from idea to shipped.</p>
          </div>
          <button className="btn-secondary" onClick={onViewAll}>View all projects →</button>
        </div>
        <div className="work-grid layout-scroll" ref={scrollRef} onScroll={update}>
          {featured.map(p => <WorkCard key={p.id} project={p} onOpen={onOpen} scroll={true} />)}
        </div>
        <div className="work-nav">
          <button className="work-nav-btn" disabled={atStart} aria-label="Previous"
            onClick={() => { scrollRef.current.scrollBy({ left: -cardStep(), behavior: 'smooth' }); }}>←</button>
          <button className="work-nav-btn" disabled={atEnd} aria-label="Next"
            onClick={() => { scrollRef.current.scrollBy({ left: cardStep(), behavior: 'smooth' }); }}>→</button>
        </div>
      </div>
    </section>
  );
}

function AllProjects({ projects, onOpen, onHome }) {
  return (
    <section className="work projects-page" id="work">
      <div className="container">
        <div className="section-header">
          <span className="back-link" onClick={onHome}>← Back home</span>
          <h2 className="section-title">All Projects</h2>
          <p className="section-sub">Everything I've shipped — from AI-native products to marketplaces and internal platforms.</p>
        </div>
        <div className="work-grid layout-image">
          {[...projects].sort((a,b) => a.num.localeCompare(b.num)).map(p => (
            <a className="work-card" key={p.id} onClick={() => onOpen(p.id)}>
              <div className="card-cover"><img src={p.hero} alt={p.title} loading="lazy" /></div>
              <div className="card-top">
                <div className="card-num">{p.num}</div>
                <div className="card-tags"><Tag tone={p.tone}>{p.cat}</Tag><Tag>{p.org}</Tag></div>
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: p.blurb }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey({ items }) {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Journey</h2>
          <p className="section-sub">From CRM analyst to AI-native PM.</p>
        </div>
        <div className="journey-list">
          {items.map((j, i) => (
            <div className="journey-item reveal" key={i}>
              <span className="journey-year">{j.year}</span>
              <div className="journey-body">
                <div className="journey-role-line">
                  <h3>{j.role}</h3>
                  <span className={"journey-co " + j.tone}>{j.org}</span>
                </div>
                <p>{j.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Personal({ items }) {
  return (
    <section className="personal" id="personal">
      <div className="personal-inner">
        <div className="personal-header">
          <h2 className="section-title">The human side.</h2>
          <p className="section-sub">Product is what I do. This is who I am.</p>
        </div>
        <div className="personal-list">
          {items.map((p, i) => (
            <div className="personal-item reveal" key={i}>
              <span className="personal-cat">{p.cat}</span>
              <div className="personal-body">
                <h3>{p.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="contact-eyebrow">Based in Sydney · Open to conversations</p>
        <h2 className="contact-heading">Let's build<br/><em>something.</em></h2>
        <div className="contact-actions">
          <Button variant="primary">moiz.alam@live.com</Button>
          <Button variant="secondary">LinkedIn ↗</Button>
          <Button variant="ghost">Resume ↓</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, AboutStrip, WorkCard, WorkGrid, AllProjects, Journey, Personal, Contact });
