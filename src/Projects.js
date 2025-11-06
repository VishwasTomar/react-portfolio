import React, { useState } from "react";

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects = [
    {
      title: "E-commerce Platform",
      period: "Nov 2024 – Jan 2025",
      description: "Full-stack e-commerce platform with role-based access for administrators and users. Implemented Google OAuth2 authentication and secure payment gateway integration.",
      image: "🛒",
      technologies: ["Java", "Spring Boot", "Hibernate", "Spring Security", "MySQL", "Thymeleaf", "Bootstrap"],
      features: [
        "Role-based access control (Admin/User)",
        "Google OAuth2 authentication", 
        "Dynamic cart management",
        "Secure payment integration",
        "Admin panel for product management"
      ],
      githubLink: "https://github.com/VishwasTomar/Ecommerce-WebApp"
    },
    {
      title: "Plant Disease Detection",
      period: "Sep 2024 – Dec 2024", 
      description: "Designed a system to identify crop diseases using deep learning and computer vision techniques. Leveraged ResNet-18, VGG-16, and MobileNet-v2 models.",
      image: "🌿",
      technologies: ["Python", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      features: [
        "Plant disease detection using CNNs",
        "Fine-tuned ResNet-18, VGG-16, MobileNet-v2",
        "Data preprocessing and t-SNE visualization",
        "High accuracy classification results"
      ],
      githubLink: "https://github.com/karandeep7/Image-Classification-of-Plant-Diseases-Using-CNN"
    },
    {
      title: "Distributed Movie System",
      period: "Jan 2024 – Apr 2024",
      description: "Built a distributed system using web services and HTTP for seamless communication with fault tolerance and data consistency.",
      image: "🎬",
      technologies: ["Java", "SOAP", "Multithreading", "UDP", "Network Sockets"],
      features: [
        "Fault tolerance with dynamic timeouts",
        "Data consistency across replicas",
        "Optimized communication with Sockets/UDP",
        "Crash detection and recovery system"
      ],
      githubLink: "https://github.com/sayemomer/Ticketsync"
    },
    {
      title: "Train Booking System",
      period: "Dec 2024 – Jan 2025",
      description: "Built a feature-complete reservation system showcasing strong Java Fundamentals with custom JSON serialization/deserialization for data storage.",
      image: "🚆",
      technologies: ["Core Java", "OOP", "JSON Serialization", "Exception Handling"],
      features: [
        "Complete train reservation system",
        "Custom JSON data persistence",
        "Clean service layer architecture",
        "Seat allocation and cancellation features"
      ],
      githubLink: "https://github.com/VishwasTomar/Ticket-Booking"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <p className="projects-subtitle">Click on any project to view details</p>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
            className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleProject(index)}
          >
            {/* Project Preview (Always Visible) */}
            <div className="project-preview">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-basic-info">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <div className="expand-indicator">
                  {expandedProject === index ? '−' : '+'}
                </div>
              </div>
            </div>

            {/* Project Details (Visible when expanded) */}
            {expandedProject === index && (
              <div className="project-details">
                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="github-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>📁</span> View Code on GitHub
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;