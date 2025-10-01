// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const SuccessStories = () => {
//   const stories = [
//     {
//       title: "Apparel Brand",
//       metric: "+47% Revenue",
//       description: "Complete Brand Transformation",
//       details: "From concept to market in 90 days with seamless execution",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"  // Placeholder URL
//     },
//     {
//       title: "FMCG Product",
//       metric: "-32% CAC",
//       description: "Packaging & Distribution Overhaul",
//       details: "Redesigned packaging that increased shelf appeal and reduced costs",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Retail Expansion",
//       metric: "+28 Shares",
//       description: "National Retail Expansion",
//       details: "Scaled from regional to national presence in 12 months",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Tech Startup",
//       metric: "+150% Growth",
//       description: "Digital Marketing Campaign",
//       details: "Viral social media strategy that boosted user acquisition",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Beauty Brand",
//       metric: "+65% Sales",
//       description: "Influencer Collaboration",
//       details: "Partnership with micro-influencers for authentic reach",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Food Delivery",
//       metric: "-40% Churn",
//       description: "Customer Retention Program",
//       details: "Loyalty rewards system that improved customer satisfaction",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     }
//   ];

//   const primaryColor = '#9000ad'; 
//   const horizontalPadding = 'clamp(10px, 5vw, 20px)'; 

//   return (
//     <section className="section" style={{
//       paddingTop: `clamp(60px, 10vw, 80px)`,
//       paddingBottom: `clamp(60px, 10vw, 80px)`,
//       paddingLeft: '0', 
//       paddingRight: '0',
      
//       backgroundColor: '#f8f9fa',
//       width: '100%',
//       overflowX: 'hidden', 
//       margin: '0 auto',
//       boxSizing: 'border-box'
//     }}>
//       <div 
//         className="container" 
//         style={{
//           maxWidth: '1200px', 
//           margin: '0 auto',
//           paddingLeft: horizontalPadding,
//           paddingRight: horizontalPadding,
//           boxSizing: 'border-box'
//         }}
//       >
//         <h2 style={{
//           textAlign: 'center',
//           fontSize: 'clamp(2rem, 4vw, 2.5rem)',
//           marginBottom: '50px',
//           color: '#333'
//         }}>
//           Success Stories
//         </h2>
        
//         <div style={{ position: 'relative' }}>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true} // Infinite looping enabled
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           // Set navigation and pagination to false by default/globally
//           navigation={false} 
//           pagination={false} 
          
//           breakpoints={{
//             320: {
//               slidesPerView: 1.15, // Mobile peek effect
//               spaceBetween: 30, 
//               freeMode: false,
//               navigation: { enabled: false }, // HIDDEN: Arrows on mobile
//               pagination: { enabled: false } // HIDDEN: Dots on mobile
//             },
//             640: {
//               slidesPerView: 2.15, // Tablet peek effect
//               spaceBetween: 30,
//               freeMode: false,
//               navigation: { enabled: false }, // HIDDEN: Arrows on tablet
//               pagination: { enabled: false } // HIDDEN: Dots on tablet
//             },
//             1024: {
//               slidesPerView: 3, 
//               spaceBetween: 30,
//               freeMode: false,
//               navigation: { enabled: false }, // HIDDEN: Arrows on desktop
//               pagination: { enabled: false } // HIDDEN: Dots on desktop
//             },
//           }}
//           style={{ 
//             // Swiper full-bleed hack to create padding/peek
//             width: `calc(100% + 2 * ${horizontalPadding})`, 
//             marginLeft: `calc(-1 * ${horizontalPadding})`,
//             marginRight: `calc(-1 * ${horizontalPadding})`,
//             paddingLeft: horizontalPadding, 
//             paddingRight: horizontalPadding,
//             // Adjust padding since pagination dots are hidden
//             paddingBottom: '30px', 
//             margin: '0 auto',
//             overflow: 'visible',
//             boxSizing: 'border-box',
//           }}
//         >
//           {stories.map((story, index) => (
//             <SwiperSlide key={index}>
//               <div 
//                 className="card" 
//                 style={{
//                   backgroundColor: 'white',
//                   padding: 'clamp(15px, 3vw, 25px)',
//                   borderRadius: '15px',
//                   boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
//                   margin: '0', 
//                   transition: 'transform 0.3s ease',
//                   borderTop: `4px solid ${primaryColor}` 
//                 }}
//               >
//                 {/* Responsive Video Wrapper (16:9 aspect ratio) */}
//                 <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
//                     <iframe
//                         style={{ 
//                             position: 'absolute', 
//                             top: 0, 
//                             left: 0, 
//                             width: '100%', 
//                             height: '100%',
//                             borderRadius: '10px'
//                         }}
//                         src={story.videoUrl}
//                         title={story.title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
                
//                 <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
//                   {story.title} <span style={{ color: '#28a745', fontWeight: 'bold' }}>{story.metric}</span>
//                 </h3>
//                 <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: primaryColor }}>
//                   {story.description}
//                 </h4>
//                 <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
//                   {story.details}
//                 </p>
//                 <button className="btn-link" style={{
//                   color: primaryColor,
//                   border: 'none',
//                   background: 'none',
//                   textDecoration: 'underline',
//                   cursor: 'pointer',
//                   fontWeight: 'bold'
//                 }}>
//                   Read case study
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
          
//         </Swiper>
        
//         {/*
//           Removed the explicit swiper-button-prev-stories and swiper-button-next-stories elements
//           and the custom CSS block since navigation is disabled on all breakpoints.
//         */}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuccessStories;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SuccessStories = () => {
  const stories = [
    // ... (stories array remains the same)
    {
      title: "Apparel Brand",
      metric: "+47% Revenue",
      description: "Complete Brand Transformation",
      details: "From concept to market in 90 days with seamless execution",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "FMCG Product",
      metric: "-32% CAC",
      description: "Packaging & Distribution Overhaul",
      details: "Redesigned packaging that increased shelf appeal and reduced costs",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Retail Expansion",
      metric: "+28 Shares",
      description: "National Retail Expansion",
      details: "Scaled from regional to national presence in 12 months",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Tech Startup",
      metric: "+150% Growth",
      description: "Digital Marketing Campaign",
      details: "Viral social media strategy that boosted user acquisition",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Beauty Brand",
      metric: "+65% Sales",
      description: "Influencer Collaboration",
      details: "Partnership with micro-influencers for authentic reach",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Food Delivery",
      metric: "-40% Churn",
      description: "Customer Retention Program",
      details: "Loyalty rewards system that improved customer satisfaction",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const primaryColor = '#9000ad'; 
  // Keep this responsive padding variable
  const horizontalPadding = 'clamp(10px, 5vw, 20px)'; 

  return (
    <section className="section" style={{
      paddingTop: `clamp(60px, 10vw, 80px)`,
      paddingBottom: `clamp(60px, 10vw, 80px)`,
      paddingLeft: '0', 
      paddingRight: '0',
      
      backgroundColor: '#f8f9fa',
      width: '100%',
      // Ensure no hidden overflow is interfering
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      <div 
        className="container" 
        style={{
          maxWidth: '1500px', 
          margin: '0 auto',
          // CRITICAL CHANGE: Remove padding from the container
          // The padding will be applied directly to the Swiper instead.
          paddingLeft: '0', 
          paddingRight: '0',
          boxSizing: 'border-box'
        }}
      >
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '50px',
          color: '#333',
          // Add padding to the H2 to align it with where the slides start
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}>
          Real <span className="hcolor">Results</span>, Real <span className="hcolor">Clients</span>
        </h2>
        
        <div style={{ position: 'relative' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true} 
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={true} 
          pagination={false} 
          
          breakpoints={{
            320: {
              slidesPerView: 1, // Full slide on small mobile
              spaceBetween: 30, 
            },
            640: {
              slidesPerView: 3, // 2 slides on tablet
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4, // 3 slides on desktop
              spaceBetween: 30,
            },
          }}
          style={{ 
            // Re-introducing Swiper padding for alignment
            // This padding is what creates the "gap" you are seeing at the edges.
            paddingLeft: horizontalPadding, 
            paddingRight: horizontalPadding,
            
            // Adjust padding since pagination dots are hidden
            padding: '20px', 
            margin: '0 auto',
            // CRITICAL: Set the track to use padding mode
            overflow: 'hidden', 
            boxSizing: 'border-box',
          }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div 
                className="card" 
                style={{
                  backgroundColor: 'white',
                  padding: 'clamp(15px, 3vw, 25px)',
                  borderRadius: '15px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  margin: '0', 
                  transition: 'transform 0.3s ease',
                  borderTop: `4px solid ${primaryColor}` 
                }}
              >
                {/* ... card content remains the same ... */}
                {/* Responsive Video Wrapper (16:9 aspect ratio) */}
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%',
                            borderRadius: '10px'
                        }}
                        src={story.videoUrl}
                        title={story.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                
                <h3 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '10px', color: '#333' }}>
                  {story.title} <span style={{ color: '#28a745', fontWeight: 'bold' }}>{story.metric}</span>
                </h3>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: primaryColor }}>
                  {story.description}
                </h4>
                <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                  {story.details}
                </p>
                <button className="btn-link" style={{
                  color: primaryColor,
                  border: 'none',
                  background: 'none',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Read case study
                </button>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;