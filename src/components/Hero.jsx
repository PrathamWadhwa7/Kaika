
import React from 'react';  

const Hero = () => {
  return (
    <section className="hero section" style={{
      // Set the background image and a black overlay
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(/banner.png) no-repeat center center`,
      backgroundSize: 'cover', // Ensures the image fills the area
      backgroundPosition: 'center', // Centers the image
      
      // *** KEY CHANGE 1: Set position to relative to anchor the absolute child ***
      position: 'relative', 

      color: 'white',
      padding: `clamp(40px, 8vw, 50px) clamp(10px, 5vw, 20px)`,
      textAlign: 'center',
      minHeight: 'clamp(300px, 60vh, 400px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '100vw',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <div className="container"> {/* Removed marginBottom to avoid shift; use section padding instead */}
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          We Build Brands That Last
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          1200x400
        </p>
      </div>
        
      {/* Updated Scroll Down Button */}
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
          // *** KEY CHANGE 2: Absolute positioning to place it on the border ***
          position: 'absolute',
          bottom: '0', // Aligns the bottom edge of the button with the section's bottom edge
          left: '50%', // Centers the button horizontally
          transform: 'translateX(-50%) translateY(50%)', // Shifts button back by 50% of its width, and 50% of its height to sit on the border.

          // Circular Button Styling (unchanged, but now works with absolute positioning)
          width: 'clamp(50px, 10vw, 60px)', // Responsive size
          height: 'clamp(50px, 10vw, 60px)',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: '#9000ad',
          border: '4px solid #9000ad', // Added a purple border to highlight it against the edge
          fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10, // Ensure it sits above all other content
          transition: 'background-color 0.3s, transform 0.3s',
        }}
        onMouseEnter={(e) => { 
          e.target.style.backgroundColor = '#f0f0f0';
          e.target.style.transform = 'translateX(-50%) translateY(50%) scale(1.1)'; 
        }} 
        onMouseLeave={(e) => { 
          e.target.style.backgroundColor = 'white'; 
          e.target.style.transform = 'translateX(-50%) translateY(50%) scale(1)';
        }}
      >
        &#8595; {/* Downward arrow */}
      </button>
    </section>
  );
};

export default Hero;