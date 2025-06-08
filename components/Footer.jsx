import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Clients', href: '/clients' },
      { label: 'Contact', href: '/contact' }
    ],
    services: [
      { label: 'AI Automation', href: '/solutions#automation' },
      { label: 'Process Optimization', href: '/solutions#optimization' },
      { label: 'Custom AI Development', href: '/solutions#development' },
      { label: 'Corporate Training', href: '/solutions#training' }
    ],
    resources: [
      { label: 'Case Studies', href: '/clients#case-studies' },
      { label: 'AI Discovery Call', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/burger-consulting', icon: 'in' },
    { label: 'Twitter', href: 'https://twitter.com/burgerconsulting', icon: 'tw' },
    { label: 'Email', href: 'mailto:hello@burgerconsulting.com', icon: '@' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img src="/brand_logo.png" alt="Burger Consulting LLC" className="footer-logo-image" />
            </Link>
            <p className="footer-tagline">
              NYC Born. AI Driven. Results Delivered.
            </p>
            <p className="footer-description">
              Transforming businesses with practical AI solutions. From automation to optimization, we deliver results that matter.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="social-link"
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Company</h4>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Services</h4>
              <ul className="link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Resources</h4>
              <ul className="link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-subtitle">Start your AI journey with a free discovery call.</p>
          </div>
          <Link href="/contact" className="btn-primary cta-button">
            Book Your Free AI Discovery Call
          </Link>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Burger Consulting LLC. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="bottom-link">Privacy Policy</Link>
              <Link href="/terms" className="bottom-link">Terms of Service</Link>
              <span className="location">New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-primary);
          border-top: 1px solid var(--border-light);
          margin-top: var(--space-3xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3xl);
          padding: var(--space-3xl) 0;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          text-decoration: none;
          display: block;
          margin-bottom: var(--space-md);
          transition: var(--transition-fast);
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-logo-image {
          height: 80px;
          width: auto;
          max-width: 400px;
          object-fit: contain;
        }

        .footer-tagline {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--primary);
          margin-bottom: var(--space-md);
          font-style: italic;
        }

        .footer-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .social-links {
          display: flex;
          gap: var(--space-md);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-lg);
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .social-link:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-2xl);
        }

        .link-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-lg);
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: var(--space-md);
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--primary);
        }

        .footer-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-2xl);
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: var(--radius-2xl);
          margin: var(--space-2xl) 0;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .cta-content {
          flex: 1;
          min-width: 250px;
        }

        .cta-title {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--white);
          margin-bottom: var(--space-sm);
        }

        .cta-subtitle {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .cta-button {
          background: var(--white);
          color: var(--primary);
          white-space: nowrap;
        }

        .cta-button:hover {
          background: var(--gray-100);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid var(--border-light);
          padding: var(--space-xl) 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .copyright {
          color: var(--text-tertiary);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          flex-wrap: wrap;
        }

        .bottom-link {
          color: var(--text-tertiary);
          text-decoration: none;
          font-size: var(--font-size-sm);
          transition: var(--transition-fast);
        }

        .bottom-link:hover {
          color: var(--primary);
        }

        .location {
          color: var(--text-tertiary);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 2fr;
            align-items: start;
          }

          .footer-logo-image {
            height: 90px;
            max-width: 450px;
          }
        }

        @media (max-width: 768px) {
          .footer-cta {
            flex-direction: column;
            text-align: center;
          }

          .cta-button {
            width: 100%;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .cta-title {
            font-size: var(--font-size-xl);
          }

          .footer-logo-image {
            height: 60px;
            max-width: 300px;
          }
        }
      `}</style>
    </footer>
  );
}