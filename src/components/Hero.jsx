// import React, { useState, useEffect } from 'react';  

// const Hero = () => {
//   const slides = [
//     {
//       image: '/banner.png',
//       title: 'We Build Brands That Last',
//       subtitle: 'From vision to legacy — Your dream, designed to last.',
//       subsubtitle: 'Kaika is your Brand Concierge — a full-service brand consulting & management ecosystem that turns high-value vision into market-ready brands with zero extra meetings and full accountability',
//     },
//     {
//       image: '/banner.png',
//       title: 'Innovate. Design. Inspire.',
//       subtitle: 'Turning bold ideas into beautiful realities.',
//       subsubtitle: 'Where creativity meets technology.',
//     },
//     {
//       image: '/banner.png',
//       title: 'Clarity. Creativity. Execution. One brand partner.',
//       subtitle: 'Design, campaigns, and marketing that cut through.',
//       subsubtitle: 'Supply chain, manufacturing, finance, and agency tie-ups, so growth doesn’t break your back.',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto change every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentSlide = slides[currentIndex];

//   return (
//    <section
//   className="hero section"
//   style={{
//     background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${currentSlide.image}) no-repeat center center`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     position: 'relative',
//     color: 'white',
//     // Adjust padding top to keep content off the very bottom edge
//     padding: `clamp(40px, 8vw, 50px) clamp(10px, 5vw, 20px) clamp(100px, 15vh, 120px)`, // Increased bottom padding to lift content above dots/button
//     textAlign: 'center',
//     // ✅ Responsive height: taller on desktop, same on mobile
//     minHeight:
//       typeof window !== 'undefined' && window.innerWidth <= 768
//         ? 'clamp(550px, 70vh, 500px)' // mobile height (same as before)
//         : 'clamp(500px, 90vh, 1000px)', // desktop/tablet taller
//     display: 'flex',
//     flexDirection: 'column',
//     // 💡 Changed from 'center' to 'flex-end' to push content to the bottom
//     justifyContent: 'flex-end', 
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: '100vw',
//     margin: '0 auto',
//     boxSizing: 'border-box',
//     transition: 'background-image 1s ease-in-out',
//   }}
// >

//       <div className="container" style={{ marginBottom: '5vh' }}> {/* Added margin-bottom for spacing */}
//         <h1
//           style={{
//             fontSize: 'clamp(2rem, 5vw, 3rem)',
//             fontWeight: 'bold',
//             marginBottom: '20px',
//             lineHeight: '1.2',
//             transition: 'opacity 0.5s ease',
//           }}
//         >
//           {currentSlide.title}
//         </h1>
//         <p
//           style={{
//             fontSize: 'clamp(1rem, 2vw, 1.2rem)',
//             marginBottom: '10px',
//             opacity: '0.9',
//             transition: 'opacity 0.5s ease',
//           }}
//         >
//           {currentSlide.subtitle}
//         </p>
//         {/* --- Added subsubtitle --- */}
//         <p
//           style={{
//             fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
//             marginBottom: '30px',
//             opacity: '0.8',
//             transition: 'opacity 0.5s ease',
//           }}
//         >
//           {currentSlide.subsubtitle}
//         </p>
//       </div>

//       {/* Dots for manual navigation */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '5vh',
//           display: 'flex',
//           gap: '8px',
//           zIndex: 10, // Ensure dots are above other elements if any overlap
//         }}
//       >
//         {slides.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             style={{
//               height: '12px',
//               width: '12px',
//               borderRadius: '50%',
//               background: index === currentIndex ? '#9000ad' : '#fff',
//               opacity: index === currentIndex ? 1 : 0.6,
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//             }}
//           />
//         ))}
//       </div>

//       {/* --- Your original scroll down button (unchanged) --- */}
//       <button
//         className="btn-scroll-down"
//         onClick={() => {
//           const nextSection = document.getElementById('next-section-id');
//           if (nextSection) {
//             nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           } else {
//             window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
//           }
//         }}
//         style={{
//           position: 'absolute',
//           bottom: '0',
//           left: '50%',
//           transform: 'translateX(-50%) translateY(50%)',
//           width: 'clamp(50px, 10vw, 60px)',
//           height: 'clamp(50px, 10vw, 60px)',
//           borderRadius: '50%',
//           backgroundColor: 'white',
//           color: '#9000ad',
//           border: '4px solid #9000ad',
//           fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
//           fontWeight: 'bold',
//           cursor: 'pointer',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 10,
//           transition: 'background-color 0.3s, transform 0.3s',
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.backgroundColor = '#f0f0f0';
//           e.target.style.transform =
//             'translateX(-50%) translateY(50%) scale(1.1)';
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.backgroundColor = 'white';
//           e.target.style.transform =
//             'translateX(-50%) translateY(50%) scale(1)';
//         }}
//       >
//         &#8595;
//       </button>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const slides = [
    {
      image: '/banner.png',
      title: 'We Build Brands That Last',
      subtitle: 'From vision to legacy — Your dream, designed to last.',
      subsubtitle:
        'Kaika is your Brand Concierge — a full-service brand consulting & management ecosystem that turns high-value vision into market-ready brands with zero extra meetings and full accountability',
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
      subsubtitle:
        'Supply chain, manufacturing, finance, and agency tie-ups, so growth doesn’t break your back.',
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
        padding: `clamp(40px, 8vw, 50px) clamp(10px, 5vw, 20px) clamp(100px, 15vh, 120px)`,
        textAlign: 'center',
        minHeight:
          typeof window !== 'undefined' && window.innerWidth <= 768
            ? 'clamp(550px, 70vh, 500px)'
            : 'clamp(500px, 90vh, 1000px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100vw',
        margin: '0 auto',
        boxSizing: 'border-box',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      {/* ✅ Content block */}
      <div className="hero-content">
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

      {/* Dots — now bottom-left */}
      <div
        style={{
          position: 'absolute',
          bottom: '2vh',
          left: '4vw',
          display: 'flex',
          gap: '8px',
          zIndex: 10,
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

      {/* Scroll down button with animated border sweep */}
      <div
        className="scroll-btn"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%) translateY(50%)',
          width: 'clamp(50px, 10vw, 60px)',
          height: 'clamp(50px, 10vw, 60px)',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => {
          const nextSection = document.getElementById('next-section-id');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'rotate(-90deg)',
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#9000ad"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#333"
            strokeWidth="4"
            fill="none"
            strokeDasharray="289"
            strokeDashoffset="289"
            style={{
              transition: 'stroke-dashoffset 0.8s linear',
            }}
            className="border-anim"
          />
        </svg>

        <span
          style={{
            color: '#9000ad',
            fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
            fontWeight: 'bold',
            zIndex: 2,
          }}
        >
          &#8595;
        </span>
      </div>

      {/* Inline CSS for responsiveness + hover animation */}
      <style>{`
        .hero .border-anim {
          pointer-events: none;
        }
        .hero .scroll-btn:hover .border-anim {
          stroke-dashoffset: 0;
        }
        
        /* ✅ Responsive position fix */
        @media (max-width: 768px) {
          .hero-content {
            position: absolute;
            bottom: 12vh;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            text-align: center;
          }
        }

        @media (min-width: 769px) {
          .hero-content {
            position: relative;
            margin-bottom: 5vh;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
