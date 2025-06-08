import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Toggle theme">
        <span className="toggle-icon">🌙</span>
      </button>
    );
  }

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          <span className="toggle-icon">
            {theme === 'light' ? '🌙' : '☀️'}
          </span>
        </div>
      </div>

      <style jsx>{`
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-sm);
          border-radius: var(--radius-lg);
          transition: var(--transition-fast);
        }

        .theme-toggle:hover {
          background: var(--bg-tertiary);
        }

        .toggle-track {
          width: 50px;
          height: 26px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          position: relative;
          transition: var(--transition-medium);
          border: 2px solid var(--border-light);
        }

        .toggle-thumb {
          width: 22px;
          height: 22px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          position: absolute;
          top: 0;
          left: ${theme === 'dark' ? '24px' : '0'};
          transition: var(--transition-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .toggle-icon {
          font-size: 12px;
          line-height: 1;
        }

        :global(.dark) .toggle-track {
          background: var(--primary);
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .theme-toggle {
            padding: var(--space-xs);
          }
          
          .toggle-track {
            width: 44px;
            height: 24px;
          }
          
          .toggle-thumb {
            width: 20px;
            height: 20px;
            left: ${theme === 'dark' ? '20px' : '0'};
          }
          
          .toggle-icon {
            font-size: 10px;
          }
        }
      `}</style>
    </button>
  );
}