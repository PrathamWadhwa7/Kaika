import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SuccessStories = () => {
  const stories = [
    {
      title: "Apparel Brand",
      metric: "+47% Revenue",
      description: "Complete Brand Transformation",
      details: "From concept to market in 90 days with seamless execution",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder, replace with actual UGC video
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

  return (
    <section className="section" style={{
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
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
          Success Stories
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          style={{ width: '100%', paddingBottom: '50px' }}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="card" style={{
                backgroundColor: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                transition: 'transform 0.3s ease'
              }}>
                <iframe
                  width="100%"
                  height="200"
                  src={story.videoUrl}
                  title={story.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '10px', marginBottom: '20px' }}
                ></iframe>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#333' }}>
                  {story.title} <span style={{ color: '#28a745', fontWeight: 'bold' }}>{story.metric}</span>
                </h3>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#9000ad' }}>
                  {story.description}
                </h4>
                <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.5' }}>
                  {story.details}
                </p>
                <button className="btn-link" style={{
                  color: '#9000ad',
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
    </section>
  );
};

export default SuccessStories;
