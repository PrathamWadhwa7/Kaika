import React, { useState } from 'react';

// A simple Modal component for the popup (remains unchanged)
const ServiceDetailModal = ({ service, onClose }) => {
  if (!service) return null;

  const primaryColor = '#9000ad'; 

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }} onClick={onClose}>
      <div 
        style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          maxWidth: '500px',
          width: '90%',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#333'
          }}
        >
          &times;
        </button>
        <h3 style={{ 
          color: primaryColor, 
          fontSize: '2rem', 
          marginBottom: '15px',
          borderBottom: `2px solid ${primaryColor}`,
          paddingBottom: '10px'
        }}>
          {service.title} Details
        </h3>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
          **{service.description}**
          <br /><br />
          This section would contain a detailed breakdown of the service, including phases, expected outcomes, case studies, and provider information.
        </p>
        
        {service.hasPrice && (
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
            Starting Price: {service.price}
          </p>
        )}
        
        <button 
          onClick={onClose}
          style={{
            marginTop: '30px',
            padding: '10px 20px',
            backgroundColor: primaryColor,
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Close & Contact
        </button>
      </div>
    </div>
  );
};


const Services = () => {
  const services = [
    {
      title: "Strategy",
      description: "Brand positioning and market entry planning",
      price: "$2,500",
      hasPrice: true,
      imagePath: "/strategy.jpeg" 
    },
    {
      title: "Design",
      description: "Product and packaging design solutions",
      price: "$4,500",
      hasPrice: true,
      imagePath: "/design.jpg" 
    },
    {
      title: "Manufacturing",
      description: "End-to-end production management",
      price: "$3,500",
      hasPrice: true,
      imagePath: "/manufacturing.jpg" 
    },
    {
      title: "Packaging",
      description: "Sustainable and brand-aligned packaging",
      hasPrice: false,
      imagePath: "/packaging.jpg" 
    },
    {
      title: "Fulfillment",
      description: "Warehousing and order fulfillment",
      hasPrice: false,
      imagePath: "/fulfillment.jpg" 
    },
    {
      title: "Legal",
      description: "Compliance and intellectual property",
      hasPrice: false,
      imagePath: "/legal.jpg" 
    },
    {
      title: "Marketing",
      description: "Digital and retail marketing strategies",
      hasPrice: false,
      imagePath: "/marketing.jpg" 
    },
    {
      title: "Expansion",
      description: "Market expansion and scaling solutions",
      hasPrice: false,
      imagePath: "/expansion.jpg" 
    }
  ];

  const primaryColor = '#9000ad'; 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleAllServicesRedirect = () => {
    window.location.href = '/all-services'; 
  };

  return (
    <section 
      id="next-section-id" 
      className="section services-section" 
      style={{
        padding: '100px 20px',
        backgroundColor: '#f8f9fa', 
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(2.5rem, 5vw, 3rem)',
          fontWeight: '800', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Our Service 
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '60px', 
        }}>
          Explore the end-to-end solutions that build brands that last.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px',
          width: '100%'
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              onClick={() => openModal(service)}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${service.imagePath}) no-repeat center center`,
                backgroundSize: 'cover',
                // *** FIX: Reduced minHeight to make the box smaller ***
                minHeight: '220px', // Adjusted to be visually smaller but fit content

                padding: '35px 25px',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                borderBottom: `4px solid ${primaryColor}00`,
                textAlign: 'left', 
                cursor: 'pointer',
                transition: 'all 0.4s ease-out',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)'; 
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderBottom = `4px solid ${primaryColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderBottom = `4px solid ${primaryColor}00`;
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700',
                marginBottom: '10px',
                color: 'white',
                borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                paddingBottom: '10px'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: '#ddd',
                marginTop: '15px',
                marginBottom: '25px',
                lineHeight: '1.6',
                // Reduced min-height for description to allow the card to shrink
                minHeight: '24px', 
                fontSize: '1rem'
              }}>
                {service.description}
              </p>

              {/* Action button inside card */}
              <button 
                  style={{
                    padding: '8px 15px',
                    border: 'none',
                    borderRadius: '50px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    backgroundColor: primaryColor,
                    color: 'white',
                    fontSize: '0.9rem',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7a0092'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = primaryColor}
                >
                  {service.hasPrice ? `Start from ${service.price}` : `Learn More`}
              </button>
            </div>
          ))}
        </div>

        {/* See All Services Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button 
            onClick={handleAllServicesRedirect}
            style={{
              padding: '15px 40px',
              border: `2px solid ${primaryColor}`,
              borderRadius: '50px',
              backgroundColor: 'white',
              color: primaryColor,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = primaryColor;
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = primaryColor;
            }}
          >
            See All Services
          </button>
        </div>
      </div>
      
      {/* Service Detail Modal */}
      <ServiceDetailModal service={selectedService} onClose={closeModal} />
    </section>
  );
};

export default Services;