import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Onboard",
      description: "Share your brand vision and requirements"
    },
    {
      number: "2",
      title: "Strategize",
      description: "Our experts create a customized plan"
    },
    {
      number: "3",
      title: "Execute",
      description: "We manage your end-to-end operations"
    },
    {
      number: "4",
      title: "Assure",
      description: "Quality assurance and ongoing support"
    }
  ];

  return (
    <section style={{ 
      padding: '80px 20px', 
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '100vw'
    }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '50px',
          color: '#333'
        }}>
          How Kaika Works
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
          gap: '30px',
          width: '100%'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#9000ad',
                marginBottom: '10px'
              }}>
                {step.number}
              </div>
              <h3 style={{ 
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#333'
              }}>
                {step.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.5' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;