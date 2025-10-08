import React from 'react';

const LatestInsights = () => {
  const insights = [
    {
      category: "Market Trends",
      title: "2024 Apparel Industry Outlook",
      description: "Key trends shaping fashion retail in the coming year"
    },
    {
      category: "Sustainability",
      title: "Eco-Friendly Packaging Revolution",
      description: "How sustainable materials are transforming FMCG"
    },
    {
      category: "Strategy",
      title: "Building a Resilient Brand Strategy",
      description: "Essential elements for long-term brand success"
    }
  ];

  return (
    <section className="section" style={{
      padding: `clamp(60px, 10vw, 80px) clamp(10px, 5vw, 20px)`,
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '100vw',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <div className="container">
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '50px',
          color: '#333'
        }}>
          Latest <span className="hcolor">Insights</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: 'clamp(20px, 4vw, 30px)',
          width: '100%',
          margin: '0 auto'
        }}>
          {insights.map((insight, index) => (
              <div key={index} className="card" style={{
                border: '1px solid #e9ecef',
                borderRadius: '10px',
                overflow: 'hidden',
                width: '100%',
                margin: '0 5px'
              }}>
              <div style={{
                height: '200px',
                backgroundColor: '#e9ecef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                width: '100%'
              }}>
                400x250
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{
                  color: '#9000ad',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {insight.category}
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '10px 0', color: '#333' }}>
                  {insight.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                  {insight.description}
                </p>
                <button className="btn-link" style={{
                  color: '#9000ad',
                  border: 'none',
                  background: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;