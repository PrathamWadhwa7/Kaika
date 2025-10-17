import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

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
      description: [
        "At Kaika, strategy is the foundation of every successful brand. We craft winning brand strategies that blend deep market research, sharp positioning, and in-depth competitive analysis to ensure your brand doesn't just launch — it stands out.",
        "We go beyond templates or generic plans. Every brand we build is powered by insights tailored to its niche, whether it's a D2C fashion label, a luxury lifestyle brand, or a physician-led skincare line.",
        "Our approach combines creativity with data-backed precision, helping your business enter the market with clarity, confidence, and long-term impact.",
        "Because at Kaika, we don't just position brands, we define how they lead."
      ],
      hasPrice: false,
      imagePath: "/strategy.jpeg"
    },
    {
      id: 'design',
      title: "Design",
      description: [
        "At Kaika, design goes beyond aesthetics, it's the art of turning strategy into visual storytelling.",
        "We craft product and packaging designs that strike a perfect balance between creativity and functionality, ensuring every element works together to build a powerful and consistent brand identity.",
        "From logo systems and product visuals to packaging that captures your story, our creative team designs experiences that connect, convert, and endure.",
        "Whether it's a D2C fashion label, a luxury skincare line, or a lifestyle brand ready to scale. Kaika ensures your design reflects your purpose and resonates with the right audience.",
        "Because great design doesn't just look good, it drives recognition, trust, and long-term growth."
      ],
      hasPrice: false,
      imagePath: "/design.jpg"
    },
    {
      id: 'manufacturing',
      title: "Manufacturing",
      description: [
        "At Kaika, manufacturing becomes effortless through our end-to-end production management solutions.",
        "From sourcing premium fabrics and raw materials to vendor vetting, MOQ negotiations, cost structuring, production timelines, and quality control, we handle every detail with precision.",
        "Our focus is simple: delivering the best quality at the most efficient cost, so your brand grows smoothly and sustainably.",
        "Whether it's luxury fashion, D2C products, or physician-led skincare, Kaika ensures your production process is seamless, scalable, and stress-free.",
        "With Kaika, you don't just manufacture, you build quality-backed brands that scale without surprises."
      ],
      hasPrice: false,
      imagePath: "/manufacturing.jpg"
    },
    {
      id: 'packaging',
      title: "Packaging — Designed to Impress, Built to Last",
      description: [
        "Your packaging is more than protection. It's the first conversation your customer has with your brand.",
        "At Kaika, we craft packaging design and production solutions tailored to your brand story, ensuring every box, label, and wrap speaks your identity with precision and purpose.",
        "From luxury finishes that express exclusivity to eco-friendly materials that reflect modern, conscious values, our designs blend creativity with responsibility.",
        "We align aesthetics, functionality, and sustainability to make every unboxing moment unforgettable.",
        "With Kaika's concierge-style brand management, your packaging process becomes seamless, from concept to final production.",
        "Whether you're a D2C founder, fashion entrepreneur, or physician-led skincare brand, we ensure quality, cost-efficiency, and timely delivery through our trusted global sourcing and manufacturing network.",
        "Your brand, our accountability. Because at Kaika, we design experiences that build lasting impressions."
      ],
      hasPrice: false,
      imagePath: "/packaging.jpg"
    },
    {
      id: 'fulfillment',
      title: "Fulfillment",
      description: [
        "Delivering excellence, not just products.",
        "At Kaika, we understand that a great product is only half the story — delivering it right is what builds loyalty and trust.",
        "Our end-to-end logistics and order fulfillment solutions handle everything from warehousing and inventory management to distribution and last-mile delivery.",
        "We ensure every customer receives their product seamlessly, on time, and with care. Creating a flawless brand experience at every touchpoint.",
        "With Kaika, your fulfillment process becomes an extension of your brand, smooth, reliable, and customer-first.",
        "Backed by concierge-style brand management, we make sure every order reflects your brand's promise of quality and accountability."
      ],
      hasPrice: false,
      imagePath: "/fulfillment.jpg"
    },
    {
      id: 'legal',
      title: "Legal",
      description: [
        "We safeguard your brand with full legal compliance and documentation support.",
        "From drafting contracts and securing licenses to navigating international trade regulations, Kaika ensures your growth is protected at every step.",
        "You focus on building your brand, we handle the paperwork and protect your name."
      ],
      hasPrice: false,
      imagePath: "/legal.jpg"
    },
    {
      id: 'marketing',
      title: "Marketing",
      description: [
        "Visibility drives value.",
        "We craft digital marketing and brand promotion strategies that build awareness, spark engagement, and drive measurable sales.",
        "Our concierge-style approach blends social media storytelling, content strategy, and performance-driven campaigns to ensure your brand scales globally with purpose.",
        "From luxury fashion and D2C fashion brands to skincare launches, our team tailors every campaign to your brand's unique DNA.",
        "With data-backed creativity, we don't just grow your audience. We turn them into loyal customers.",
        "Because a brand without visibility isn't a brand that lasts."
      ],
      hasPrice: false,
      imagePath: "/marketing.jpg"
    },
    {
      id: 'expansion',
      title: "Expansion",
      description: [
        "Go beyond borders — scale your brand with confidence.",
        "Growth should never feel chaotic. At Kaika, we design market expansion and scaling solutions that take your brand from local success to global recognition.",
        "With our concierge-style brand management, you gain the clarity, partners, and infrastructure needed to grow sustainably.",
        "Our vetted global network of suppliers, agencies, and manufacturers ensures smooth operations across every stage. From supply chain management to marketing and distribution.",
        "Whether you're a D2C founder, fashion entrepreneur, or skincare visionary, Kaika helps you expand without limits while maintaining control, consistency, and quality.",
        "Because with Kaika, your brand doesn't just grow — it scales with purpose."
      ],
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
            lineHeight: '1.2',
            fontFamily: 'Georgia, "EB Garamond", serif'
          }}>
            Our Services
          </h1>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            color: 'black',
            marginBottom: '15px',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif'
          }}>
            Kaika is a brand consulting & management ecosystem that launches, scales, and operates premium D2C & luxury brands. Zero meetings. Full accountability.
          </p>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: 'black',
            marginBottom: '12px',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif'
          }}>
            From brand positioning to factory sign-offs, we manage agencies every day so you don't have to.
          </p>
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.05rem',
            color: 'black',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif'
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
              minHeight: isMobile ? 'auto' : '280px'
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
                padding: isMobile ? '15px' : '20px',
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
                    marginBottom: '12px',
                    fontFamily: 'Georgia, "EB Garamond", serif'
                  }}>
                    {service.title}
                  </h2>
                  <div style={{
                    color: '#666',
                    lineHeight: '1.5',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    margin: 0,
                    fontFamily: 'Arial, sans-serif',
                    maxHeight: isMobile ? 'none' : '200px',
                    overflowY: isMobile ? 'visible' : 'auto'
                  }}>
                    {Array.isArray(service.description) ? (
                      <ul style={{
                        margin: 0,
                        paddingLeft: '18px',
                        listStyleType: 'disc'
                      }}>
                        {service.description.map((point, index) => (
                          <li key={index} style={{
                            marginBottom: '6px',
                            paddingLeft: '2px',
                            lineHeight: '1.4'
                          }}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ margin: 0 }}>{service.description}</p>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div style={{ marginTop: '15px' }}>
                  <button
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: isMobile ? '8px 16px' : '10px 20px',
                      backgroundColor: selectedServices.includes(service.id) ? '#28a745' : 'transparent',
                      color: selectedServices.includes(service.id) ? 'white' : primaryColor,
                      border: selectedServices.includes(service.id) ? '2px solid #28a745' : `2px solid ${primaryColor}`,
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      transition: 'all 0.3s ease',
                      width: '100%',
                      boxShadow: 'none',
                      fontFamily: 'Arial, sans-serif'
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
            textAlign: 'center',
            fontFamily: 'Georgia, "EB Garamond", serif'
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
              boxShadow: '0 4px 15px rgba(144, 0, 173, 0.3)',
              fontFamily: 'Arial, sans-serif'
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
      <Footer/>
    </div>
  );
};

export default ServiceDetails;
