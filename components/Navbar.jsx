import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/clients', label: 'Clients' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span>Burger Consulting</span>
          </Link>

          <div className="nav-links desktop">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`nav-link ${router.pathname === item.href ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary cta-btn">
              Book Free Call
            </Link>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`mobile-nav-link ${router.pathname === item.href ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mobile-cta" onClick={() => setIsOpen(false)}>
            Book Free Call
          </Link>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-light);
          transition: var(--transition-medium);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: var(--shadow-md);
        }

        :global(.dark) .navbar {
          background: rgba(17, 24, 39, 0.9);
          border-bottom-color: var(--border-light);
        }

        :global(.dark) .navbar.scrolled {
          background: rgba(17, 24, 39, 0.95);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-md) 0;
        }

        .logo {
          font-size: var(--font-size-xl);
          font-weight: 800;
          color: var(--text-primary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .logo:hover {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: var(--space-xl);
          align-items: center;
        }

        .nav-links.desktop {
          display: none;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          border-radius: var(--radius-full);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .cta-btn {
          display: none;
        }

        .mobile-menu-btn {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-sm);
        }

        .mobile-menu-btn span {
          width: 24px;
          height: 2px;
          background: var(--text-primary);
          transition: var(--transition-fast);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: var(--transition-medium);
          padding: var(--space-lg);
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mobile-nav-link {
          display: block;
          padding: var(--space-md) 0;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid var(--border-light);
          transition: var(--transition-fast);
        }

        .mobile-nav-link:last-of-type {
          border-bottom: none;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary);
        }

        .mobile-cta {
          margin-top: var(--space-lg);
          width: 100%;
        }

        @media (min-width: 768px) {
          .nav-links.desktop {
            display: flex;
          }

          .cta-btn {
            display: inline-block;
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}