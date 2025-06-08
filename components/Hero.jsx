import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Where AI Meets NYC Hustle.
          </h1>
          <p className="hero-subtitle">
            15 years shaping global retail. 5 years engineering AI breakthroughs. Your competitive edge—designed and delivered from New York.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary hero-cta">
              Book Your Free AI Discovery Call
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
          <div className="trust-signals">
            <p className="trust-text">Trusted by brands, founders, and leaders for real-world AI transformation.</p>
            <div className="trust-points">
              <div className="trust-point">
                <span className="trust-icon">✓</span>
                <span>No jargon. No black box. Just practical, proven AI solutions.</span>
              </div>
              <div className="trust-point">
                <span className="trust-icon">✓</span>
                <span>From solo entrepreneurs to global giants—every project is personal.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <img 
              src="/favicon.png" 
              alt="Burger Consulting LLC" 
              className="hero-image"
            />
            <div className="hero-image-glow"></div>
          </div>
          <div className="floating-card card-1">
            <div className="card-content">
              <h4>AI Automation</h4>
              <p>Streamline workflows</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="card-content">
              <h4>15+ Years</h4>
              <p>Retail expertise</p>
            </div>
          </div>
          <div className="floating-card card-3">
            <div className="card-content">
              <h4>NYC Based</h4>
              <p>Global reach</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: calc(80px + var(--space-3xl)) 0 var(--space-3xl);
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(0, 122, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-3xl);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          text-align: center;
        }

        .hero-title {
          font-size: var(--font-size-4xl);
          font-weight: 900;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: var(--space-lg);
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: var(--font-size-xl);
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--space-2xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-3xl);
        }

        .hero-cta {
          font-size: var(--font-size-lg);
          padding: var(--space-lg) var(--space-2xl);
        }

        .trust-signals {
          max-width: 600px;
          margin: 0 auto;
        }

        .trust-text {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-lg);
          font-weight: 600;
        }

        .trust-points {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .trust-point {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          font-size: var(--font-size-base);
          color: var(--text-secondary);
        }

        .trust-icon {
          color: var(--success);
          font-weight: bold;
          font-size: var(--font-size-lg);
        }

        .hero-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          margin-top: var(--space-2xl);
        }

        .hero-image-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: heroFloat 6s ease-in-out infinite;
          z-index: 1;
        }

        .hero-image {
          width: 250px;
          height: 250px;
          object-fit: contain;
          opacity: 0.3;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
          transition: var(--transition-medium);
        }

        .hero-image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            var(--primary) 0%,
            var(--secondary) 30%,
            var(--accent) 60%,
            transparent 70%
          );
          opacity: 0.1;
          border-radius: 50%;
          filter: blur(30px);
          animation: pulse 4s ease-in-out infinite alternate;
          z-index: 0;
        }

        .floating-card {
          position: absolute;
          padding: var(--space-lg);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          transition: var(--transition-medium);
          animation: float 6s ease-in-out infinite;
          z-index: 10;
        }

        .floating-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
        }

        .card-1 {
          top: 20%;
          left: 10%;
          background: linear-gradient(135deg, #007AFF, #5856D6);
          color: white;
          animation-delay: 0s;
        }

        .card-2 {
          top: 40%;
          right: 15%;
          background: oklch(0.9200 0 0);
          border: 1px solid var(--border-light);
          animation-delay: 2s;
          color: var(--text-primary);
        }

        .card-3 {
          bottom: 30%;
          left: 20%;
          background: linear-gradient(135deg, #FF6B35, #FF9500);
          color: white;
          animation-delay: 4s;
        }

        .card-content h4 {
          margin: 0 0 var(--space-sm) 0;
          font-weight: 700;
          font-size: var(--font-size-lg);
        }

        .card-content p {
          margin: 0;
          opacity: 0.8;
          font-size: var(--font-size-sm);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.2;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: var(--font-size-6xl);
          }

          .hero-subtitle {
            font-size: var(--font-size-2xl);
          }

          .trust-points {
            flex-direction: row;
            justify-content: center;
            gap: var(--space-2xl);
          }

          .hero-image {
            width: 300px;
            height: 300px;
          }

          .hero-image-glow {
            width: 350px;
            height: 350px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            grid-template-columns: 1fr 1fr;
            text-align: left;
          }

          .hero-content {
            text-align: left;
          }

          .hero-actions {
            justify-content: flex-start;
          }

          .trust-signals {
            margin: 0;
          }

          .trust-points {
            justify-content: flex-start;
          }

          .hero-image {
            width: 350px;
            height: 350px;
          }

          .hero-image-glow {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 767px) {
          .hero-title {
            font-size: var(--font-size-3xl);
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-actions a {
            width: 100%;
            max-width: 300px;
          }

          .hero-image {
            width: 150px;
            height: 150px;
          }

          .hero-image-glow {
            width: 200px;
            height: 200px;
          }

          .hero-visual {
            min-height: 250px;
            margin-top: var(--space-xl);
          }
        }
      `}</style>
    </section>
  );
}