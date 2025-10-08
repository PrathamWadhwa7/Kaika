import React, { useEffect, useRef } from 'react';

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cta-section"
      style={{
        padding: `clamp(60px, 10vw, 80px) clamp(10px, 5vw, 20px)`,
        backgroundColor: '#9000ad',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        maxWidth: '100vw',
        margin: '0 auto',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to launch without losing time and money?
        </h2>
        <p className="cta-subtitle">
          We handle the grind, you scale with ease.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-white">Start Project</button>
          <button className="btn btn-outline">Contact Us</button>
        </div>
      </div>

      <style>{`
        .cta-container {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }
        .cta-section.visible .cta-container {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 20px;
          line-height: 1.2;
          font-weight: 700;
          animation: fadeInUp 0.8s ease-out;
        }

        .cta-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          margin-bottom: 40px;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .btn {
          padding: 15px 35px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          min-width: 150px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-white {
          background: #fff;
          color: #9000ad;
          border: 2px solid transparent;
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }
        .btn-white:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 25px rgba(255,255,255,0.6);
        }

        .btn-outline {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }
        .btn-outline:hover {
          background: #fff;
          color: #9000ad;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 25px rgba(255,255,255,0.5);
        }

        /* Button ripple effect */
        .btn::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease, opacity 0.5s;
          opacity: 0;
        }
        .btn:active::after {
          width: 300%;
          height: 300%;
          opacity: 1;
          transition: 0s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
          }
          .cta-subtitle {
            font-size: clamp(0.9rem, 3.5vw, 1rem);
          }
          .btn {
            padding: 12px 28px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
