import React from 'react';

const Footer = () => {
  return (
    <footer className="section" style={{
      backgroundColor: '#ffffffff',
      color: 'white',
      padding: '60px 20px 30px',
      width: '100%',
      maxWidth: '100vw'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '40px',
          marginBottom: '40px'
        }}>
          
                  <div style={{ color: 'black' }}>
                      {/* The Image Element */}
                      <img
                          src="/kaika.png" // Assumes 'footerkaika.png' is in the 'public' folder
                          alt="Kaika Logo"
                          style={{
                              width: '80%', // Allows the image to scale based on height
                              height: '58%', // Set a specific height to match the size of a typical footer logo
                              marginBottom: '2px',
                              padding: '0px',

                          }}
                      />

                      <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
                          End-to-end operations for Apparel & FMCG brands
                      </p>
                  </div>

 
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '20px',
              color: '#9000ad'
            }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#strategy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Strategy</a></li>
              <li><a href="#design" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Design</a></li>
              <li><a href="#manufacturing" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Manufacturing</a></li>
              {/* Keeping the Fulfillment link from the image content even though it was missing in the original code block */}
              <li><a href="#fulfillment" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Fulfillment</a></li>
            </ul>
          </div>


          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '20px',
              color: '#9000ad'
            }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#about-us" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>About Us</a></li>
              <li><a href="#case-studies" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Case Studies</a></li>
              <li><a href="#blog" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Blog</a></li>
              <li><a href="#contact" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Contact</a></li>
            </ul>
          </div>


          <div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '20px',
              color: '#9000ad'
            }}>
              Legal
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#terms" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Terms & Conditions</a></li>
              <li><a href="#privacy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Privacy Policy</a></li>
              <li><a href="#escrow-policy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Escrow Policy</a></li>
              <li><a href="#supplier-agreement" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Supplier Agreement</a></li>
            </ul>
          </div>
        </div>

     
        <hr style={{ border: 'none', borderTop: '1px solid #dee2e6', margin: '40px 0' }} />


        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '10px',
          padding: '40px 30px',
          marginBottom: '30px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          border: '1px solid #e9ecef'
        }}>

          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              color: '#333'
            }}>
              Become a **Kaika Certified Provider**
            </h3>
            <p style={{
              fontSize: '1rem',
              marginBottom: '25px',
              color: '#666',
              lineHeight: '1.6'
            }}>
              Join our network of trusted service providers and gain access to premium clients in the apparel and FMCG industries. Get visited, certified, and connected with brands that need your expertise.
            </p>
   
            <ul style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '30px'
            }}>
              <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                Access to premium client projects
              </li>
              <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                Kaika Certification badge
              </li>
              <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                Escrow protected payments
              </li>
              <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
                Dedicated support team
              </li>
            </ul>
            
            <button className="btn-primary btn-purple" style={{
              padding: '12px 30px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: '#9000ad',
              color: 'white',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6fd8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#9000ad'}>
              Get Certified
            </button>
          </div>

          <div style={{ flex: '0 0 500px', maxWidth: '500px', height: '400px', borderRadius: '8px' }}>
  <img 
    src="/kaikabc.png" // Path relative to the public folder
    alt="Kaika Certified Provider" 
    style={{
      width: '100%',
      height: '100%',
      borderRadius: '8px',
      objectFit: 'cover'
    }}
  />
</div>
        </div>


        <div style={{
          textAlign: 'center',
          borderTop: '1px solid #dee2e6',
          paddingTop: '20px',
          color: 'black',
          fontSize: '0.9rem'
        }}>
          <p>&copy; 2024 Kaika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;