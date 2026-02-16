import React, { useEffect, useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 👉 handlers
  const handleContactClick = () => {
    window.open(
      "mailto:prathamwadhwa7@gmail.com?subject=Project Inquiry",
      "_blank"
    );
  };

  const handleStartProject = () => {
    window.location.href = "/all-services";
  };

  return (
    <section ref={sectionRef} className="cta-section">
      {/* Blurred background */}
      <div className="cta-bg-blur" />

      {/* Content */}
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to launch without losing time and money?
        </h2>
        <p className="cta-subtitle">
          We handle the grind, you scale with ease.
        </p>

        <div className="cta-buttons">
          <button className="btn btn-white" onClick={handleStartProject}>
            Start Project
          </button>

          <button className="btn btn-outline" onClick={handleContactClick}>
            Contact Us
          </button>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          min-height: 100vh;
          width: 100vw;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FDFDFD;
        }

        .cta-bg-blur {
          position: absolute;
          inset: 0;
          background-image: url("/3.png");
          background-size: cover;
          background-position: center;
          filter: blur(5px);
          transform: scale(1);
          z-index: 1;
        }

        .cta-bg-blur::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
        }

        .cta-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          padding: 0 clamp(16px, 5vw, 32px);
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
          color: #FDFDFD;
          font-weight: 700;
        }

        .cta-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          margin-bottom: 40px;
          opacity: 0.9;
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
          background: #F1E104;
          color: #222222;
          border: 2px solid transparent;
        }

        .btn-outline {
          background: transparent;
          color: #FDFDFD;
          border: 2px solid #FDFDFD;
        }

        .btn:hover {
          transform: translateY(-3px) scale(1.05);
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
          }

          .cta-subtitle {
            font-size: clamp(0.9rem, 3.5vw, 1rem);
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
