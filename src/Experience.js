import React, { useState } from "react";
import "./Experience.css";

// Company logos as SVG components
const CompanyLogos = {
  cgi: () => (
    <svg viewBox="0 0 100 100" className="company-logo">
      <rect x="20" y="20" width="60" height="60" rx="10" fill="#4b49ac"/>
      <text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">CGI</text>
    </svg>
  ),
  mphasis: () => (
    <svg viewBox="0 0 100 100" className="company-logo">
      <circle cx="50" cy="50" r="40" fill="#ff6b35"/>
      <text x="50" y="58" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Mphasis</text>
    </svg>
  ),
  techmahindra: () => (
    <svg viewBox="0 0 100 100" className="company-logo">
      <polygon points="50,15 85,85 15,85" fill="#00a0dc"/>
      <text x="50" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Tech M</text>
    </svg>
  )
};

function Experience() {
  const [activeCompany, setActiveCompany] = useState(null);

  const experiences = [
    {
      id: "cgi",
      company: "CGI",
      location: "Montreal, Canada",
      role: "Software Engineer",
      period: "Jun 2025 - Present",
      shortDesc: "Building scalable AI/ML systems and full-stack applications with microservices architecture",
      fullDetails: {
        achievements: [
          "Built full-stack applications with React, Node.js, MongoDB for real-time analytics dashboards",
          "Developed secure RESTful APIs using Spring MVC and Spring Security with OAuth2 and JWT validation",
          "Implemented role-based access control (RBAC) and SSO using OAuth2 and OpenID Connect, enhancing security by 40%",
          "Designed microservices architecture using Spring Boot, Docker, and Kubernetes",
          "Built asynchronous, event-driven services with Kafka and RabbitMQ for high-volume data transactions"
        ],
        technologies: ["React", "Node.js", "Spring Boot", "Docker", "Kubernetes", "MongoDB", "Kafka", "OAuth2"]
      }
    },
    {
      id: "mphasis", 
      company: "Mphasis",
      location: "India",
      role: "Full Stack Developer",
      period: "Sep 2021 – Nov 2022",
      shortDesc: "Full-stack development and cloud migration of enterprise applications",
      fullDetails: {
        achievements: [
          "Integrated front-end frameworks (React, Angular, Next.js) with backend APIs for AI-based web interfaces",
          "Developed enterprise applications using Java, Spring Boot, Microservices, and Hibernate",
          "Migrated monolithic legacy applications to cloud-native microservices on AWS/Azure",
          "Optimized NoSQL and SQL databases, reducing query latency by 50%",
          "Built real-time data pipelines using Apache Kafka and Airflow"
        ],
        technologies: ["Java", "Spring Boot", "React", "AWS", "Azure", "Microservices", "Kafka"]
      }
    },
    {
      id: "techmahindra",
      company: "Tech Mahindra", 
      location: "India",
      role: "Software Engineer",
      period: "Aug 2019 - Aug 2021",
      shortDesc: "REST API development and performance optimization for enterprise systems",
      fullDetails: {
        achievements: [
          "Created and maintained RESTful APIs for seamless integrations across systems",
          "Applied 12-Factor App principles for developing scalable enterprise applications",
          "Designed Spring Boot microservices leveraging Spring Cloud components",
          "Containerized applications using Docker and managed deployments on Kubernetes",
          "Improved database and API performance by 25% through optimization"
        ],
        technologies: ["Spring Boot", "Docker", "Kubernetes", "REST APIs", "Jenkins", "ELK Stack"]
      }
    }
  ];

  const handleCompanyClick = (companyId) => {
    setActiveCompany(activeCompany === companyId ? null : companyId);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        <p className="experience-subtitle">Click on a company to see my contributions</p>
        
        <div className="companies-grid">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className={`company-card ${activeCompany === exp.id ? 'active' : ''}`}
              onClick={() => handleCompanyClick(exp.id)}
            >
              <div className="card-main">
                <div className="logo-container">
                  {CompanyLogos[exp.id]()}
                </div>
                
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="company-location">{exp.location}</p>
                  <p className="company-role">{exp.role}</p>
                  <p className="company-period">{exp.period}</p>
                  <p className="company-short-desc">{exp.shortDesc}</p>
                </div>
                
                <div className="expand-icon">
                  {activeCompany === exp.id ? '−' : '+'}
                </div>
              </div>
              
              {activeCompany === exp.id && (
                <div className="card-details">
                  <div className="achievements-section">
                    <h4>Key Achievements</h4>
                    <ul className="achievements-list">
                      {exp.fullDetails.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {exp.fullDetails.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;