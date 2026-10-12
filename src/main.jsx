import React, { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

// Leave a value empty ('') to hide that link on the page.
const contact = {
  email: 'kp.vergz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kent-paul-vergara-a81941173/',
  github: 'https://github.com/kennntyyy',
  resume: '', // e.g. '/resume.pdf' after adding the file to /public
}

// Optional looping background clip for the hero, e.g. '/videos/hero.mp4' in /public/videos.
const heroVideo = ''

// role: one line on what you did. preview: optional hover clip, e.g. '/videos/pd.mp4'.
const projects = [
  {
    title: 'Ignite Media Sports',
    type: 'Client project · United States',
    description: 'A web platform created for a US-based sports media client, built to bring their digital presence and content together.',
    role: '',
    stack: ['React', 'Vite'],
    tags: ['Client', 'JavaScript'],
    year: '2026',
    className: 'project-ignite',
    mark: 'ignite',
    href: 'https://github.com/kennntyyy/ignitemediasports',
    live: 'https://ignitemediasports.vercel.app',
    preview: '',
  },
  {
    title: 'PD Project Manager',
    type: 'Internship · Bukolabs Software Development Services',
    description: 'A project management system developed as my first client project during my internship at Bukolabs.',
    role: '',
    stack: ['React', 'PrimeReact', 'NestJS', 'TypeORM', 'MySQL', 'JWT'],
    tags: ['Internship', 'Full-stack'],
    year: '2026',
    className: 'project-pd',
    mark: 'pd',
    href: 'https://github.com/kennntyyy/PD-Project-Manager-Bukolabs',
    preview: '',
  },
  {
    title: 'Task Manager',
    type: 'Internship · Full-stack application',
    description: 'A full-stack task management application with authentication and create, read, update, and delete task flows.',
    role: '',
    stack: ['React', 'PrimeReact', 'NestJS', 'TypeORM', 'MySQL'],
    tags: ['Internship', 'Full-stack'],
    year: '2026',
    className: 'project-task',
    mark: 'task',
    href: 'https://github.com/kennntyyy/TaskManager-Fullstack',
    preview: '',
  },
  {
    title: 'Bukolabs Planner',
    type: 'Internship · Planning tool',
    description: 'A collaborative planning tool created with the Bukolabs team to help organize work and keep projects moving.',
    role: '',
    stack: [],
    tags: ['Internship', 'Planning'],
    year: '2026',
    className: 'project-planner',
    mark: 'planner',
    preview: '',
  },
  {
    title: 'Bohol Lens',
    type: 'Thesis · Augmented reality',
    description: 'An AR museum experience for the Museum of Bohol that brings local history and cultural artifacts to life through interactive digital layers.',
    role: '',
    stack: [],
    tags: ['Thesis', 'AR'],
    year: '2025',
    className: 'project-bohol',
    mark: 'bohol',
    href: 'https://404-reality-not-found.vercel.app',
    demo: 'https://404-reality-not-found.vercel.app',
    video: 'https://youtu.be/DnkugF1ke1k',
    preview: '',
  },
]

const categories = ['All work', 'Client', 'Internship', 'Thesis']
const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function ArrowUpRight() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function useReveal(deps) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, deps)
}

function ProjectCard({ project, featured }) {
  const videoRef = useRef(null)
  const VisualTag = project.href ? 'a' : 'div'
  const linkProps = project.href ? { href: project.href, target: '_blank', rel: 'noreferrer', 'aria-label': `View ${project.title}` } : {}
  const playPreview = () => { if (!reducedMotion) videoRef.current?.play().catch(() => {}) }
  const stopPreview = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <article className={`project-card reveal ${featured ? 'featured' : ''}`} onMouseEnter={playPreview} onMouseLeave={stopPreview}>
      <VisualTag className={`project-visual ${project.className} ${project.href ? 'is-link' : ''}`} {...linkProps}>
        <div className={`project-mark ${project.mark}`}>
          {project.mark === 'ignite' && <><span className="ignite-bolt">✦</span><span>ignite</span></>}
          {project.mark === 'pd' && <><span className="pd-shape">PD</span><span>project manager</span></>}
          {project.mark === 'task' && <><span className="task-check">✓</span><span>task manager</span></>}
          {project.mark === 'planner' && <><span className="planner-grid">▦</span><span>planner</span></>}
          {project.mark === 'bohol' && <><span className="bohol-mountain">⌁</span><span>bohol lens</span></>}
        </div>
        {project.preview && <video ref={videoRef} className="project-preview" src={project.preview} muted loop playsInline preload="metadata" aria-hidden="true" />}
        {project.href && <span className="visual-label">View project <ArrowUpRight /></span>}
      </VisualTag>
      <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><span className="project-year">{project.year}</span></div>
      <p className="project-description">{project.description}</p>
      {project.role && <p className="project-role"><span>What I did —</span> {project.role}</p>}
      {project.stack.length > 0 && <ul className="project-stack" aria-label="Tech stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>}
      {project.live && <a className="live-link" href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>}
      {project.demo && <div className="project-links"><a className="live-link" href={project.demo} target="_blank" rel="noreferrer">Live website <ArrowUpRight /></a><a className="live-link" href={project.video} target="_blank" rel="noreferrer">Watch video <ArrowUpRight /></a></div>}
    </article>
  )
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All work')
  const [menuOpen, setMenuOpen] = useState(false)
  const filteredProjects = projects.filter((project) => activeCategory === 'All work' || project.tags.includes(activeCategory))
  useReveal([activeCategory])
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <nav className="nav container">
        <a className="logo" href="/" aria-label="Kent Paul Vergara home"><span className="logo-dot" /><span>Kent Paul Vergara</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="nav-links">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          {contact.resume && <a className="nav-resume" href={contact.resume} target="_blank" rel="noreferrer">Résumé</a>}
        </div>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-links">{menuOpen ? 'Close' : 'Menu'}</button>
      </nav>

      <section className="hero container">
        {heroVideo && !reducedMotion && <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline aria-hidden="true" />}
        <div className="eyebrow intro-fade"><span className="eyebrow-line" /> React & full-stack web developer</div>
        <h1>
          <span className="line"><span>Web experiences,</span></span>
          <span className="line"><span><em>thoughtfully</em> built.</span></span>
        </h1>
        <div className="hero-bottom intro-fade">
          <div>
            <p className="hero-intro">I’m Kent — a web developer focused on frontend and backend development with ReactJS and NestJS, supported by a broad foundation across web and software development.</p>
            <p className="status"><span className="status-dot" aria-hidden="true" />Open to full-time roles and freelance projects</p>
          </div>
          <button className="circle-button" onClick={scrollToWork} aria-label="Scroll to selected work"><span>↓</span></button>
        </div>
      </section>

      <section className="work-section container" id="work">
        <div className="section-header reveal">
          <div><p className="section-kicker">Selected work</p><h2>Projects I’m proud of.</h2></div>
          <span className="project-count">{String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} featured={index === 0} />)}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container about-layout reveal">
          <div className="section-kicker">A little about me</div>
          <div className="about-copy">
            <h2>Good work lives somewhere between <em>curiosity</em> and clarity.</h2>
            <p>I’m Kent Paul Vergara, a web developer who builds responsive frontend experiences and reliable backend systems. I work primarily with ReactJS and NestJS, turning ideas into useful products for clients, teams, and communities.</p>
            <a className="text-link" href={contact.github} target="_blank" rel="noreferrer">View my GitHub <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="skills-section container" id="skills">
        <div className="section-kicker">Tools I use</div>
        <div className="skills-layout reveal">
          <h2>From interface<br /><em>to implementation.</em></h2>
          <div className="skills-list">
            <div className="skill-group"><span>Frontend & React</span><p>ReactJS · HTML · CSS · JavaScript · Responsive UI · Component design · State management</p></div>
            <div className="skill-group"><span>Backend & databases</span><p>NestJS · REST APIs · MySQL · Supabase · PHP · Laravel · Django</p></div>
            <div className="skill-group"><span>Software development</span><p>Python · Java</p></div>
            <div className="skill-group"><span>AI-assisted development</span><p>Claude Code · GitHub Copilot · OpenCode · Codex</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section container" id="contact">
        <div className="reveal">
          <div className="contact-kicker">Have a good one?</div>
          <h2>Let’s make something<br /><em>worth talking about.</em></h2>
          {contact.email && <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email} <ArrowUpRight /></a>}
          <div className="contact-links">
            {contact.linkedin && <a className="live-link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>}
            {contact.github && <a className="live-link" href={contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>}
            {contact.resume && <a className="live-link" href={contact.resume} target="_blank" rel="noreferrer">Download résumé <span className="arrow" aria-hidden="true">↓</span></a>}
          </div>
        </div>
        <div className="footer-row">
          <span>© 2026 Kent Paul Vergara</span>
          <div className="socials">
            {contact.github && <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>}
            {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          </div>
          <span>Based in Bohol, PH</span>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
