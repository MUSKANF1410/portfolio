import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h3>Portfolio</h3>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#internship">Internship</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Sheikh Muskan Fathima</h1>

        <h2>Java Full Stack Developer</h2>

        <p>
          Computer Science Engineer passionate about Software Development,
          Artificial Intelligence, and Full Stack Applications.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" download>
            <button className="btn">Download Resume</button>
          </a>

          <a
            href="https://www.linkedin.com/in/sheikh-muskan-fathima-25216925b/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">LinkedIn</button>
          </a>

          <a
            href="https://github.com/MUSKANF1410"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">GitHub</button>
          </a>
        </div>
      </div>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering graduate from
          Dr. Ambedkar Institute of Technology with experience in
          Java Full Stack Development, Artificial Intelligence,
          Computer Vision, and Database Management.
        </p>

        <p>
          I enjoy building software solutions that solve
          real-world problems and continuously learning new
          technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skill-container">
          <div className="skill-card">Java</div>
          <div className="skill-card">Python</div>
          <div className="skill-card">C</div>
          <div className="skill-card">C++</div>
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">OpenCV</div>
          <div className="skill-card">JSP & Servlets</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="project-container">

          <div className="project-card">
            <h3>✈️ Air Ticket Booking System</h3>

            <p>
              Developed a web-based flight reservation system
              using Java, JSP, Servlets, JDBC, MySQL and
              Apache Tomcat.
            </p>

            <h4>Technologies Used</h4>

            <p>Java • JSP • Servlets • JDBC • MySQL</p>
          </div>

          <div className="project-card">
            <h3>🧠 AI Mental Health Companion</h3>

            <p>
              Developed an AI-powered virtual assistant with
              emotion detection, sentiment analysis and
              wellness support features.
            </p>

            <h4>Technologies Used</h4>

            <p>React • Node.js • Express.js • MongoDB</p>
          </div>

          <div className="project-card">
            <h3>✋ Hand Gesture Detection System</h3>

            <p>
              Built a real-time hand gesture recognition
              application using Computer Vision and OpenCV.
            </p>

            <h4>Technologies Used</h4>

            <p>Python • OpenCV • NumPy</p>
          </div>

        </div>
      </section>
      {/* Internship */}
<section id="internship" className="internship">
  <h2>Internship Experience</h2>

  <div className="internship-card">
    <h3>Mindset IT Solutions & Consultants</h3>

    <h4>Java Full Stack Developer Intern</h4>

    <p>February 2026 – May 2026</p>

    <ul>
      <li>
        Gained hands-on experience in Java Full Stack Development,
        including frontend and backend technologies.
      </li>

      <li>
        Developed and managed web applications using Java,
        HTML, CSS, JavaScript, and databases.
      </li>

      <li>
        Improved problem-solving, debugging, and software
        testing skills through practical projects.
      </li>

      <li>
        Worked on database connectivity and full-stack
        application development.
      </li>
    </ul>
  </div>
</section>
{/* Certifications */}
<section id="certifications" className="certifications">
  <h2>Certifications</h2>

  <div className="cert-container">

    <div className="cert-card">
      <h3>🏆 IBM SkillBuild</h3>

      <p>
        Generative AI Certification
      </p>
    </div>

    <div className="cert-card">
      <h3>🏆 Salesforce Trailhead</h3>

      <p>
        Agent Blazer Champion
      </p>
    </div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        <p>📧 sheikhmuskanfathima@gmail.com</p>
        <p>📱 +91 7204352830</p>
        <p>📍 Bengaluru, Karnataka</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Sheikh Muskan Fathima | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;