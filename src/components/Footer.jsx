// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="section" style={{
//       backgroundColor: '#ffffffff',
//       color: 'white',
//       // Vertical padding only (top 60px, bottom 30px). Horizontal padding is handled by the container.
//       padding: '60px 0 30px', 
//     }}>
//       {/* Container to set max width and left/right margin (20px space) */}
//       <div className="container" style={{ maxWidth: '1200px'}}>
        
//         {/* FOOTER GRID (Logo/Links) - Added grid properties for structure */}
//         <div className="footer-grid" style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(4, 1fr)', 
//           gap: '30px' 
//         }}> 
          
//           {/* Logo and Tagline */}
//           <div style={{ color: 'black' }}>
//             <img
//               src="/kaika.png"
//               alt="Kaika Logo"
//               style={{
//                 width: '80%', 
//                 height: '58%', 
//                 marginBottom: '2px',
//                 padding: '0px',
//               }}
//             />
//             <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
//               End-to-end operations for Apparel & FMCG brands
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 style={{
//               fontSize: '1.2rem',
//               marginBottom: '20px',
//               color: '#9000ad'
//             }}>
//               Services
//             </h3>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li><a href="#strategy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Strategy</a></li>
//               <li><a href="#design" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Design</a></li>
//               <li><a href="#manufacturing" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Manufacturing</a></li>
//               <li><a href="#fulfillment" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Fulfillment</a></li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 style={{
//               fontSize: '1.2rem',
//               marginBottom: '20px',
//               color: '#9000ad'
//             }}>
//               Company
//             </h3>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li><a href="#about-us" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>About Us</a></li>
//               <li><a href="#case-studies" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Case Studies</a></li>
//               <li><a href="#blog" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Blog</a></li>
//               <li><a href="#contact" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Contact</a></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 style={{
//               fontSize: '1.2rem',
//               marginBottom: '20px',
//               color: '#9000ad'
//             }}>
//               Legal
//             </h3>
//             <ul style={{ listStyle: 'none', padding: 0 }}>
//               <li><a href="#terms" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Terms & Conditions</a></li>
//               <li><a href="#privacy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Privacy Policy</a></li>
//               <li><a href="#escrow-policy" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Escrow Policy</a></li>
//               <li><a href="#supplier-agreement" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Supplier Agreement</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Separator */}
//         <hr style={{ border: 'none', borderTop: '1px solid #dee2e6', margin: '40px 0' }} />

//         {/* Certified Section */}
//         <div className="certified-section" style={{
//           backgroundColor: '#f8f9fa',
//           borderRadius: '10px',
//           padding: '40px 30px',
//           marginBottom: '30px',
//           border: '1px solid #e9ecef',
//           display: 'flex', 
//           gap: '40px', 
//           alignItems: 'center'
//         }}>

//           {/* Text/List Content - textAlign: 'left' ensures content is not centered. */}
//           <div style={{ flex: 1, textAlign: 'left' }}> 
//             <h3 style={{
//               fontSize: '1.5rem',
//               marginBottom: '15px',
//               color: '#333'
//             }}>
//               Become a **Kaika Certified Provider**
//             </h3>
//             <p style={{
//               fontSize: '1rem',
//               marginBottom: '25px',
//               color: '#666',
//               lineHeight: '1.6'
//             }}>
//               Join our network of trusted service providers and gain access to premium clients in the apparel and FMCG industries. Get visited, certified, and connected with brands that need your expertise.
//             </p>
            
//             <ul style={{
//               listStyle: 'none',
//               padding: 0,
//               marginBottom: '30px'
//             }}>
//               <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
//                 <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
//                 Access to premium client projects
//               </li>
//               <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
//                 <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
//                 Kaika Certification badge
//               </li>
//               <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
//                 <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
//                 Escrow protected payments
//               </li>
//               <li style={{ marginBottom: '12px', color: '#333', display: 'flex', alignItems: 'center' }}>
//                 <span style={{ color: '#28a745', marginRight: '10px', fontSize: '1.2rem' }}>✓</span>
//                 Dedicated support team
//               </li>
//             </ul>
            
//             <button className="btn-primary btn-purple" style={{
//               padding: '12px 30px',
//               fontSize: '1rem',
//               border: 'none',
//               borderRadius: '5px',
//               fontWeight: 'bold',
//               cursor: 'pointer',
//               backgroundColor: '#9000ad',
//               color: 'white',
//               transition: 'background-color 0.3s'
//             }} onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6fd8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#9000ad'}>
//               Get Certified
//             </button>
//           </div>

//           <div className="certified-image"> 
//             <img
//               src="/kaikabc.png" 
//               alt="Kaika Certified Provider"
//               style={{
//                 width: '100%',
//                 height: 'auto', 
//                 borderRadius: '8px',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>
//         </div>

//         {/* Copyright */}
//         <div style={{
//           textAlign: 'center',
//           borderTop: '1px solid #dee2e6',
//           paddingTop: '20px',
//           color: 'black',
//           fontSize: '0.9rem'
//         }}>
//           <p>&copy; 2024 Kaika. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="section footer-section">
      {/* Container to set max width and left/right margin (20px space) - Max width is now in app.css for 'container' */}
      <div className="container">

        {/* FOOTER GRID (Logo/Links) - Using class for grid layout */}
        <div className="footer-grid">

          {/* Logo and Tagline */}
          <div style={{ color: 'black' }}>
            <img
              src="/kaika.png"
              alt="Kaika Logo"
              style={{
                width: '80%',
                height: '58%',
                marginBottom: '2px',
                padding: '0px',
              }}
            />
            <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
              End-to-end operations for Apparel & FMCG brands
            </p>
          </div>

          {/* Services */}
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
              <li><a href="#fulfillment" style={{ color: 'black', textDecoration: 'none', display: 'block', marginBottom: '10px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#9000ad'} onMouseLeave={(e) => e.target.style.color = 'black'}>Fulfillment</a></li>
            </ul>
          </div>

          {/* Company */}
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

          {/* Legal */}
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

        {/* Separator */}
        <hr style={{ border: 'none', borderTop: '1px solid #dee2e6', margin: '40px 0' }} />

        {/* Certified Section - Using class for flex layout */}
        <div className="certified-section-box">

          {/* Text/List Content - textAlign: 'left' ensures content is not centered. */}
          <div className="certified-text">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              color: '#333'
            }}>
              Become a <span className="hcolor">Kaika Certified Provider</span>
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
              // Inline styles for colors and hover are kept as they are style/interaction, not layout
              backgroundColor: '#9000ad',
              color: 'white',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6fd8'} onMouseLeave={(e) => e.target.style.backgroundColor = '#9000ad'}>
              Get Certified
            </button>
          </div>

          <div className="certified-image">
            <img
              src="/kaikabc.png"
              alt="Kaika Certified Provider"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Copyright */}
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