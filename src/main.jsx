import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'Ignite Media Sports',
    type: 'Client project · United States',
    description: 'A web platform created for a US-based sports media client, built to bring their digital presence and content together.',
    tags: ['Client', 'JavaScript'],
    year: '2026',
    className: 'project-ignite',
    mark: 'ignite',
    href: 'https://github.com/kennntyyy/ignitemediasports',
    live: 'https://ignitemediasports.vercel.app',
  },
  {
    title: 'PD Project Manager',
    type: 'Internship · Bukolabs Software Development Services',
    description: 'A project management system developed as my first client project during my internship at Bukolabs.',
    tags: ['Internship', 'Full-stack'],
    year: '2026',
    className: 'project-pd',
    mark: 'pd',
    href: 'https://github.com/kennntyyy/PD-Project-Manager-Bukolabs',
  },
  {
    title: 'Task Manager',
    type: 'Internship · Full-stack application',
    description: 'A full-stack task management application with authentication and create, read, update, and delete task flows.',
    tags: ['Internship', 'Full-stack'],
    year: '2026',
    className: 'project-task',
    mark: 'task',
    href: 'https://github.com/kennntyyy/TaskManager-Fullstack',
  },
  {
    title: 'Bukolabs Planner',
    type: 'Internship · Planning tool',
    description: 'A collaborative planning tool created with the Bukolabs team to help organize work and keep projects moving.',
    tags: ['Internship', 'Planning'],
    year: '2026',
    className: 'project-planner',
    mark: 'planner',
    href: 'https://github.com/angelo-daniel/Bukolabs-planner',
  },
  {
    title: 'Bohol Lens',
    type: 'Thesis · Augmented reality',
    description: 'An AR museum experience for the Museum of Bohol that brings local history and cultural artifacts to life through interactive digital layers.',
    tags: ['Thesis', 'AR'],
    year: '2025',
    className: 'project-bohol',
    mark: 'bohol',
    demo: 'https://404-reality-not-found.vercel.app',
    video: 'https://youtu.be/DnkugF1ke1k',
  },
]

const categories = ['All work', 'Client', 'Internship', 'Thesis']

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const filteredProjects = projects.filter((project) => activeCategory === 'All work' || project.tags.includes(activeCategory))
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="/" aria-label="Kent Paul Vergara home"><span className="logo-dot" /><span>Kent Paul Vergara</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? 'Close' : 'Menu'}</button>
      </nav>

      <section className="hero container">
        <div className="eyebrow"><span className="eyebrow-line" /> React & full-stack web developer</div>
        <h1>Web experiences,<br /><em>thoughtfully</em> built.</h1>
        <div className="hero-bottom">
          <p className="hero-intro">I’m Kent — a web developer focused on frontend and backend development with ReactJS and NestJS, supported by a broad foundation across web and software development.</p>
          <button className="circle-button" onClick={scrollToWork} aria-label="Scroll to selected work"><span>↓</span></button>
        </div>
      </section>

      <section className="work-section container" id="work">
        <div className="section-header">
          <div><p className="section-kicker">Selected work</p><h2>Projects I’m proud of.</h2></div>
          <span className="project-count">{String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </div>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.title}>
              <a className={`project-visual ${project.className}`} href={project.href} target={project.href ? '_blank' : undefined} rel={project.href ? 'noreferrer' : undefined} aria-label={`View ${project.title}`}>
                <div className={`project-mark ${project.mark}`}>
                  {project.mark === 'ignite' && <><span className="ignite-bolt">✦</span><span>ignite</span></>}
                  {project.mark === 'pd' && <><span className="pd-shape">PD</span><span>project manager</span></>}
                  {project.mark === 'task' && <><span className="task-check">✓</span><span>task manager</span></>}
                  {project.mark === 'planner' && <><span className="planner-grid">▦</span><span>planner</span></>}
                  {project.mark === 'bohol' && <><span className="bohol-mountain">⌁</span><span>bohol lens</span></>}
                </div>
                {project.title !== 'Bohol Lens' && <span className="visual-label">View project <ArrowUpRight /></span>}
              </a>
              <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span className="project-year">{project.year}</span></div>
              <p className="project-description">{project.description}</p>
              {project.live && <a className="live-link" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>}
              {project.demo && <div className="project-links"><a className="live-link" href={project.demo} target="_blank" rel="noreferrer">Live website <ArrowUpRight /></a><a className="live-link" href={project.video} target="_blank" rel="noreferrer">Watch video <ArrowUpRight /></a></div>}
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-layout">
          <div className="section-kicker">A little about me</div>
          <div className="about-copy">
            <h2>Good work lives somewhere between <em>curiosity</em> and clarity.</h2>
            <p>I’m Kent Paul Vergara, a web developer who builds responsive frontend experiences and reliable backend systems. I work primarily with ReactJS and NestJS, turning ideas into useful products for clients, teams, and communities.</p>
            <a className="text-link" href="https://github.com/kennntyyy" target="_blank" rel="noreferrer">View my GitHub <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="skills-section container" id="skills">
        <div className="section-kicker">Tools I use</div>
        <div className="skills-layout">
          <h2>From interface<br /><em>to implementation.</em></h2>
          <div className="skills-list">
            <div className="skill-group"><span>Frontend</span><p>ReactJS · HTML · CSS · JavaScript</p></div>
            <div className="skill-group"><span>Backend & databases</span><p>NestJS · MySQL · PHP · Laravel · Django</p></div>
            <div className="skill-group"><span>Software development</span><p>Python · Java</p></div>
            <div className="skill-group"><span>AI-assisted development</span><p>Claude Code · GitHub Copilot · OpenCode · Codex</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <div className="contact-kicker">Have a good one?</div>
        <h2>Let’s make something<br /><em>worth talking about.</em></h2>
        <a className="contact-email" href="https://github.com/kennntyyy" target="_blank" rel="noreferrer">github.com/kennntyyy <ArrowUpRight /></a>
        <div className="footer-row"><span>© 2026 Kent Paul Vergara</span><div className="socials"><a href="https://github.com/kennntyyy" target="_blank" rel="noreferrer">GitHub</a></div><span>Based in Bohol, PH</span></div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
