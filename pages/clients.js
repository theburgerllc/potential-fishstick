import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Clients() {
  const clientCategories = [
    {
      category: 'Solo Entrepreneurs',
      description: 'Independent founders scaling their vision with AI automation and smart workflows.',
      icon: '🚀',
      examples: ['Content Creators', 'Consultants', 'E-commerce Founders', 'Digital Marketers'],
      caseStudies: [
        {
          title: 'Content Creator Automation',
          client: 'Digital Marketing Consultant',
          challenge: 'Spending 30+ hours weekly on content creation and client reporting',
          solution: 'AI-powered content generation and automated reporting dashboard',
          results: ['80% reduction in content creation time', '40% increase in client capacity', '300% ROI in first quarter']
        }
      ]
    },
    {
      category: 'Startups',
      description: 'Fast-growing companies leveraging AI to compete with industry giants.',
      icon: '⚡',
      examples: ['SaaS Platforms', 'FinTech Startups', 'HealthTech Companies', 'EdTech Innovators'],
      caseStudies: [
        {
          title: 'Customer Support Automation',
          client: 'B2B SaaS Startup',
          challenge: 'Rising support tickets overwhelming small team, affecting growth',
          solution: 'Intelligent chatbot with escalation protocols and knowledge base integration',
          results: ['70% reduction in support tickets', '24/7 customer assistance', 'Team refocused on product development']
        }
      ]
    },
    {
      category: 'Agencies',
      description: 'Creative and marketing agencies delivering AI-powered solutions to their clients.',
      icon: '🎨',
      examples: ['Digital Agencies', 'PR Firms', 'Design Studios', 'Marketing Teams'],
      caseStudies: [
        {
          title: 'Campaign Optimization Platform',
          client: 'Digital Marketing Agency',
          challenge: 'Manual campaign analysis taking days, limiting client servicing capacity',
          solution: 'AI-powered analytics dashboard with automated insights and recommendations',
          results: ['90% faster campaign analysis', '25% improvement in client ROI', '50% increase in client retention']
        }
      ]
    },
    {
      category: 'Global Brands',
      description: 'Enterprise organizations transforming operations with custom AI strategies.',
      icon: '🌍',
      examples: ['Retail Giants', 'Fortune 500', 'Multinational Corps', 'Industry Leaders'],
      caseStudies: [
        {
          title: 'Supply Chain Optimization',
          client: 'Global Retail Corporation',
          challenge: 'Inefficient inventory management across 500+ locations worldwide',
          solution: 'Predictive analytics system for demand forecasting and inventory optimization',
          results: ['30% reduction in overstock', '$2M annual savings', '95% prediction accuracy']
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Tim's AI automation saved us 20 hours per week. Our content workflow is now seamless and our team can focus on strategy instead of repetitive tasks.",
      author: "Sarah Chen",
      title: "Founder, ContentFlow",
      category: "Startup",
      image: "/testimonial-1.jpg"
    },
    {
      quote: "The custom AI solution delivered exactly what we needed. Clear communication, practical results, and ongoing support made all the difference.",
      author: "Marcus Rodriguez",
      title: "Operations Director",
      category: "Agency",
      image: "/testimonial-2.jpg"
    },
    {
      quote: "From concept to implementation, the process was transparent and results-driven. Our efficiency improved by 40% in the first month.",
      author: "Jennifer Park",
      title: "CEO, TechVenture",
      category: "Enterprise",
      image: "/testimonial-3.jpg"
    },
    {
      quote: "Working with Burger Consulting transformed how we approach automation. The ROI was immediate and the support is outstanding.",
      author: "David Thompson",
      title: "Founder, Growth Agency",
      category: "Agency",
      image: "/testimonial-4.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Clients - Burger Consulting LLC</title>
        <meta name="description" content="See how solo entrepreneurs, startups, agencies, and global brands transform their businesses with our AI solutions." />
        <link rel="canonical" href="https://burgerconsulting.com/clients" />
      </Head>

      <Navbar />
      <main>
        <section className="clients-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="page-title">Trusted by Leaders Across Industries</h1>
              <p className="page-subtitle">
                From solo entrepreneurs to global giants, we deliver AI solutions that scale with your ambition.
              </p>
            </div>
          </div>
        </section>

        <section className="client-categories section">
          <div className="container">
            <h2 className="section-title text-center">Who We Serve</h2>
            <div className="categories-grid">
              {clientCategories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-title">{category.category}</h3>
                  </div>
                  <p className="category-description">{category.description}</p>
                  <div className="category-examples">
                    {category.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="example-tag">
                        {example}
                      </span>
                    ))}
                  </div>
                  <a href={`#case-${index}`} className="category-link">
                    View Case Study →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="case-studies section">
          <div className="container">
            <h2 className="section-title text-center">Success Stories</h2>
            <p className="section-subtitle text-center">
              Real results from real businesses across every industry and scale.
            </p>
            
            {clientCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} id={`case-${categoryIndex}`} className="case-study-section">
                <h3 className="case-study-category">{category.category}</h3>
                {category.caseStudies.map((caseStudy, studyIndex) => (
                  <div key={studyIndex} className="case-study-card glass">
                    <div className="case-study-header">
                      <h4 className="case-study-title">{caseStudy.title}</h4>
                      <span className="case-study-client">{caseStudy.client}</span>
                    </div>
                    
                    <div className="case-study-content">
                      <div className="case-study-section">
                        <h5 className="case-study-label">Challenge</h5>
                        <p className="case-study-text">{caseStudy.challenge}</p>
                      </div>
                      
                      <div className="case-study-section">
                        <h5 className="case-study-label">Solution</h5>
                        <p className="case-study-text">{caseStudy.solution}</p>
                      </div>
                      
                      <div className="case-study-section">
                        <h5 className="case-study-label">Results</h5>
                        <ul className="case-study-results">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials section">
          <div className="container">
            <h2 className="section-title text-center">What Our Clients Say</h2>
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
        </section>

        <section className="trust-logos section">
          <div className="container">
            <h3 className="trust-title text-center">Trusted by brands worldwide</h3>
            <div className="logos-grid">
              <div className="logo-placeholder">STARTUP</div>
              <div className="logo-placeholder">AGENCY</div>
              <div className="logo-placeholder">ENTERPRISE</div>
              <div className="logo-placeholder">GLOBAL</div>
              <div className="logo-placeholder">INNOVATION</div>
              <div className="logo-placeholder">LEADER</div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Join Our Success Stories</h2>
              <p className="cta-subtitle">
                Ready to transform your business with proven AI solutions? Let's discuss your specific challenges and opportunities.
              </p>
              <Link href="/contact" className="btn-primary cta-button">
                See AI Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .clients-hero {
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

        .client-categories {
          background: var(--bg-secondary);
        }

        .section-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-3xl);
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-2xl);
        }

        .category-card {
          background: var(--bg-elevated);
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
          border: 1px solid var(--border-light);
          transition: var(--transition-medium);
        }

        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          margin-bottom: var(--space-lg);
        }

        .category-icon {
          font-size: var(--font-size-3xl);
          flex-shrink: 0;
        }

        .category-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .category-description {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          line-height: 1.6;
        }

        .category-examples {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-bottom: var(--space-lg);
        }

        .example-tag {
          background: var(--primary);
          color: var(--white);
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        .category-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .category-link:hover {
          color: var(--primary-dark);
        }

        .case-studies {
          background: var(--bg-primary);
        }

        .section-subtitle {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto var(--space-3xl);
        }

        .case-study-section {
          margin-bottom: var(--space-3xl);
        }

        .case-study-category {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-xl);
          text-align: center;
        }

        .case-study-card {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
        }

        .case-study-header {
          margin-bottom: var(--space-xl);
          text-align: center;
        }

        .case-study-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
        }

        .case-study-client {
          color: var(--text-secondary);
          font-style: italic;
        }

        .case-study-content {
          display: grid;
          gap: var(--space-xl);
        }

        .case-study-label {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: var(--space-sm);
        }

        .case-study-text {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .case-study-results {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .case-study-results li {
          color: var(--text-secondary);
          margin-bottom: var(--space-sm);
          position: relative;
          padding-left: var(--space-lg);
        }

        .case-study-results li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .testimonials {
          background: var(--bg-secondary);
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
          background: var(--bg-primary);
          padding: var(--space-2xl) 0;
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

        .final-cta {
          padding: var(--space-3xl) 0;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
        }

        .cta-content {
          text-align: center;
          color: var(--white);
        }

        .cta-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin-bottom: var(--space-lg);
        }

        .cta-subtitle {
          font-size: var(--font-size-lg);
          margin-bottom: var(--space-xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
        }

        .cta-button {
          background: var(--white);
          color: var(--primary);
          font-size: var(--font-size-lg);
          padding: var(--space-lg) var(--space-2xl);
        }

        .cta-button:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
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

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-header {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-author {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-title {
            font-size: var(--font-size-2xl);
          }

          .case-study-content {
            gap: var(--space-lg);
          }
        }
      `}</style>
    </>
  );
}