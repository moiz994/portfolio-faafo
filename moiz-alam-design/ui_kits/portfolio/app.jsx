/* Portfolio UI Kit — data + app routing */

const PROJECTS = [
  { id: "benchprep", num: "01", size: "featured", title: "BenchPrep", cat: "AI · B2B SaaS", tone: "blue", org: "Arbisoft", year: "2025",
    blurb: "LLM-based interview generation and scoring platform. Defined MVP, iterated on prompt design for evaluation reliability. Shipped to beta in <em>14 weeks</em>.",
    pills: ["Prompt Engineering","MVP Definition","0 to 1"],
    tagline: "An LLM-based interview generation and scoring platform — from zero to beta in 14 weeks.",
    hero: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"14 wks",label:"0 to beta"},{val:"AI-native",label:"Architecture"},{val:"3",label:"LLM iteration cycles"},{val:"B2B SaaS",label:"Product type"}],
    sections: [
      { label:"The Challenge", paras:["Hiring teams struggle to evaluate candidates consistently at scale. The question Arbisoft wanted to answer: could an AI system generate high-quality, role-specific interview questions and score responses reliably enough to be trusted by hiring teams?","The challenge wasn't just technical — it was defining what \"reliable\" meant, and what the minimum viable product needed to look like to test that without over-building."] },
      { label:"Approach", paras:["I defined the MVP scope with a tight constraint: prove that AI-generated questions and scoring could hold up in a real interview context before adding any workflow features.","Prompt engineering became a core product discipline. I ran <em>3 structured iteration cycles</em> on the scoring prompts, each informed by feedback from pilot interviewers."] },
      { label:"Outcome", paras:["BenchPrep shipped to beta in <em>14 weeks</em> — a full AI-native interview pipeline covering question generation, response capture, and LLM-based scoring with interviewer override.","Beta feedback confirmed scoring reliability was high enough for hiring teams to trust as a first-pass filter — the key validation gate."] }
    ] },
  { id: "juniper", num: "03", size: "featured-sm", title: "Juniper Platform", cat: "Internal Tools", tone: "red", org: "Arbisoft", year: "2025",
    blurb: "Internal innovation platform built solo in <em>2 weeks</em> using AI-assisted dev. Adopted by 200+ employees on day one.",
    pills: ["AI-assisted Dev","Solo Build","0 to 1"],
    tagline: "An internal innovation platform built solo in two weeks — adopted by 200+ employees on day one.",
    hero: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"2 wks",label:"Solo build"},{val:"200+",label:"Day-1 users"},{val:"AI-assisted",label:"Dev approach"},{val:"Internal",label:"Product type"}],
    sections: [
      { label:"The Challenge", paras:["Good ideas inside Arbisoft had nowhere to live. There was no single place to submit, refine, and rally support around internal innovation bets."] },
      { label:"Approach", paras:["I built Juniper solo in <em>2 weeks</em> using AI-assisted development — designing the data model, the submission flow, and the voting mechanics myself, then vibe-coding the implementation."] },
      { label:"Outcome", paras:["Juniper was adopted by <em>200+ employees on day one</em> and became the company's front door for internal product incubation."] }
    ] },
  { id: "edx-mobile", num: "04", title: "edX Mobile Rewrite", cat: "Mobile · EdTech", tone: "red", org: "edX.org", year: "2023",
    blurb: "Full iOS & Android rewrite delivered in <em>under 4 months</em>. Aligned cross-functional remote teams across time zones.",
    pills: ["iOS & Android","Remote Teams"],
    tagline: "A full iOS & Android rewrite of the edX learning apps, delivered in under four months.",
    hero: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"< 4 mo",label:"Full rewrite"},{val:"iOS + Android",label:"Platforms"},{val:"Remote",label:"Cross-tz teams"},{val:"EdTech",label:"Domain"}],
    sections: [
      { label:"The Challenge", paras:["The legacy edX apps had accumulated years of technical debt and were slowing every release. A full rewrite was needed — without pausing the product roadmap."] },
      { label:"Approach", paras:["I aligned cross-functional teams across multiple time zones around a shared scope and a tight delivery window, sequencing work so the rewrite and live product moved in parallel."] },
      { label:"Outcome", paras:["The full iOS and Android rewrite shipped in <em>under 4 months</em>, giving the apps a clean foundation for the payments work that followed."] }
    ] },
  { id: "in-app-payments", num: "02", title: "In-App Payments", cat: "Monetisation", tone: "yellow", org: "edX.org", year: "2023",
    blurb: "Google & Apple Pay across 3,000+ courses. New revenue stream generating <em>$700K+ in year one</em>.",
    pills: ["Google Pay","Apple Pay"],
    tagline: "Native in-app payments across 3,000+ courses — a new revenue stream worth $700K+ in year one.",
    hero: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"$700K+",label:"Year-one revenue"},{val:"3,000+",label:"Courses"},{val:"Apple + Google",label:"Pay rails"},{val:"Mobile",label:"Surface"}],
    sections: [
      { label:"The Challenge", paras:["edX could not monetise effectively on mobile. Course purchases pushed users to the web, leaking conversions at the moment of intent."] },
      { label:"Approach", paras:["I led the rollout of Google Pay and Apple Pay across <em>3,000+ courses</em>, navigating store policies, revenue-share math, and a phased launch to de-risk the rollout."] },
      { label:"Outcome", paras:["In-app payments became a new revenue stream generating <em>$700K+ in year one</em>."] }
    ] },
  { id: "interiors-source", num: "04", title: "Interiors Source", cat: "Marketplace · B2B", tone: "green", org: "Arbisoft", year: "2024",
    blurb: "B2B trade marketplace. AI-first discovery compressed 0 to 1 from <em>1 month to 2 weeks</em>.",
    pills: ["AI Discovery","Marketplace"],
    tagline: "A B2B trade marketplace where AI-first discovery compressed time-to-launch from a month to two weeks.",
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"2 wks",label:"0 to 1"},{val:"AI-first",label:"Discovery"},{val:"B2B",label:"Marketplace"},{val:"Trade",label:"Vertical"}],
    sections: [
      { label:"The Challenge", paras:["Trade buyers waste hours hunting for the right interior products across fragmented suppliers. The opportunity: an AI-first discovery layer that understood intent."] },
      { label:"Approach", paras:["I anchored the build around AI-first discovery from day one, which compressed the 0 to 1 timeline from <em>1 month to 2 weeks</em>."] },
      { label:"Outcome", paras:["The marketplace launched with AI discovery at its core, validating the thesis that AI could be the primary navigation model, not a bolt-on."] }
    ] },
  { id: "sigmal", num: "05", title: "Sigmal", cat: "AI · SaaS", tone: "blue", org: "Arbisoft", year: "2024",
    blurb: "AI-powered competitive intelligence. Led feasibility assessment to inform the build/no-build decision.",
    pills: ["AI","Feasibility"],
    tagline: "An AI-powered competitive intelligence concept — and the feasibility work behind the build decision.",
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"AI",label:"Core engine"},{val:"Feasibility",label:"My remit"},{val:"SaaS",label:"Product type"},{val:"B2B",label:"Audience"}],
    sections: [
      { label:"The Challenge", paras:["Before committing engineering investment, Arbisoft needed to know whether AI-powered competitive intelligence was technically feasible and commercially worthwhile."] },
      { label:"Approach", paras:["I led the feasibility assessment — mapping data sources, model capabilities, and the realistic quality bar — to inform a clear build / no-build decision."] },
      { label:"Outcome", paras:["The assessment gave leadership a grounded, evidence-based view of the opportunity and its risks."] }
    ] },
  { id: "multi-tenant-crm", num: "07", title: "Multi-Tenant CRM", cat: "SaaS · CRM", tone: "yellow", org: "Dubizzle Labs", year: "2021",
    blurb: "End-to-end SaaS CRM in <em>5 months</em>. Replaced legacy systems and migrated 4 regional tenants.",
    pills: ["SaaS","Migration"],
    tagline: "An end-to-end multi-tenant SaaS CRM, delivered in five months across four regional tenants.",
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"5 mo",label:"End to end"},{val:"4",label:"Regional tenants"},{val:"Multi-tenant",label:"Architecture"},{val:"CRM",label:"Domain"}],
    sections: [
      { label:"The Challenge", paras:["Legacy CRM systems across regions were fragmented and unmaintainable. A unified multi-tenant platform was needed without disrupting active operations."] },
      { label:"Approach", paras:["I scoped and delivered the end-to-end CRM in <em>5 months</em>, then planned and executed the migration of 4 regional tenants onto the new platform."] },
      { label:"Outcome", paras:["The new CRM replaced the legacy systems and consolidated four regional operations onto one maintainable platform."] }
    ] },
  { id: "product-bootcamp", num: "08", title: "Product Bootcamp", cat: "Community", tone: "green", org: "Arbisoft", year: "2025",
    blurb: "Arbisoft's first Product Bootcamp — 3 workshops, a company hackathon, 60+ participants, <em>2 greenlit bets</em>.",
    pills: ["Workshops","Mentorship"],
    tagline: "Arbisoft's first Product Bootcamp — workshops, a hackathon, and two greenlit product bets.",
    hero: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80&auto=format&fit=crop",
    metrics: [{val:"3",label:"Workshops"},{val:"60+",label:"Participants"},{val:"2",label:"Greenlit bets"},{val:"1",label:"Hackathon"}],
    sections: [
      { label:"The Challenge", paras:["Arbisoft had strong engineers but no shared product muscle. I wanted to build product thinking into the culture, not just a single team."] },
      { label:"Approach", paras:["I designed and ran the company's first Product Bootcamp: <em>3 workshops</em>, mentorship, and a company hackathon with 60+ participants."] },
      { label:"Outcome", paras:["The bootcamp produced <em>2 greenlit product bets</em> and a wider population fluent in product fundamentals."] }
    ] }
];

const JOURNEY = [
  { year:"2025 – Now", role:"Senior Product Manager", org:"Arbisoft", tone:"blue", desc:"Leading AI-native product bets. Ran the company's first Product Bootcamp. Building from 0 to 1 across multiple domains simultaneously." },
  { year:"2022 – 2025", role:"Product Manager", org:"Arbisoft · edX", tone:"red", desc:"Led the full edX mobile rewrite and launched in-app payments ($700K+ year one). Founded Juniper, Arbisoft's internal product incubation unit." },
  { year:"2020 – 2022", role:"Associate Product Manager", org:"Dubizzle Labs", tone:"yellow", desc:"Delivered a multi-tenant SaaS CRM in 5 months. Migrated 4 regional tenants. Launched a mobile field app driving ~75% efficiency gains." },
  { year:"2017 – 2020", role:"Business Analyst → Team Lead", org:"Rolustech", tone:"green", desc:"Started as a BA, promoted twice in 2.5 years. Scoped 4 CRM products. Built the foundation of structured thinking that still underpins how I work." },
  { year:"2013 – 2017", role:"BSc Engineering Sciences", org:"GIK Institute", tone:"mid", desc:"Photonics major. Built systems thinking, problem decomposition, and a Final Year Project that won 2nd prize. The engineer in me never really left." }
];

const PERSONAL = [
  { cat:"Music", title:"Guitarist", desc:"Music is my reset button. Picking up a guitar after a long product week does things no retrospective can. Creativity lives here too." },
  { cat:"Gaming", title:"PlayStation Gamer", desc:"A lifelong gamer. I see great UX in great game design — feedback loops, progression systems, the feeling that the product just <em>gets you</em>." },
  { cat:"Family", title:"Father of Twins", desc:"The best 0 to 1 I've ever shipped — twice, at the same time. Parenthood made me a better PM: more patient, more empathetic, faster at switching context." },
  { cat:"Football", title:"Manchester United Fan", desc:"A Red through the good years and the difficult rebuilds. If I can stay optimistic about United, I can stay optimistic about any product roadmap." }
];

function App() {
  const [view, setView] = useState({ name: "home" });
  const openProject = (id) => { setView({ name: "project", id }); window.scrollTo(0, 0); };
  const goHome = () => { setView({ name: "home" }); window.scrollTo(0, 0); };
  const viewAll = () => { setView({ name: "all" }); window.scrollTo(0, 0); };

  useReveal(view.name + (view.id || ""));

  if (view.name === "project") {
    const idx = PROJECTS.findIndex(p => p.id === view.id);
    const project = PROJECTS[idx];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];
    return <CaseStudy project={project} next={next} onHome={goHome} onOpen={openProject} />;
  }

  if (view.name === "all") {
    return (
      <React.Fragment>
        <Navbar mode="home" onHome={goHome} />
        <AllProjects projects={PROJECTS} onOpen={openProject} onHome={goHome} />
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Navbar mode="home" onHome={goHome} />
      <Hero />
      <AboutStrip />
      <WorkGrid projects={PROJECTS} onOpen={openProject} onViewAll={viewAll} />
      <Journey items={JOURNEY} />
      <Personal items={PERSONAL} />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

// init theme before paint
if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
