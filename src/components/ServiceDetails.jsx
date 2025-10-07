import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Header from './Header';

const ServiceDetails = () => {
  const { selectedServices, toggleService, openFormModal } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Debug log for images
  useEffect(() => {
    console.log('Service images:', services.map(s => s.imagePath));
  }, []);

  const services = [
    {
      id: 'strategy',
      title: "Strategy",
      description: "At Kaika, strategy is the foundation of every successful brand. We go beyond generic plans, conducting market research, competitor analysis, and positioning exercises tailored to your niche. Whether you're launching a D2C fashion label or a physician-led skincare line, our strategies ensure your brand isn't just entering the market; it's making an impact that lasts.",
      hasPrice: false,
      imagePath: "/strategy.jpeg"
    },
    {
      id: 'design',
      title: "Design",
      description: "Great design isn't just about aesthetics; it's about creating a brand identity that speaks volumes. From logo systems and product visuals to packaging that blends creativity with functionality, Kaika ensures every design decision reflects your brand's story. Our goal: to make your brand unforgettable in the eyes of the right customers.",
      hasPrice: false,
      imagePath: "/design.jpg"
    },
    {
      id: 'manufacturing',
      title: "Manufacturing",
      description: "With Kaika, manufacturing becomes seamless. We handle everything: sourcing premium fabrics, negotiating MOQs, vendor vetting, cost structures, production timelines, and quality control. By balancing cost efficiency with uncompromising quality, we ensure your brand scales without surprises, whether it's luxury fashion or high-performance skincare.",
      hasPrice: false,
      imagePath: "/manufacturing.jpg"
    },
    {
      id: 'packaging',
      title: "Packaging",
      description: "Your packaging is the first conversation your customer has with your brand. At Kaika, we design and produce packaging that not only protects but also elevates your brand story. From luxury finishes that exude exclusivity to eco-friendly solutions that reflect conscious values, our packaging delivers a powerful first impression backed by our full accountability.",
      hasPrice: false,
      imagePath: "/packaging.jpg"
    },
    {
      id: 'fulfillment',
      title: "Fulfillment",
      description: "A great product is only half the story; delivering it right is what builds loyalty. Kaika manages warehousing, distribution, and last-mile delivery, ensuring your customers receive products seamlessly and on time. With us, your fulfillment process becomes an extension of your brand experience, smooth, reliable, and customer-first.",
      hasPrice: false,
      imagePath: "/fulfillment.jpg"
    },
    {
      id: 'legal',
      title: "Legal",
      description: "We safeguard your brand with full legal compliance and documentation support. From drafting contracts and securing licenses to navigating international trade regulations, Kaika ensures your growth is protected at every step. You focus on building your brand, we handle the paperwork and protect your name.",
      hasPrice: false,
      imagePath: "/legal.jpg"
    },
    {
      id: 'marketing',
      title: "Marketing",
      description: "A brand without visibility is a brand without growth. Kaika creates digital marketing and brand promotion strategies that drive awareness, engagement, and conversions. From social media storytelling to performance-driven ad campaigns, we help your brand scale globally with data-backed creativity.",
      hasPrice: false,
      imagePath: "/marketing.jpg"
    },
    {
      id: 'expansion',
      title: "Expansion",
      description: "Growth should never feel chaotic. At Kaika, we design market expansion and scaling solutions that help your brand move beyond borders with confidence. With our vetted partners, global supply chain expertise, and operational execution. Your brand doesn't just grow, it scales with purpose.",
      hasPrice: false,
      imagePath: "/expansion.jpg"
    }
  ];

  const primaryColor = '#9000ad';


  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div style={{
        backgroundImage: 'url(/servicehero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: isMobile ? '70vh' : '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'flex-start',
        position: 'relative',
        padding: isMobile ? '0' : '0 60px'
      }}>
        <div style={{
          padding: isMobile ? '30px 20px' : '40px 35px',
          borderRadius: '12px',
          textAlign: isMobile ? 'center' : 'left',
          maxWidth: '800px',
          margin: isMobile ? '0 20px' : '0',
          color: 'black'
        }}>
          <h1 style={{
            fontSize: isMobile ? '2rem' : '2.8rem',
            fontWeight: '800',
            color: 'black',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: 'black',
            marginBottom: '15px',
            lineHeight: '1.6'
          }}>
            Kaika is a brand consulting & management ecosystem that launches, scales, and operates premium D2C & luxury brands. Zero meetings. Full accountability.
          </p>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: 'black',
            marginBottom: '12px',
            lineHeight: '1.6'
          }}>
            From brand positioning to factory sign-offs, we manage agencies every day so you don't have to.
          </p>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: 'black',
            lineHeight: '1.6'
          }}>
            You have the vision — Kaika gives you the time, execution, and accountability.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '40px 15px' : '60px 20px' }}>
        {services.map((service, index) => (
          <div 
            key={service.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: isMobile ? '25px' : '40px',
              overflow: 'hidden',
              border: selectedServices.includes(service.id) ? `2px solid ${primaryColor}` : '2px solid transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
              minHeight: isMobile ? 'auto' : '320px'
            }}>
              {/* Service Image */}
              <div style={{
                flex: isMobile ? 'none' : '1',
                backgroundImage: `url(${service.imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#f0f0f0',
                position: 'relative',
                height: isMobile ? '200px' : 'auto',
                width: isMobile ? '100%' : 'auto',
                minHeight: isMobile ? '200px' : '250px',
                display: 'block'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: selectedServices.includes(service.id) ? primaryColor : 'rgba(255,255,255,0.9)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 3px 12px rgba(0,0,0,0.15)'
                }}
                onClick={() => toggleService(service.id)}
                >
                  {selectedServices.includes(service.id) && (
                    <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>✓</span>
                  )}
                </div>
              </div>

              {/* Service Content */}
              <div style={{
                flex: isMobile ? 'none' : '1',
                padding: isMobile ? '25px 20px' : '35px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: isMobile ? '100%' : 'auto'
              }}>
                <div>
                  <h2 style={{
                    fontSize: isMobile ? '1.5rem' : '1.9rem',
                    fontWeight: '700',
                    color: '#333',
                    marginBottom: '18px'
                  }}>
                    {service.title}
                  </h2>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.7',
                    fontSize: isMobile ? '0.95rem' : '1.05rem',
                    margin: 0
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <div style={{ marginTop: '22px' }}>
                  <button
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: isMobile ? '12px 20px' : '14px 28px',
                      backgroundColor: selectedServices.includes(service.id) ? '#28a745' : 'transparent',
                      color: selectedServices.includes(service.id) ? 'white' : primaryColor,
                      border: selectedServices.includes(service.id) ? '2px solid #28a745' : `2px solid ${primaryColor}`,
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.95rem' : '1rem',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      boxShadow: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!selectedServices.includes(service.id)) {
                        e.target.style.backgroundColor = primaryColor;
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(144, 0, 173, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selectedServices.includes(service.id)) {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = primaryColor;
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  >
                    {selectedServices.includes(service.id) ? 'Added to Cart ✓' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Services Summary */}
      {selectedServices.length > 0 && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: isMobile ? '25px 20px' : '32px 35px',
          margin: isMobile ? '25px 15px' : '35px auto',
          maxWidth: '1200px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.3rem' : '1.6rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: isMobile ? '18px' : '25px',
            textAlign: 'center'
          }}>
            Selected Services ({selectedServices.length})
          </h3>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: isMobile ? '10px' : '12px', 
            justifyContent: 'center',
            padding: isMobile ? '0 10px' : '0'
          }}>
            {selectedServices.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              return (
                <div
                  key={serviceId}
                  style={{
                    backgroundColor: primaryColor,
                    color: 'white',
                    padding: isMobile ? '8px 14px' : '10px 18px',
                    borderRadius: '25px',
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '10px',
                    boxShadow: '0 2px 10px rgba(144, 0, 173, 0.2)',
                    minHeight: isMobile ? '40px' : 'auto'
                  }}
                >
                  {service.title}
                  <button
                    onClick={() => toggleService(serviceId)}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '50%',
                      width: isMobile ? '28px' : '22px',
                      height: isMobile ? '28px' : '22px',
                      cursor: 'pointer',
                      fontSize: isMobile ? '14px' : '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      minWidth: isMobile ? '28px' : '22px',
                      minHeight: isMobile ? '28px' : '22px'
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                    onTouchStart={(e) => {
                      if (isMobile) {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'scale(0.95)';
                      }
                    }}
                    onTouchEnd={(e) => {
                      if (isMobile) {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Get Quote Button */}
      {selectedServices.length > 0 && (
        <div style={{ textAlign: 'center', margin: isMobile ? '40px 0' : '50px 0' }}>
          <button
            onClick={openFormModal}
            style={{
              padding: isMobile ? '14px 35px' : '16px 45px',
              backgroundColor: primaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(144, 0, 173, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#7a0092';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(144, 0, 173, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = primaryColor;
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(144, 0, 173, 0.3)';
            }}
          >
            Get Quote for {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
