import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardName) => {
    setActiveCard(activeCard === cardName ? null : cardName);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-main">
            <p className="about-intro">
              Hi! I'm <span className="highlight">Vishwas Tomar</span>, a passionate Software Engineer 
              with 3+ years of experience building AI/ML systems and microservices across 
              international markets.
            </p>

            <p>
              My career began with a curiosity about solving real-world problems through code, 
              which evolved into expertise in cloud-native applications and scalable 
              microservices architecture.
            </p>

            <p>
              Having recently completed my <span className="highlight">Master's in Applied Computer Science</span> 
              at Concordia University, I'm now seeking software developer roles across Canada
              where I can apply my combined academic and industry experience to innovative projects.
            </p>
          </div>
          
          <div className="about-highlights">
            {/* My Focus Card */}
            <div 
              className={`highlight-card ${activeCard === 'focus' ? 'active' : ''}`}
              onClick={() => handleCardClick('focus')}
            >
              <div className="card-header">
                <div className="icon">🎯</div>
                <h3>My Focus</h3>
                <div className="expand-icon">
                  {activeCard === 'focus' ? '−' : '+'}
                </div>
              </div>
              
              <p className="short-description">
                Scalable systems, AI/ML solutions, and cloud-native applications
              </p>
              
              {activeCard === 'focus' && (
                <div className="card-expanded">
                  <div className="expanded-content">
                    <h4>Technical Expertise:</h4>
                    <div className="expertise-grid">
                      <div className="expertise-item">
                        <strong>Backend Development</strong>
                        <ul>
                          <li>Java, Spring Boot, Microservices</li>
                          <li>Python, FastAPI, Flask</li>
                          <li>RESTful & SOAP APIs</li>
                          <li>Apache Kafka, RabbitMQ</li>
                        </ul>
                      </div>
                      
                      <div className="expertise-item">
                        <strong>Frontend & Full-Stack</strong>
                        <ul>
                          <li>React.js, Angular, Node.js</li>
                          <li>TypeScript, JavaScript (ES6+)</li>
                          <li>HTML5, CSS3, Bootstrap</li>
                          <li>Responsive Web Design</li>
                        </ul>
                      </div>
                      
                      <div className="expertise-item">
                        <strong>Cloud & DevOps</strong>
                        <ul>
                          <li>AWS (EC2, S3, Lambda, RDS)</li>
                          <li>Docker, Kubernetes, CI/CD</li>
                          <li>Azure, GCP, Terraform</li>
                          <li>Jenkins, GitHub Actions</li>
                        </ul>
                      </div>
                      
                      <div className="expertise-item">
                        <strong>AI/ML & Data</strong>
                        <ul>
                          <li>TensorFlow, PyTorch, Scikit-learn</li>
                          <li>Computer Vision, CNN Models</li>
                          <li>MySQL, PostgreSQL, MongoDB</li>
                          <li>Data Modeling, Optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My Passion Card */}
            <div 
              className={`highlight-card ${activeCard === 'passion' ? 'active' : ''}`}
              onClick={() => handleCardClick('passion')}
            >
              <div className="card-header">
                <div className="icon">🚀</div>
                <h3>My Passion</h3>
                <div className="expand-icon">
                  {activeCard === 'passion' ? '−' : '+'}
                </div>
              </div>
              
              <p className="short-description">
                Transforming complex requirements into elegant, impactful solutions
              </p>
              
              {activeCard === 'passion' && (
                <div className="card-expanded">
                  <div className="expanded-content">
                    <h4>What Drives Me:</h4>
                    
                    <div className="passion-points">
                      <div className="passion-item">
                        <span className="passion-emoji">💡</span>
                        <div>
                          <strong>Problem Solving</strong>
                          <p>Breaking down complex challenges into elegant, scalable solutions that deliver real business value.</p>
                        </div>
                      </div>
                      
                      <div className="passion-item">
                        <span className="passion-emoji">🏗️</span>
                        <div>
                          <strong>Architecture Design</strong>
                          <p>Creating robust, maintainable system architectures that stand the test of time and scale.</p>
                        </div>
                      </div>
                      
                      <div className="passion-item">
                        <span className="passion-emoji">🤖</span>
                        <div>
                          <strong>AI Innovation</strong>
                          <p>Building intelligent systems that learn, adapt, and solve problems in innovative ways.</p>
                        </div>
                      </div>
                      
                      <div className="passion-item">
                        <span className="passion-emoji">☁️</span>
                        <div>
                          <strong>Cloud Excellence</strong>
                          <p>Leveraging cloud technologies to build scalable, cost-effective, and high-performance applications.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="passion-quote">
                      <p>"I believe great software should not only work well but also solve real business problems elegantly while being scalable and maintainable for the long term."</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* My Journey Card */}
            <div 
              className={`highlight-card ${activeCard === 'journey' ? 'active' : ''}`}
              onClick={() => handleCardClick('journey')}
            >
              <div className="card-header">
                <div className="icon">🎓</div>
                <h3>My Journey</h3>
                <div className="expand-icon">
                  {activeCard === 'journey' ? '−' : '+'}
                </div>
              </div>
              
              <p className="short-description">
                From Bachelor's to Master's, building expertise across continents
              </p>
              
              {activeCard === 'journey' && (
                <div className="card-expanded">
                  <div className="expanded-content">
                    <div className="timeline">
                      <div className="timeline-item current">
                        <div className="timeline-year">2025 - Present</div>
                        <div className="timeline-content">
                          <strong>Software Engineer</strong>
                          <p>CGI, Montreal, Canada</p>
                          <em>Full-stack applications, React, Node.js, Spring Boot, Microservices, Real-time analytics dashboards</em>
                        </div>
                      </div>
                      
                      <div className="timeline-item">
                        <div className="timeline-year">2023 - 2025</div>
                        <div className="timeline-content">
                          <strong>Master of Applied Computer Science</strong>
                          <p>Concordia University, Montreal, Canada</p>
                          <em>Advanced Algorithms, Cloud Computing, Machine Learning, Distributed Systems</em>
                        </div>
                      </div>
                      
                      <div className="timeline-item">
                        <div className="timeline-year">2021 - 2022</div>
                        <div className="timeline-content">
                          <strong>Full Stack Developer</strong>
                          <p>Mphasis, India</p>
                          <em>Java, Spring Boot, React, Angular, AWS, Microservices, Database Optimization (50% latency reduction)</em>
                        </div>
                      </div>
                      
                      <div className="timeline-item">
                        <div className="timeline-year">2019 - 2021</div>
                        <div className="timeline-content">
                          <strong>Software Engineer</strong>
                          <p>Tech Mahindra, India</p>
                          <em>REST APIs, Spring Boot, Docker, Kubernetes, CI/CD, Performance Tuning (25% throughput improvement)</em>
                        </div>
                      </div>
                      
                      <div className="timeline-item">
                        <div className="timeline-year">2018 - 2022</div>
                        <div className="timeline-content">
                          <strong>Bachelor of Technology</strong>
                          <p>Pandit Deendayal Energy University, India</p>
                          <em>Information and Communication Technology - First Class Honors</em>
                        </div>
                      </div>
                    </div>
                    
                    <div className="journey-stats">
                      <div className="stat-item">
                        <strong>3+</strong>
                        <span>Years Experience</span>
                      </div>
                      <div className="stat-item">
                        <strong>10+</strong>
                        <span>Projects Completed</span>
                      </div>
                      <div className="stat-item">
                        <strong>5</strong>
                        <span>Technologies Mastered</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;