import Head from 'next/head';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Burger Consulting LLC</title>
        <meta name="description" content="Book your free AI discovery call and start transforming your business with practical AI solutions." />
        <link rel="canonical" href="https://burgerconsulting.com/contact" />
      </Head>

      <Navbar />
      <main>
        <section className="contact-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="page-title">Start Your AI Journey</h1>
              <p className="page-subtitle">
                Ready to transform your business with AI? Let's discuss your specific challenges and opportunities in a free discovery call.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />

        <section className="contact-info section">
          <div className="container">
            <div className="info-grid">
              <div className="info-card glass">
                <div className="info-icon">📍</div>
                <h3 className="info-title">Location</h3>
                <p className="info-details">
                  New York City, NY<br />
                  Serving clients globally
                </p>
              </div>

              <div className="info-card glass">
                <div className="info-icon">📧</div>
                <h3 className="info-title">Email</h3>
                <p className="info-details">
                  <a href="mailto:hello@burgerconsulting.com">hello@burgerconsulting.com</a><br />
                  Response within 24 hours
                </p>
              </div>

              <div className="info-card glass">
                <div className="info-icon">🕒</div>
                <h3 className="info-title">Availability</h3>
                <p className="info-details">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>

              <div className="info-card glass">
                <div className="info-icon">🌐</div>
                <h3 className="info-title">Global Reach</h3>
                <p className="info-details">
                  Remote consultations<br />
                  Timezone flexible
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container">
            <h2 className="section-title text-center">How We Work</h2>
            <p className="section-subtitle text-center">
              Our proven process ensures you get practical AI solutions that deliver real results.
            </p>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3 className="step-title">Discovery Call</h3>
                  <p className="step-description">
                    We discuss your business challenges, current processes, and AI opportunities in a free 30-minute consultation.
                  </p>
                  <ul className="step-details">
                    <li>Understand your specific needs</li>
                    <li>Identify automation opportunities</li>
                    <li>Assess technical requirements</li>
                    <li>Define success metrics</li>
                  </ul>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3 className="step-title">Strategy & Planning</h3>
                  <p className="step-description">
                    We create a detailed roadmap with clear timelines, deliverables, and expected outcomes tailored to your goals.
                  </p>
                  <ul className="step-details">
                    <li>Custom AI strategy development</li>
                    <li>Technology stack recommendations</li>
                    <li>Implementation timeline</li>
                    <li>Budget and resource planning</li>
                  </ul>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3 className="step-title">Implementation</h3>
                  <p className="step-description">
                    We build and deploy your AI solutions with regular check-ins and transparent progress tracking.
                  </p>
                  <ul className="step-details">
                    <li>Agile development approach</li>
                    <li>Regular progress updates</li>
                    <li>Testing and quality assurance</li>
                    <li>User training and documentation</li>
                  </ul>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3 className="step-title">Optimization & Support</h3>
                  <p className="step-description">
                    We monitor performance, gather feedback, and continuously optimize your AI solutions for maximum impact.
                  </p>
                  <ul className="step-details">
                    <li>Performance monitoring</li>
                    <li>Continuous optimization</li>
                    <li>Ongoing technical support</li>
                    <li>Future enhancement planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="container">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">How long does a typical AI project take?</h3>
                <p className="faq-answer">
                  Project timelines vary based on complexity, but most automation projects are completed within 4-8 weeks. Custom AI development can take 8-16 weeks depending on requirements.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="faq-question">Do I need technical expertise to work with you?</h3>
                <p className="faq-answer">
                  Not at all! We handle all technical aspects and explain everything in business terms. Our goal is to make AI accessible and understandable for everyone.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="faq-question">What's included in the free discovery call?</h3>
                <p className="faq-answer">
                  A 30-minute consultation where we assess your needs, identify opportunities, and provide initial recommendations. No obligation - just valuable insights for your business.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="faq-question">Do you work with businesses outside the US?</h3>
                <p className="faq-answer">
                  Yes! We work with clients globally. All consultations and project management can be conducted remotely with timezone flexibility.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="faq-question">What if I'm not sure AI is right for my business?</h3>
                <p className="faq-answer">
                  That's exactly what the discovery call is for! We'll help you understand if and how AI can benefit your specific situation - with no pressure to move forward.
                </p>
              </div>

              <div className="faq-item">
                <h3 className="faq-question">What kind of ongoing support do you provide?</h3>
                <p className="faq-answer">
                  We offer various support packages including maintenance, optimization, training, and enhancement services to ensure your AI solutions continue delivering value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="cta-content glass">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">
                Join hundreds of businesses that have transformed their operations with our AI solutions.
              </p>
              <a href="#contact-form" className="btn-primary cta-button">
                Book Your Free AI Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .contact-hero {
          padding: calc(80px + var(--space-3xl)) 0 var(--space-2xl);
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          text-align: center;
        }

        .page-title {
          font-size: var(--font-size-5xl);
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
          line-height: 1.1;
        }

        .page-subtitle {
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-info {
          background: var(--bg-primary);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-xl);
        }

        .info-card {
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: var(--transition-medium);
        }

        .info-card:hover {
          transform: translateY(-4px);
        }

        .info-icon {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--space-lg);
        }

        .info-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .info-details {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .info-details a {
          color: var(--primary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .info-details a:hover {
          color: var(--primary-dark);
          text-decoration: underline;
        }

        .process {
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--space-3xl);
        }

        .process-steps {
          display: grid;
          gap: var(--space-2xl);
        }

        .process-step {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: var(--space-xl);
          align-items: start;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: var(--primary);
          color: var(--white);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .step-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .step-details {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .step-details li {
          color: var(--text-secondary);
          margin-bottom: var(--space-sm);
          position: relative;
          padding-left: var(--space-lg);
        }

        .step-details li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .faq {
          background: var(--bg-primary);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-2xl);
        }

        .faq-item {
          background: var(--bg-secondary);
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-light);
        }

        .faq-question {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .faq-answer {
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .final-cta {
          padding: var(--space-3xl) 0;
        }

        .cta-content {
          text-align: center;
          padding: var(--space-3xl);
          border-radius: var(--radius-2xl);
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .cta-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          font-size: var(--font-size-lg);
          padding: var(--space-lg) var(--space-2xl);
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: var(--font-size-4xl);
          }

          .page-subtitle {
            font-size: var(--font-size-lg);
          }

          .section-title {
            font-size: var(--font-size-3xl);
          }

          .process-step {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            text-align: center;
          }

          .step-number {
            margin: 0 auto;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .cta-content {
            padding: var(--space-2xl);
          }

          .cta-title {
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </>
  );
}