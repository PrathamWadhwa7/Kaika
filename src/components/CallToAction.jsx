import React from 'react';

const CallToAction = () => {
  return (
    <section className="section" style={{
      padding: '80px 20px',
      backgroundColor: '#9000ad',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      maxWidth: '100vw'
    }}>
      <div className="container">
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Ready to Build Your Brand?
        </h2>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          marginBottom: '30px',
          opacity: '0.9'
        }}>
          Hundreds of successful brands that trust Kaika for their end-to-end operations
        </p>
        <div style={{ 
          gap: '15px', 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          <button className="btn-primary btn-white" style={{
            padding: '15px 30px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            minWidth: '140px'
          }}>
            Start Project
          </button>
          <button className="btn-secondary" style={{
            padding: '15px 30px',
            fontSize: '1rem',
            backgroundColor: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            minWidth: '140px'
          }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;