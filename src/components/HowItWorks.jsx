
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    { number: "1", title: "Onboard", description: "Share your vision, goals, and constraints. We will understand your timeline, budget, and product ambition. We run the backend, you enjoy the growth." },
    { number: "2", title: "Strategize", description: "You’re paired with our team, which crafts a roadmap positioning, channel strategy, product plan, and go-to-market milestones. We build timeless brands." },
    { number: "3", title: "Execute", description: "From Vision to Factory. We activate our network: designers, agencies, manufacturers, legal counsel, and logistics partners. We run the brand and day-to-day execution, so you don’t have to. Execution without exhaustion." },
    { number: "4", title: "Assure", description: "Quality guaranteed: final sign-offs, testing, compliance checks, performance monitoring, and ongoing support. We stay accountable for results. From strategy to scale, we manage it all." },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Auto progress every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "white" }}>
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            marginBottom: "40px",
            color: "#333",
          }}
        >
          How <span className="hcolor"> Kaika </span>Works
        </h2>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              {/* Step circle */}
              <motion.div
                animate={{
                  backgroundColor:
                    activeStep === steps.length - 1 && index === steps.length - 1
                      ? "#28a745"
                      : activeStep >= index
                      ? "rgba(144,0,173,0.15)"
                      : "#f1f1f1",
                  borderColor: activeStep >= index ? "#9000ad" : "#ccc",
                  scale: activeStep === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="step-circle"
              >
                {activeStep === steps.length - 1 && index === steps.length - 1
                  ? "✔"
                  : step.number}
              </motion.div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  // Changed initial/animate to use scaleY for vertical animation
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeStep > index ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="connector"
                />
              )}

              {/* Step title + description */}
              <div className="step-text">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive + Connector fixes */}
      <style>{`
        /* Import Inter Font if not already included globally */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }

        .steps-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .step-item {
          flex: 1;
          text-align: center;
          position: relative;
        }

        .step-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 2px solid;
          margin: 0 auto 15px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          color: #9000ad;
          background: #fff;
          position: relative;
          /* Ensure circle is always on top */
          z-index: 10; 
          flex-shrink: 0;
        }

        .connector {
          position: absolute;
          background: #9000ad;
          /* Line must be behind circles */
          z-index: 0; 
          transform-origin: top; 
        }

        /* Desktop → horizontal line (Current logic remains correct) */
        @media (min-width: 769px) {
          .connector {
            top: 35px; /* middle of circle */
            left: calc(50% + 35px);
            height: 4px;
            width: calc(100% - 70px);
          }
          
          .connector[style*="scaleX"] {
            transform-origin: left;
          }

          .step-text {
            margin-top: 0;
          }
        }

        /* Mobile → vertical line + text on right (Updated to Edge-to-Edge Logic) */
        @media (max-width: 768px) {
          .steps-wrapper {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px; /* The exact gap size is used for line height */
          }

          .step-item {
            flex: unset;
            display: flex;
            align-items: flex-start;
            position: relative;
            width: 100%;
            max-width: 300px;
          }

          .step-circle {
            margin: 0; /* Important: Removes desktop margin so only gap remains */
          }

          .connector {
            /* FIX: Start line at the bottom edge of the 70px circle */
            top: 70px; 
            left: 35px; /* center of circle */
            transform: translateX(-50%);
            width: 4px;
            /* FIX: Set line height to exactly the gap between the steps */
            height: 80%; 
            background: #9000ad;
          }
          
          .connector[style*="scaleY"] {
            transform-origin: top;
          }

          .step-text {
            margin-left: 20px;
            text-align: left;
          }
        }

        .step-title {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #333;
        }

        .step-desc {
          color: #666;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
