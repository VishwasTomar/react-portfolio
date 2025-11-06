import React from "react";

function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "Vishwastomar0702@gmail.com",
      link: "mailto:Vishwastomar0702@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+1 (438) 467-0707",
      link: "tel:+14384670707"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/vishwassinghTomar",
      link: "https://www.linkedin.com/in/vishwassinghtomar/"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/VishwasTomar",
      link: "https://github.com/VishwasTomar"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Montreal, QC, Canada",
      link: "https://www.google.com/maps/place/Montreal,+QC/@45.5590642,-73.8766813,11z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">
        I'm currently looking for new opportunities as a Software Engineer. 
        Feel free to reach out if you'd like to connect!
      </p>
      
      <div className="contact-container">
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <div className="contact-item" key={index}>
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-details">
                <h4>{item.label}</h4>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="contact-link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-cta">
          <h3>Let's Work Together!</h3>
          <p>
            I'm passionate about building scalable software solutions and 
            always excited to take on new challenges. Whether you have a 
            project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="cta-buttons">
            <a href="mailto:Vishwastomar0702@gmail.com" className="cta-button primary">
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/vishwassinghtomar/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;