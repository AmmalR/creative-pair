import React, { useState } from 'react';
import './ContactPage.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // lightweight icons

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✅ Thank you for your message! We’ll get back to you within 24 hours.');
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <div className="container">
          <h1>Let’s Create Something Amazing</h1>
          <p>
            Ready to transform your vision into reality? 
            Get in touch with us and let’s discuss how we can bring your ideas to life.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="contact-content container">
        
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We’d love to hear about your project and explore how we can help you achieve your goals.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon"><Mail size={22} /></div>
              <div className="details">
                <h3>Email Us</h3>
                <p>hr.creativepair@gmail.com</p>
                <span>We respond within 24 hours</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon"><Phone size={12} /></div>
              <div className="details">
                <h3>Call Us</h3>
                <p>+92 327-4968541</p>
                <span>Mon–Fri, 9AM–5PM PST</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon"><MapPin size={22} /></div>
              <div className="details">
                <h3>Visit Us</h3>
                <p>Remote-First Company</p>
                <span>Serving clients worldwide</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon"><Clock size={22} /></div>
              <div className="details">
                <h3>Response Time</h3>
                <p>&lt; 24 Hours</p>
                <span>Quick project turnaround</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <p>Tell us about your project and we’ll get back to you with a detailed proposal.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project, goals, timeline, and budget..."
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
