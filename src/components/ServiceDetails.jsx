import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Header from './Header';

const ServiceDetails = () => {
  const { selectedServices, toggleService, openFormModal } = useCart();

  const services = [
    {
      id: 'strategy',
      title: "Strategy",
      description: "Brand positioning and market entry planning",
      price: "$2,500",
      hasPrice: true,
      imagePath: "/strategy.jpeg",
      details: {
        overview: "Our strategic planning service helps you establish a strong foundation for your brand in the market. We analyze market conditions, identify opportunities, and create actionable plans for sustainable growth.",
        features: [
          "Market research and competitive analysis",
          "Brand positioning strategy",
          "Target audience identification",
          "Go-to-market strategy development",
          "Pricing strategy optimization",
          "Business model refinement"
        ],
        deliverables: [
          "Comprehensive market analysis report",
          "Brand positioning document",
          "Strategic roadmap (3-6 months)",
          "Competitive landscape analysis",
          "Target customer personas",
          "Implementation timeline"
        ],
        timeline: "2-3 weeks",
        pricing: {
          basic: "$2,500",
          premium: "$4,500",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'design',
      title: "Design",
      description: "Product and packaging design solutions",
      price: "$4,500",
      hasPrice: true,
      imagePath: "/design.jpg",
      details: {
        overview: "Transform your ideas into visually stunning products and packaging that capture attention and drive sales. Our design team combines creativity with market insights to create designs that resonate with your target audience.",
        features: [
          "Product design and prototyping",
          "Packaging design and mockups",
          "Brand visual identity",
          "Label and logo design",
          "3D rendering and visualization",
          "Print-ready artwork files"
        ],
        deliverables: [
          "Complete product design package",
          "Packaging design variations",
          "Brand guidelines document",
          "High-resolution print files",
          "3D mockups and renders",
          "Prototype recommendations"
        ],
        timeline: "3-4 weeks",
        pricing: {
          basic: "$4,500",
          premium: "$7,500",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'manufacturing',
      title: "Manufacturing",
      description: "End-to-end production management",
      price: "$3,500",
      hasPrice: true,
      imagePath: "/manufacturing.jpg",
      details: {
        overview: "From sourcing materials to quality control, we manage your entire manufacturing process. Our network of verified suppliers ensures high-quality products delivered on time and within budget.",
        features: [
          "Supplier sourcing and vetting",
          "Production planning and scheduling",
          "Quality control and testing",
          "Inventory management",
          "Cost optimization",
          "Supply chain logistics"
        ],
        deliverables: [
          "Manufacturing plan and timeline",
          "Supplier recommendations",
          "Quality control protocols",
          "Production cost breakdown",
          "Risk assessment report",
          "Ongoing production monitoring"
        ],
        timeline: "4-6 weeks setup",
        pricing: {
          basic: "$3,500 setup",
          premium: "$6,500 setup + 5% of production value",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'packaging',
      title: "Packaging",
      description: "Sustainable and brand-aligned packaging",
      hasPrice: false,
      imagePath: "/packaging.jpg",
      details: {
        overview: "Create packaging that protects your product while telling your brand story. We focus on sustainable materials and innovative designs that enhance the unboxing experience.",
        features: [
          "Sustainable packaging solutions",
          "Custom box and bag design",
          "Label and sticker design",
          "Unboxing experience optimization",
          "Shipping optimization",
          "Environmental compliance"
        ],
        deliverables: [
          "Packaging design concepts",
          "Material recommendations",
          "Prototype samples",
          "Print-ready artwork",
          "Cost analysis",
          "Sustainability report"
        ],
        timeline: "2-3 weeks",
        pricing: {
          basic: "Starting at $2,000",
          premium: "Starting at $4,000",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'fulfillment',
      title: "Fulfillment",
      description: "Warehousing and order fulfillment",
      hasPrice: false,
      imagePath: "/fulfillment.jpg",
      details: {
        overview: "Streamline your order fulfillment with our comprehensive warehousing and shipping solutions. We handle everything from inventory storage to last-mile delivery.",
        features: [
          "Warehouse storage and management",
          "Order processing and picking",
          "Shipping and logistics coordination",
          "Inventory tracking and reporting",
          "Returns processing",
          "Multi-channel fulfillment"
        ],
        deliverables: [
          "Fulfillment strategy document",
          "Warehouse setup and configuration",
          "Shipping rate analysis",
          "Inventory management system",
          "Performance reporting dashboard",
          "Customer service protocols"
        ],
        timeline: "1-2 weeks setup",
        pricing: {
          basic: "$1,500/month + $3.50/order",
          premium: "$2,500/month + $2.75/order",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'legal',
      title: "Legal",
      description: "Compliance and intellectual property",
      hasPrice: false,
      imagePath: "/legal.jpg",
      details: {
        overview: "Navigate complex legal requirements with confidence. Our legal experts ensure your business is compliant and your intellectual property is protected.",
        features: [
          "Business registration and licensing",
          "Intellectual property protection",
          "Contract drafting and review",
          "Regulatory compliance",
          "Privacy policy and terms of service",
          "Trademark and copyright filing"
        ],
        deliverables: [
          "Compliance checklist and timeline",
          "Legal document templates",
          "IP protection strategy",
          "Regulatory guidance documents",
          "Contract templates",
          "Ongoing legal support"
        ],
        timeline: "1-4 weeks depending on scope",
        pricing: {
          basic: "Starting at $1,500",
          premium: "Starting at $3,500",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'marketing',
      title: "Marketing",
      description: "Digital and retail marketing strategies",
      hasPrice: false,
      imagePath: "/marketing.jpg",
      details: {
        overview: "Launch your brand into the market with targeted marketing strategies that drive awareness, engagement, and sales across digital and retail channels.",
        features: [
          "Digital marketing strategy",
          "Social media campaign development",
          "Influencer partnership programs",
          "Retail marketing materials",
          "SEO and content marketing",
          "Performance tracking and optimization"
        ],
        deliverables: [
          "Marketing strategy document",
          "Campaign creative assets",
          "Content calendar",
          "Influencer outreach plan",
          "Performance analytics setup",
          "ROI tracking system"
        ],
        timeline: "2-3 weeks",
        pricing: {
          basic: "$2,000/month",
          premium: "$4,500/month",
          enterprise: "Custom pricing"
        }
      }
    },
    {
      id: 'expansion',
      title: "Expansion",
      description: "Market expansion and scaling solutions",
      hasPrice: false,
      imagePath: "/expansion.jpg",
      details: {
        overview: "Scale your business to new markets and channels with our expansion services. We help you identify opportunities and execute growth strategies effectively.",
        features: [
          "Market expansion analysis",
          "New channel development",
          "Partnership identification",
          "Scaling strategy development",
          "International expansion support",
          "Growth optimization"
        ],
        deliverables: [
          "Expansion feasibility study",
          "Market entry strategy",
          "Partnership proposals",
          "Scaling roadmap",
          "Risk assessment",
          "Implementation plan"
        ],
        timeline: "4-6 weeks",
        pricing: {
          basic: "$3,000",
          premium: "$6,000",
          enterprise: "Custom pricing"
        }
      }
    }
  ];

  // Use the cart context toggle function

  const primaryColor = '#9000ad';

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa'
    }}>
      {/* Same Header as Home Page */}
      <Header />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px 40px 20px' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '20px' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            color: '#333',
            marginTop: '0',
            marginBottom: '20px',
            paddingTop: '20px'
          }}>
            Our Services
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Select the services you're interested in and get a personalized quote. 
            Each service includes detailed planning, execution, and ongoing support.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                border: selectedServices.includes(service.id) ? `3px solid ${primaryColor}` : '3px solid transparent',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Service Image */}
              <div style={{
                height: '200px',
                backgroundImage: `url(${service.imagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: selectedServices.includes(service.id) ? primaryColor : 'rgba(255,255,255,0.9)',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleService(service.id)}
                >
                  {selectedServices.includes(service.id) && (
                    <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}>✓</span>
                  )}
                </div>
              </div>

              {/* Service Content */}
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '700', 
                    color: '#333',
                    margin: 0
                  }}>
                    {service.title}
                  </h3>
                  {service.hasPrice && service.pricing?.basic && (
                    <span style={{
                      backgroundColor: primaryColor,
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {service.pricing.basic}
                    </span>
                  )}
                </div>

                <p style={{ 
                  color: '#666', 
                  lineHeight: '1.6', 
                  marginBottom: '20px',
                  fontSize: '1rem'
                }}>
                  {service.details.overview}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600', 
                    color: '#333',
                    marginBottom: '10px'
                  }}>
                    Key Features:
                  </h4>
                  <ul style={{ 
                    paddingLeft: '20px', 
                    color: '#666',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {service.details.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    {service.details.features.length > 3 && (
                      <li style={{ fontStyle: 'italic' }}>
                        +{service.details.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    color: '#888',
                    backgroundColor: '#f0f0f0',
                    padding: '5px 10px',
                    borderRadius: '15px'
                  }}>
                    Timeline: {service.details.timeline}
                  </span>
                  <button
                    onClick={() => toggleService(service.id)}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: selectedServices.includes(service.id) ? '#28a745' : primaryColor,
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {selectedServices.includes(service.id) ? 'Selected ✓' : 'Select Service'}
                  </button>
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
            padding: '30px',
            marginBottom: '40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#333',
              marginBottom: '20px'
            }}>
              Selected Services ({selectedServices.length})
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {selectedServices.map(serviceId => {
                const service = services.find(s => s.id === serviceId);
                return (
                  <div 
                    key={serviceId}
                    style={{
                      backgroundColor: primaryColor,
                      color: 'white',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
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
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        fontSize: '12px'
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
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={openFormModal}
              style={{
                padding: '15px 40px',
                backgroundColor: primaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.2rem',
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
              Get Quote for {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} ({selectedServices.length} selected)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
