import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          {service.detailedDescription}
        </p>
        
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
      detailedDescription: "We craft winning brand strategies from positioning and market research to competitive analysis. With Kaika, your brand doesn't just launch; it stands out.",
      hasPrice: false,
      imagePath: "/strategy.jpeg" 
    },
    {
      title: "Design",
      description: "Product and packaging design solutions",
      detailedDescription: "Product and packaging design that strikes a balance between creativity and functionality. Our team ensures your brand identity speaks volumes and attracts the right customers.",
      hasPrice: false,
      imagePath: "/design.jpg" 
    },
    {
      title: "Manufacturing",
      description: "End-to-end production management",
      detailedDescription: "End-to-end manufacturing solutions from sourcing premium materials and vendor vetting to production management and quality control. We deliver the best quality at affordable costs, so your growth is smooth and sustainable.",
      hasPrice: false,
      imagePath: "/manufacturing.jpg" 
    },
    {
      title: "Packaging",
      description: "Sustainable and brand-aligned packaging",
      detailedDescription: "Packaging design and production tailored to your brand story. From luxury finishes to eco-friendly solutions, we ensure your products make a lasting first impression. Your brand, our accountability.",
      hasPrice: false,
      imagePath: "/packaging.jpg" 
    },
    {
      title: "Fulfillment",
      description: "Warehousing and order fulfillment",
      detailedDescription: "Seamless logistics and order fulfillment solutions. We handle warehousing, distribution, and delivery so your customers enjoy a flawless brand experience.",
      hasPrice: false,
      imagePath: "/fulfillment.jpg" 
    },
    {
      title: "Legal",
      description: "Compliance and intellectual property",
      detailedDescription: "Full legal compliance and documentation support. From contracts and licensing to international trade regulations, Kaika safeguards your brand at every step.",
      hasPrice: false,
      imagePath: "/legal.jpg" 
    },
    {
      title: "Marketing",
      description: "Digital and retail marketing strategies",
      detailedDescription: "Digital marketing and brand promotion strategies that drive awareness, engagement, and sales. From social media to performance campaigns, we help your brand scale globally.",
      hasPrice: false,
      imagePath: "/marketing.jpg" 
    },
    {
      title: "Expansion",
      description: "Market expansion and scaling solutions",
      detailedDescription: "Market expansion and scaling solutions to take your brand beyond borders. With the right partners, supply chain, and execution, Kaika ensures you grow without limits.",
      hasPrice: false,
      imagePath: "/expansion.jpg" 
    }
  ];

  const primaryColor = '#9000ad'; 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Define a consistent horizontal padding for the section content
  const horizontalPadding = 'clamp(10px, 5vw, 20px)';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    setIsDesktop(mediaQuery.matches);

    const handleResize = (e) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addListener(handleResize);
    return () => mediaQuery.removeListener(handleResize);
  }, []);

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

  const renderServiceCard = (service, index) => (
    <div
      key={index}
      className="service-card"
      onClick={() => openModal(service)}
      // Removed onMouseEnter/onMouseLeave from style object as it's not standard React inline style
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${service.imagePath}) no-repeat center center`,
        backgroundSize: 'cover',
        minHeight: 'clamp(180px, 25vw, 220px)',
        padding: 'clamp(20px, 4vw, 35px)',
        borderRadius: '12px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
        borderBottom: `4px solid ${primaryColor}00`,
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.4s ease-out',
        position: 'relative',
        width: '100%',
        maxWidth: isDesktop ? 'none' : '320px',
        margin: isDesktop ? '0' : '0 auto',
        boxSizing: 'border-box',
      }}
      // Added back mouse events using standard React props
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
        fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
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
        minHeight: '24px',
        fontSize: 'clamp(0.9rem, 3vw, 1rem)'
      }}>
        {service.description}
      </p>
      <button
        style={{
          padding: 'clamp(6px, 2vw, 8px) clamp(10px, 2vw, 15px)',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          backgroundColor: primaryColor,
          color: 'white',
          fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
          transition: 'background-color 0.3s',
          boxSizing: 'border-box',
          display: 'inline-block',
          width: 'auto',
          maxWidth: '150px'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#7a0092'}
        onMouseLeave={(e) => e.target.style.backgroundColor = primaryColor}
      >
        Learn More
      </button>
    </div>
  );

  return (
    <section 
      id="next-section-id" 
      className="section services-section" 
      style={{
        // FIX: Removed horizontal padding from this clamp, and set it separately.
        paddingTop: `clamp(60px, 10vw, 100px)`,
        paddingBottom: `clamp(60px, 10vw, 100px)`,
        paddingLeft: '0', // The container handles the max width and centering
        paddingRight: '0',// The container handles the max width and centering
        backgroundColor: '#f8f9fa', 
        width: '100%',
        // FIX: Removed maxWidth: '100vw' to avoid potential overflow issues
        margin: '0 auto',
        overflowX: 'hidden' // IMPORTANT: Prevents horizontal scrollbar for any minor overflow
      }}
    >
      <div 
        className="container" 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          // Apply consistent horizontal padding to the inner content container
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          boxSizing: 'border-box' // Ensures padding is included in the element's total width
        }}
      >
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: 'clamp(2.5rem, 5vw, 3rem)',
          fontWeight: '800', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Our <span className="hcolor">Service</span>
        </h2>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '60px', 
        }}>
          Explore the end-to-end solutions that build brands that last.
        </p>

        {isDesktop ? (
          // Desktop: 2 rows of 4 columns grid
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '30px',
            width: '100%',
            margin: '0 auto'
          }}>
            {services.map((service, index) => renderServiceCard(service, index))}
          </div>
        ) : (
          // Mobile/Tablet: Swiper with 1 slide, navigation arrows
          // FIX: The Swiper is now correctly wrapped and constrained by the padding of the parent .container
          <div style={{ padding: 0, width: '100%', margin: '0 auto' }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              // Set slidesOffsetBefore/After to zero to align slides with container edge
              slidesOffsetBefore={0} 
              slidesOffsetAfter={0} 
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              freeMode={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1.1, // Show a peek of the next slide
                  spaceBetween: 20,
                  centeredSlides: true,
                  // Disable centering for better alignment when more than 1 slide per view
                  freeMode: false, 
                },
                640: {
                  slidesPerView: 2.1, // Show a peek of the next slide
                  spaceBetween: 20,
                  centeredSlides: false, // Ensure full width usage
                  freeMode: true,
                },
                // Set the 1024 breakpoint to match the isDesktop check (1025px)
                1024: {
                    slidesPerView: 3, // Still mobile view until 1025px
                    spaceBetween: 30,
                    centeredSlides: false,
                    freeMode: true,
                }
              }}
              style={{ 
                paddingBottom: '50px', 
                margin: '0 auto',
                // Important to keep overflow for the swiper to function
                overflow: 'visible', 
                boxSizing: 'border-box',
                // Adjust Swiper padding to compensate for container padding on mobile/tablet
                marginLeft: `calc(-1 * ${horizontalPadding})`,
                marginRight: `calc(-1 * ${horizontalPadding})`,
                paddingLeft: horizontalPadding, 
                paddingRight: horizontalPadding,
                width: `calc(100% + 2 * ${horizontalPadding})`
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  {renderServiceCard(service, index)}
                </SwiperSlide>
              ))}
              
              {/* Custom Navigation Arrows (optional, if you want them inside Swiper) */}
              <div className="swiper-button-next" style={{ color: primaryColor, top: '50%', right: '0px' }}></div>
              <div className="swiper-button-prev" style={{ color: primaryColor, top: '50%', left: '0px' }}></div>
            </Swiper>
          </div>
        )}

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
