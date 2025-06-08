import Link from 'next/link';

export default function Clients() {
  const clientTypes = [
    {
      category: 'Solo Entrepreneurs',
      description: 'Independent founders scaling their vision with AI automation and smart workflows.',
      icon: '🚀',
      examples: ['Content Creators', 'Consultants', 'E-commerce Founders', 'Digital Marketers']
    },
    {
      category: 'Startups',
      description: 'Fast-growing companies leveraging AI to compete with industry giants.',
      icon: '⚡',
      examples: ['SaaS Platforms', 'FinTech Startups', 'HealthTech Companies', 'EdTech Innovators']
    },
    {
      category: 'Agencies',
      description: 'Creative and marketing agencies delivering AI-powered solutions to their clients.',
      icon: '🎨',
      examples: ['Digital Agencies', 'PR Firms', 'Design Studios', 'Marketing Teams']
    },
    {
      category: 'Global Brands',
      description: 'Enterprise organizations transforming operations with custom AI strategies.',
      icon: '🌍',
      examples: ['Retail Giants', 'Fortune 500', 'Multinational Corps', 'Industry Leaders']
    }
  ];

  const testimonials = [
    {
      quote: "Tim's AI automation saved us 20 hours per week. Our content workflow is now seamless and our team can focus on strategy instead of repetitive tasks.",
      author: "Sarah Chen",
      title: "Founder, ContentFlow",
      category: "Startup"
    },
    {
      quote: "The custom AI solution delivered exactly what we needed. Clear communication, practical results, and ongoing support made all the difference.",
      author: "Marcus Rodriguez",
      title: "Operations Director",
      category: "Agency"
    },
    {
      quote: "From concept to implementation, the process was transparent and results-driven. Our efficiency improved by 40% in the first month.",
      author: "Jennifer Park",
      title: "CEO, TechVenture",
      category: "Enterprise"
    }
  ];

  return (
    <section className="clients section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Leaders Across Industries</h2>
          <p className="section-subtitle">
            From solo entrepreneurs to global giants, we deliver AI solutions that scale with your ambition.
          </p>
        </div>

        <div className="client-types">
          {clientTypes.map((type, index) => (
            <div key={index} className="client-type-card">
              <div className="client-icon">{type.icon}</div>
              <h3 className="client-category">{type.category}</h3>
              <p className="client-description">{type.description}</p>
              <div className="client-examples">
                {type.examples.map((example, exampleIndex) => (
                  <span key={exampleIndex} className="example-tag">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials">
          <h3 className="testimonials-title">What Our Clients Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card glass">
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-title">{testimonial.title}</div>
                  </div>
                  <div className="author-category">{testimonial.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-logos">
          <h4 className="trust-title">Trusted by brands worldwide</h4>
          <div className="logos-grid">
            <div className="logo-placeholder">BRAND</div>
            <div className="logo-placeholder">STARTUP</div>
            <div className="logo-placeholder">AGENCY</div>
            <div className="logo-placeholder">ENTERPRISE</div>
            <div className="logo-placeholder">GLOBAL</div>
            <div className="logo-placeholder">INNOVATION</div>
          </div>
        </div>

        <div className="clients-cta">
          <h3>Join Our Success Stories</h3>
          <p>Ready to transform your business with proven AI solutions?</p>
          <Link href="/contact" className="btn-primary">
            See AI Success Stories
          </Link>
        </div>
      </div>

      <style jsx>{`
        .clients {
          background: var(--bg-primary);
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

        .client-types {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-2xl);
          margin-bottom: var(--space-3xl);
        }

        .client-type-card {
          text-align: center;
          padding: var(--space-2xl);
          background: var(--bg-secondary);
          border-radius: var(--radius-2xl);
          transition: var(--transition-medium);
          border: 1px solid var(--border-light);
        }

        .client-type-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .client-icon {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--space-lg);
        }

        .client-category {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-md);
        }

        .client-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .client-examples {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          justify-content: center;
        }

        .example-tag {
          background: var(--primary);
          color: var(--white);
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .testimonials {
          margin-bottom: var(--space-3xl);
        }

        .testimonials-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: var(--space-2xl);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-2xl);
        }

        .testimonial-card {
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          transition: var(--transition-medium);
          background: oklch(0.9200 0 0);
          border: 1px solid var(--border-light);
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        .testimonial-quote {
          font-size: var(--font-size-lg);
          color: var(--text-primary);
          margin: 0 0 var(--space-lg) 0;
          line-height: 1.6;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .author-name {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-xs);
        }

        .author-title {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .author-category {
          background: var(--bg-tertiary);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-md);
          font-size: var(--font-size-xs);
          font-weight: 600;
          color: var(--text-secondary);
        }

        .trust-logos {
          text-align: center;
          margin-bottom: var(--space-3xl);
          padding: var(--space-2xl);
          background: var(--bg-secondary);
          border-radius: var(--radius-2xl);
        }

        .trust-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: var(--space-xl);
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--space-lg);
          align-items: center;
        }

        .logo-placeholder {
          background: var(--bg-tertiary);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          font-weight: 600;
          color: var(--text-tertiary);
          text-align: center;
          border: 2px dashed var(--border-light);
          transition: var(--transition-fast);
        }

        .logo-placeholder:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .clients-cta {
          text-align: center;
          padding: var(--space-3xl);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: var(--radius-2xl);
          color: var(--white);
        }

        .clients-cta h3 {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin-bottom: var(--space-md);
        }

        .clients-cta p {
          font-size: var(--font-size-lg);
          margin-bottom: var(--space-xl);
          opacity: 0.9;
        }

        .clients-cta .btn-primary {
          background: var(--white);
          color: var(--primary);
        }

        .clients-cta .btn-primary:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: var(--font-size-3xl);
          }

          .client-types {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .testimonial-author {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .clients-cta {
            padding: var(--space-2xl);
          }

          .clients-cta h3 {
            font-size: var(--font-size-2xl);
          }
        }
      `}</style>
    </section>
  );
}