import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", logo: "☕" },
        { name: "Python", logo: "🐍" },
        { name: "JavaScript", logo: "📜" },
        { name: "TypeScript", logo: "🔷" },
        { name: "SQL", logo: "🗄️" },
        { name: "HTML5", logo: "🌐" },
        { name: "CSS3", logo: "🎨" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", logo: "🍃" },
        { name: "React.js", logo: "⚛️" },
        { name: "Node.js", logo: "🟢" },
        { name: "Express.js", logo: "🚂" },
        { name: "Hibernate", logo: "💾" },
        { name: "Bootstrap", logo: "🎯" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", logo: "☁️" },
        { name: "Docker", logo: "🐳" },
        { name: "Kubernetes", logo: "⚓" },
        { name: "Jenkins", logo: "🤖" },
        { name: "Git", logo: "📚" },
        { name: "CI/CD", logo: "🔄" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", logo: "🐬" },
        { name: "PostgreSQL", logo: "🐘" },
        { name: "MongoDB", logo: "🍃" },
        { name: "Redis", logo: "🔴" },
        { name: "Oracle", logo: "🏢" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Apache Kafka", logo: "⚡" },
        { name: "REST APIs", logo: "🔗" },
        { name: "Microservices", logo: "🧩" },
        { name: "JUnit", logo: "🧪" },
        { name: "Maven", logo: "📦" },
        { name: "Postman", logo: "📬" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>
      <p className="skills-subtitle">Technologies I work with</p>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-header">
                    <div className="skill-logo">{skill.logo}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;