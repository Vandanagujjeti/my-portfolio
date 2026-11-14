
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

// Navigation Bar
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Vandana<span>.</span></h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

// Home Page
function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="tagline">WELCOME TO MY PORTFOLIO</p>

        <h1>Hello, I'm <span>Vandana</span></h1>

        <h2>MCA Student | Aspiring Software Developer</h2>

        <p>
          I am passionate about programming, software development
          and exploring new technologies. I enjoy learning,
          building and improving my technical skills.
        </p>

        <NavLink to="/projects" className="btn">
          Explore My Work →
        </NavLink>
      </div>

      <div className="hero-circle">
        <div className="code-icon">{"</>"}</div>
        <h3>Future Developer</h3>
        <p>Learning • Building • Growing</p>
      </div>
    </section>
  )
}

// About Page
function About() {
  return (
    <section className="page-section">
      <h1>About <span>Me</span></h1>
      <p className="subtitle">Get to know me better</p>

      <div className="about-card">
        <h2>My Journey</h2>

        <p>
          I am a Bachelor of Computer Applications graduate
          currently pursuing my Master of Computer Applications.
          I am interested in programming, web development and
          learning new technologies.
        </p>

        <p>
          My goal is to strengthen my technical knowledge,
          develop practical applications and build a career
          in the IT industry.
        </p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h2>🎓 Education</h2>
          <p>Master of Computer Applications (MCA)</p>
          <p>Bachelor of Computer Applications (BCA), 2025</p>
        </div>

        <div className="info-card">
          <h2>🎯 Career Goal</h2>
          <p>
            To become a skilled software developer and
            continuously grow in the technology field.
          </p>
        </div>
      </div>
    </section>
  )
}

// Skills Page
function Skills() {
  const skills = [
    'Python',
    'Java',
    'JavaScript',
    'ReactJS',
    'HTML5',
    'CSS3',
    'SQL',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Git & GitHub'
  ]

  return (
    <section className="page-section">
      <h1>Technical <span>Skills</span></h1>
      <p className="subtitle">Technologies and tools I work with</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            ✦ {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

// Projects Page
function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website developed using ReactJS and CSS.',
      tech: 'ReactJS • CSS'
    },
    {
      title: 'Java Practical Programs',
      description: 'Academic programming exercises demonstrating Java concepts and collections.',
      tech: 'Java'
    },
    {
      title: 'SQL & Database Practicals',
      description: 'Academic exercises involving database queries and data management.',
      tech: 'SQL • DBMS'
    }
  ]

  return (
    <section className="page-section">
      <h1>My <span>Projects</span></h1>
      <p className="subtitle">Academic and personal work</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// Contact Page

function Contact() {
  return (
    <section className="page-section">
      <h1>Let's <span>Connect</span></h1>

      <p className="subtitle">
        Interested in my work or want to collaborate?
        I'd love to hear from you!
      </p>

      <div className="contact-card">
        <h2>Get in Touch</h2>

        <p>
          Feel free to contact me for professional enquiries,
          opportunities and collaborations.
        </p>

        <div className="contact-links">

          <a
            href="mailto:vandanagujjeti02@gmail.com?subject=Portfolio%20Enquiry"
            className="contact-link"
          >
            ✉ Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/vandanagujjeti"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            in LinkedIn
          </a>

          <a
            href="https://github.com/Vandanagujjeti"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            &lt;/&gt; GitHub
          </a>

        </div>
      </div>
    </section>
  )
}

// Main Application
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        Made with ♥ by Vandana | © 2026
      </footer>
    </BrowserRouter>
  )
}

export default App
