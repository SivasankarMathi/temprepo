import React, { useState } from 'react'

export default function Contact({ onBack }) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    subject: 'General Inquiry',
    message: 'Hello, this is a sample message to test the contact page!'
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <button type="button" className="nav-btn" onClick={onBack}>
          ← Back to Home
        </button>
        <h2>Contact Us</h2>
        <p className="contact-subtitle">Get in touch with our team or send us a message</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h3>Contact Details</h3>
          <p className="info-desc">Feel free to reach out via any of the channels below:</p>
          <ul className="info-list">
            <li>
              <strong>Email:</strong> support@example.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (555) 123-4567
            </li>
            <li>
              <strong>Address:</strong> 100 Innovation Way, Suite 400, Tech City, CA 94016
            </li>
            <li>
              <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM PST
            </li>
          </ul>
        </div>

        <div className="contact-form-card">
          <h3>Send a Message</h3>
          {formSubmitted ? (
            <div className="success-message">
              <p>✅ Thank you! Your message has been sent successfully.</p>
              <button
                type="button"
                className="nav-btn"
                onClick={() => setFormSubmitted(false)}
                style={{ marginTop: '12px' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
