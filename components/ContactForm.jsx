import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">Start Your AI Journey</h2>
            <p className="contact-subtitle">
              Ready to transform your business with AI? Let's discuss your specific challenges and opportunities in a free discovery call.
            </p>
            
            <div className="contact-benefits">
              <div className="benefit">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-text">
                  <h4>Tailored Strategy</h4>
                  <p>Custom AI solutions designed for your specific industry and challenges.</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-text">
                  <h4>Fast Implementation</h4>
                  <p>Get results quickly with proven methodologies and efficient deployment.</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🔧</div>
                <div className="benefit-text">
                  <h4>Ongoing Support</h4>
                  <p>Continuous optimization and support to ensure long-term success.</p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h4>Get in Touch</h4>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">hello@burgerconsulting.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">New York City, NY</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Response Time:</span>
                <span className="detail-value">Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3 className="form-title">Book Your Free AI Discovery Call</h3>
              
              {submitStatus === 'success' && (
                <div className="status-message success">
                  Thank you! We'll be in touch within 24 hours to schedule your discovery call.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell us about your business challenges and what you'd like to achieve with AI..."
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book Your Free AI Discovery Call'}
              </button>

              <p className="form-note">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--bg-secondary);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3xl);
          align-items: start;
        }

        .contact-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
        }

        .contact-subtitle {
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .contact-benefits {
          margin-bottom: var(--space-2xl);
        }

        .benefit {
          display: flex;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
          align-items: flex-start;
        }

        .benefit-icon {
          font-size: var(--font-size-3xl);
          flex-shrink: 0;
        }

        .benefit-text h4 {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 var(--space-sm) 0;
        }

        .benefit-text p {
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .contact-details h4 {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .detail-item {
          display: flex;
          margin-bottom: var(--space-md);
          align-items: center;
        }

        .detail-label {
          font-weight: 600;
          color: var(--text-secondary);
          min-width: 120px;
        }

        .detail-value {
          color: var(--text-primary);
        }

        .contact-form-container {
          position: sticky;
          top: 100px;
        }

        .contact-form {
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
          max-width: 500px;
          margin: 0 auto;
        }

        .form-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-xl);
          text-align: center;
        }

        .status-message {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-lg);
          text-align: center;
          font-weight: 500;
        }

        .status-message.success {
          background: rgba(48, 209, 88, 0.1);
          color: var(--success);
          border: 1px solid rgba(48, 209, 88, 0.3);
        }

        .status-message.error {
          background: rgba(255, 59, 48, 0.1);
          color: var(--error);
          border: 1px solid rgba(255, 59, 48, 0.3);
        }

        .form-group {
          margin-bottom: var(--space-lg);
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: var(--space-md);
          border: 2px solid var(--border-light);
          border-radius: var(--radius-lg);
          background: var(--bg-elevated);
          color: var(--text-primary);
          font-size: var(--font-size-base);
          transition: var(--transition-fast);
          font-family: var(--font-family);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          margin-bottom: var(--space-lg);
          font-size: var(--font-size-lg);
          padding: var(--space-lg);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .form-note {
          font-size: var(--font-size-sm);
          color: var(--text-tertiary);
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        @media (min-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-3xl);
          }
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: var(--font-size-3xl);
          }

          .contact-subtitle {
            font-size: var(--font-size-lg);
          }

          .contact-form {
            padding: var(--space-xl);
          }

          .benefit {
            gap: var(--space-md);
          }

          .benefit-icon {
            font-size: var(--font-size-2xl);
          }

          .detail-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-xs);
          }

          .detail-label {
            min-width: auto;
          }

          .contact-form-container {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}