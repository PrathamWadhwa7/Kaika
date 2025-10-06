import React, { useState, useEffect } from 'react';  

const Hero = () => {
  // --- Added slides array with subsubtitle ---
  const slides = [
    {
      image: '/banner.png',
      title: 'We Build Brands That Last',
      subtitle: 'From vision to legacy - Your dream, designed to last.',
      subsubtitle: 'Kaika is your Brand Concierge — a full-service brand consulting & management ecosystem that turns high-value vision into market-ready brands with zero extra meetings and full accountability',
    },
    {
      image: '/banner.png',
      title: 'Innovate. Design. Inspire.',
      subtitle: 'Turning bold ideas into beautiful realities.',
      subsubtitle: 'Where creativity meets technology.',
    },
    {
      image: '/banner.png',
      title: 'Clarity. Creativity. Execution. One brand partner.',
      subtitle: 'Design, campaigns, and marketing that cut through.',
      subsubtitle: 'Supply chain, manufacturing, finance, and agency tie-ups, so growth doesn’t break your back.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
   <section
  className="hero section"
  style={{
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${currentSlide.image}) no-repeat center center`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: 'white',
    padding: `clamp(40px, 8vw, 50px) clamp(10px, 5vw, 20px)`,
    textAlign: 'center',
    // ✅ Responsive height: taller on desktop, same on mobile
    minHeight:
      typeof window !== 'undefined' && window.innerWidth <= 768
        ? 'clamp(300px, 60vh, 500px)' // mobile height (same as before)
        : 'clamp(500px, 90vh, 1000px)', // desktop/tablet taller
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '100vw',
    margin: '0 auto',
    boxSizing: 'border-box',
    transition: 'background-image 1s ease-in-out',
  }}
>

      <div className="container">
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '20px',
            lineHeight: '1.2',
            transition: 'opacity 0.5s ease',
          }}
        >
          {currentSlide.title}
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            marginBottom: '10px',
            opacity: '0.9',
            transition: 'opacity 0.5s ease',
          }}
        >
          {currentSlide.subtitle}
        </p>
        {/* --- Added subsubtitle --- */}
        <p
          style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            marginBottom: '30px',
            opacity: '0.8',
            transition: 'opacity 0.5s ease',
          }}
        >
          {currentSlide.subsubtitle}
        </p>
      </div>

      {/* Dots for manual navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              height: '12px',
              width: '12px',
              borderRadius: '50%',
              background: index === currentIndex ? '#9000ad' : '#fff',
              opacity: index === currentIndex ? 1 : 0.6,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* --- Your original scroll down button (unchanged) --- */}
      <button
        className="btn-scroll-down"
        onClick={() => {
          const nextSection = document.getElementById('next-section-id');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
          width: 'clamp(50px, 10vw, 60px)',
          height: 'clamp(50px, 10vw, 60px)',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: '#9000ad',
          border: '4px solid #9000ad',
          fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
          e.target.style.transform =
            'translateX(-50%) translateY(50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.transform =
            'translateX(-50%) translateY(50%) scale(1)';
        }}
      >
        &#8595;
      </button>
    </section>
  );
};

export default Hero;
