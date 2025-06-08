import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Burger Consulting LLC</title>
        <meta name="description" content="Meet Tim Burger and learn about Burger Consulting LLC's mission to transform businesses with practical AI solutions." />
        <link rel="canonical" href="https://burgerconsulting.com/about" />
      </Head>

      <Navbar />
      <main>
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="page-title">About Burger Consulting</h1>
              <p className="page-subtitle">
                Burger Consulting LLC blends New York City's relentless spirit with 20 years of business and technology mastery.
              </p>
            </div>
          </div>
        </section>

        <section className="about-story section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <p className="story-text">
                  Led by Tim Burger—luxury retail veteran and AI innovation architect—we help brands and founders automate, optimize, and accelerate with tailored, transparent AI strategies.
                </p>
                <p className="story-text">
                  With 15 years shaping global retail and 5 years engineering AI breakthroughs, we understand both the business challenges and the technological solutions that drive real results.
                </p>
                <p className="story-text">
                  Let's build your future—together.
                </p>
              </div>
              <div className="story-stats">
                <div className="stat-card glass">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years in Retail</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years in AI</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
                <div className="stat-card glass">
                  <div className="stat-number">NYC</div>
                  <div className="stat-label">Born & Based</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="values section">
          <div className="container">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3 className="value-title">Results-Driven</h3>
                <p className="value-description">
                  Every AI solution we build is designed to deliver measurable business impact, not just impressive technology.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔍</div>
                <h3 className="value-title">Transparent Process</h3>
                <p className="value-description">
                  No black boxes, no jargon. We explain every step and ensure you understand exactly how your AI solutions work.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3 className="value-title">Personal Touch</h3>
                <p className="value-description">
                  From solo entrepreneurs to global giants—every project is personal. We invest in your success as if it were our own.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3 className="value-title">NYC Hustle</h3>
                <p className="value-description">
                  We move fast, think strategically, and deliver solutions with the speed and precision that New York demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content glass">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">
                Let's discuss how AI can transform your business with a free discovery call.
              </p>
              <a href="/contact" className="btn-primary cta-button">
                Book Your Free AI Discovery Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .about-hero {
          padding: calc(80px + var(--space-3xl)) 0 var(--space-3xl);
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
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        .story-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-xl);
        }

        .story-text {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.7;
        }

        .story-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-lg);
        }

        .stat-card {
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: var(--transition-medium);
        }

        .stat-card:hover {
          transform: translateY(-4px);
        }

        .stat-number {
          font-size: var(--font-size-4xl);
          font-weight: 900;
          color: var(--primary);
          margin-bottom: var(--space-sm);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          font-weight: 600;
        }

        .values {
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-3xl);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-2xl);
        }

        .value-card {
          background: var(--bg-elevated);
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
          text-align: center;
          border: 1px solid var(--border-light);
          transition: var(--transition-medium);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary);
        }

        .value-icon {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--space-lg);
        }

        .value-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .value-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .cta-section {
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

        @media (min-width: 1024px) {
          .story-grid {
            grid-template-columns: 2fr 1fr;
          }

          .story-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: var(--font-size-4xl);
          }

          .page-subtitle {
            font-size: var(--font-size-lg);
          }

          .story-title {
            font-size: var(--font-size-3xl);
          }

          .section-title {
            font-size: var(--font-size-3xl);
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