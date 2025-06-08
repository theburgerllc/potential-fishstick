import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'AI Automation',
      description: 'Streamline workflows with intelligent chatbots, automated processes, and seamless integrations that work behind the scenes.',
      icon: '🤖',
      features: ['Custom Chatbots', 'Workflow Automation', 'API Integrations', 'Process Optimization']
    },
    {
      title: 'Business Process Optimization',
      description: 'Transform inefficient operations into streamlined, data-driven systems that scale with your growth.',
      icon: '⚡',
      features: ['Process Analysis', 'System Design', 'Efficiency Metrics', 'Performance Tracking']
    },
    {
      title: 'Strategy & Custom AI Development',
      description: 'Tailored AI solutions built specifically for your industry, challenges, and competitive landscape.',
      icon: '🎯',
      features: ['Custom AI Models', 'Strategic Planning', 'Technology Roadmap', 'Implementation Support']
    },
    {
      title: 'AI Content & Video Automation',
      description: 'Generate high-quality content at scale with AI-powered writing, editing, and video production workflows.',
      icon: '🎬',
      features: ['Content Generation', 'Video Automation', 'Brand Consistency', 'Multi-format Output']
    },
    {
      title: 'Corporate Training & Workshops',
      description: 'Empower your team with hands-on AI training, workshops, and ongoing support for sustainable adoption.',
      icon: '🎓',
      features: ['Team Training', 'Custom Workshops', 'Ongoing Support', 'Best Practices']
    }
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Solutions That Drive Results</h2>
          <p className="section-subtitle">
            From automation to optimization, we deliver practical AI solutions that transform how you work.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Link href="/solutions" className="service-link">
                Discover What's Possible
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how AI can solve your specific challenges and unlock new opportunities.</p>
          <Link href="/contact" className="btn-primary">
            Book Your Free AI Discovery Call
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services {
          background: var(--bg-secondary);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .section-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-2xl);
          margin-bottom: var(--space-3xl);
        }

        .service-card {
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
          transition: var(--transition-medium);
          position: relative;
          overflow: hidden;
          background: oklch(0.9200 0 0);
          border: 1px solid var(--border-light);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: var(--radius-2xl) var(--radius-2xl) 0 0;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .service-icon {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--space-lg);
          display: block;
        }

        .service-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
          line-height: 1.3;
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0 0 var(--space-xl) 0;
        }

        .service-features li {
          color: var(--text-secondary);
          margin-bottom: var(--space-sm);
          position: relative;
          padding-left: var(--space-lg);
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .service-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .service-link::after {
          content: '→';
          transition: var(--transition-fast);
        }

        .service-link:hover {
          color: var(--primary-dark);
        }

        .service-link:hover::after {
          transform: translateX(4px);
        }

        .services-cta {
          text-align: center;
          padding: var(--space-3xl);
          background: var(--bg-elevated);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
        }

        .services-cta h3 {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .services-cta p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: var(--font-size-3xl);
          }

          .section-subtitle {
            font-size: var(--font-size-lg);
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .service-card {
            padding: var(--space-xl);
          }

          .services-cta {
            padding: var(--space-2xl);
          }

          .services-cta h3 {
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </section>
  );
}