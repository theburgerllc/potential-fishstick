import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Solutions() {
  const solutions = [
    {
      id: 'automation',
      title: 'AI Automation',
      subtitle: 'Streamline workflows, chatbots, and integrations',
      description: 'Transform repetitive tasks into intelligent, automated workflows that run 24/7 while you focus on strategy and growth.',
      icon: '🤖',
      features: [
        'Custom Chatbots & Virtual Assistants',
        'Workflow Automation & Process Optimization',
        'API Integrations & Data Synchronization',
        'Email & Communication Automation',
        'Document Processing & Data Extraction',
        'Customer Service Automation'
      ],
      benefits: [
        'Save 20+ hours per week on routine tasks',
        'Reduce human error by 95%',
        'Improve response times by 10x',
        'Scale operations without hiring'
      ],
      examples: [
        'E-commerce order processing automation',
        'Lead qualification and nurturing systems',
        'Social media content scheduling',
        'Invoice generation and tracking'
      ]
    },
    {
      id: 'optimization',
      title: 'Business Process Optimization',
      subtitle: 'Data-driven systems that scale with growth',
      description: 'Identify bottlenecks, eliminate inefficiencies, and optimize your operations for maximum performance and scalability.',
      icon: '⚡',
      features: [
        'Process Analysis & Mapping',
        'Performance Metrics & KPI Tracking',
        'Resource Allocation Optimization',
        'Quality Control Systems',
        'Inventory & Supply Chain Optimization',
        'Financial Process Streamlining'
      ],
      benefits: [
        'Increase operational efficiency by 40%',
        'Reduce costs by 25-30%',
        'Improve decision-making speed',
        'Enable data-driven growth'
      ],
      examples: [
        'Manufacturing workflow optimization',
        'Customer onboarding streamlining',
        'Sales pipeline enhancement',
        'HR recruitment automation'
      ]
    },
    {
      id: 'development',
      title: 'Strategy & Custom AI Development',
      subtitle: 'Tailored AI solutions for your industry',
      description: 'Build custom AI models and strategies designed specifically for your business challenges and competitive landscape.',
      icon: '🎯',
      features: [
        'Custom Machine Learning Models',
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Proof of Concept Development',
        'Model Training & Optimization',
        'Implementation & Deployment Support'
      ],
      benefits: [
        'Gain competitive advantage',
        'Solve unique business challenges',
        'Achieve industry-specific results',
        'Future-proof your operations'
      ],
      examples: [
        'Predictive analytics for demand forecasting',
        'Computer vision for quality control',
        'Natural language processing for insights',
        'Recommendation engines for personalization'
      ]
    },
    {
      id: 'content',
      title: 'AI Content & Video Automation',
      subtitle: 'High-quality content at scale',
      description: 'Generate, edit, and optimize content across all formats with AI-powered tools that maintain your brand voice and quality.',
      icon: '🎬',
      features: [
        'Automated Content Generation',
        'Video Production & Editing',
        'SEO Content Optimization',
        'Multi-format Content Creation',
        'Brand Voice Consistency',
        'Content Performance Analytics'
      ],
      benefits: [
        'Produce 10x more content',
        'Maintain consistent quality',
        'Reduce content costs by 60%',
        'Improve SEO rankings'
      ],
      examples: [
        'Blog post and article generation',
        'Social media content creation',
        'Product descriptions and copy',
        'Video editing and optimization'
      ]
    },
    {
      id: 'training',
      title: 'Corporate Training & Workshops',
      subtitle: 'Empower your team with AI knowledge',
      description: 'Comprehensive training programs that ensure your team can effectively adopt, use, and maintain AI solutions.',
      icon: '🎓',
      features: [
        'Custom Training Programs',
        'Hands-on Workshops',
        'AI Literacy Development',
        'Best Practices Training',
        'Ongoing Support & Coaching',
        'Change Management Support'
      ],
      benefits: [
        'Increase AI adoption rates',
        'Reduce implementation time',
        'Improve ROI on AI investments',
        'Build internal AI capabilities'
      ],
      examples: [
        'Executive AI strategy workshops',
        'Technical team training sessions',
        'Department-specific AI use cases',
        'Ongoing mentorship programs'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>AI Solutions - Burger Consulting LLC</title>
        <meta name="description" content="Comprehensive AI solutions including automation, optimization, custom development, content creation, and training programs." />
        <link rel="canonical" href="https://burgerconsulting.com/solutions" />
      </Head>

      <Navbar />
      <main>
        <section className="solutions-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="page-title">AI Solutions That Drive Results</h1>
              <p className="page-subtitle">
                From automation to optimization, we deliver comprehensive AI solutions that transform how your business operates and competes.
              </p>
            </div>
          </div>
        </section>

        <section className="solutions-overview section">
          <div className="container">
            <div className="solutions-grid">
              {solutions.map((solution, index) => (
                <div key={solution.id} className="solution-overview-card">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-subtitle">{solution.subtitle}</p>
                  <a href={`#${solution.id}`} className="solution-link">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {solutions.map((solution, index) => (
          <section key={solution.id} id={solution.id} className="solution-detail section">
            <div className="container">
              <div className="solution-content">
                <div className="solution-header">
                  <div className="solution-icon-large">{solution.icon}</div>
                  <div>
                    <h2 className="solution-detail-title">{solution.title}</h2>
                    <p className="solution-detail-subtitle">{solution.subtitle}</p>
                  </div>
                </div>
                
                <p className="solution-description">{solution.description}</p>

                <div className="solution-grid">
                  <div className="features-section">
                    <h4 className="section-subtitle">What's Included</h4>
                    <ul className="features-list">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="benefits-section">
                    <h4 className="section-subtitle">Key Benefits</h4>
                    <ul className="benefits-list">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="examples-section">
                  <h4 className="section-subtitle">Real-World Applications</h4>
                  <div className="examples-grid">
                    {solution.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="example-card">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="solution-cta">
                  <Link href="/contact" className="btn-primary">
                    Discover What's Possible
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="final-cta">
          <div className="container">
            <div className="cta-content glass">
              <h2 className="cta-title">Ready to Transform Your Business?</h2>
              <p className="cta-subtitle">
                Let's discuss which AI solutions are right for your specific challenges and goals.
              </p>
              <Link href="/contact" className="btn-primary cta-button">
                Book Your Free AI Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .solutions-hero {
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
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .solutions-overview {
          background: var(--bg-secondary);
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-2xl);
        }

        .solution-overview-card {
          background: var(--bg-elevated);
          padding: var(--space-2xl);
          border-radius: var(--radius-2xl);
          text-align: center;
          border: 1px solid var(--border-light);
          transition: var(--transition-medium);
        }

        .solution-overview-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary);
        }

        .solution-icon {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--space-lg);
          display: block;
        }

        .solution-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
        }

        .solution-subtitle {
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
        }

        .solution-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .solution-link:hover {
          color: var(--primary-dark);
        }

        .solution-detail {
          border-bottom: 1px solid var(--border-light);
        }

        .solution-detail:nth-child(even) {
          background: var(--bg-secondary);
        }

        .solution-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .solution-header {
          display: flex;
          align-items: center;
          gap: var(--space-xl);
          margin-bottom: var(--space-2xl);
        }

        .solution-icon-large {
          font-size: var(--font-size-6xl);
          flex-shrink: 0;
        }

        .solution-detail-title {
          font-size: var(--font-size-4xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-sm);
        }

        .solution-detail-subtitle {
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          margin: 0;
        }

        .solution-description {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: var(--space-2xl);
        }

        .solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          margin-bottom: var(--space-2xl);
        }

        .section-subtitle {
          font-size: var(--font-size-xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .features-list,
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features-list li,
        .benefits-list li {
          padding: var(--space-sm) 0;
          border-bottom: 1px solid var(--border-light);
          color: var(--text-secondary);
          position: relative;
          padding-left: var(--space-lg);
        }

        .features-list li::before {
          content: '⚙️';
          position: absolute;
          left: 0;
        }

        .benefits-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .examples-section {
          margin-bottom: var(--space-2xl);
        }

        .examples-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }

        .example-card {
          background: var(--bg-tertiary);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          text-align: center;
          border: 1px solid var(--border-light);
        }

        .solution-cta {
          text-align: center;
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
          max-width: 600px;
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

          .solution-header {
            flex-direction: column;
            text-align: center;
            gap: var(--space-lg);
          }

          .solution-icon-large {
            font-size: var(--font-size-5xl);
          }

          .solution-detail-title {
            font-size: var(--font-size-3xl);
          }

          .solution-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
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