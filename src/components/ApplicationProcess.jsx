import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AppProcess = () => {
  // --- UPDATED STEPS CONTENT ---
  const steps = [
    { 
      number: "1", 
      title: "Application Review", 
      description: "We review your application and portfolio (3-5 business days)" 
    },
    { 
      number: "2", 
      title: "Interview and Assessment", 
      description: "Brief interview and skill assessment if shortlisted" 
    },
    { 
      number: "3", 
      title: "Probationary Period", 
      description: "Complete 1-2 projects with quality evaluations" 
    },
    { 
      // The component automatically changes the last step's number to a '✔' (tick) 
      // icon when it's the active step, due to the existing logic.
      number: "4", 
      title: "Kaika Certification", 
      description: "Get certified and start receiving quality projects" 
    },
  ];
  // -----------------------------

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
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(1.4rem, 3vw, 1.4rem)",
            marginBottom: "40px",
            color: "#333",
          }}
        >
        <span className="hcolor"> Application Process</span>
        </h3>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              {/* Step circle */}
              <motion.div
                animate={{
                  backgroundColor:
                    activeStep === steps.length - 1 && index === steps.length - 1
                      ? "#28a745" // Green for the final step
                      : activeStep >= index
                      ? "rgba(144,0,173,0.15)" // Light purple for completed/active steps
                      : "#f1f1f1", // Grey for future steps
                  borderColor: activeStep >= index ? "#9000ad" : "#ccc", // Purple border
                  scale: activeStep === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="step-circle"
              >
                {/* Logic to show a checkmark on the last step when completed */}
                {activeStep === steps.length - 1 && index === steps.length - 1
                  ? "✔"
                  : step.number}
              </motion.div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  // Changed initial/animate to use scaleY for vertical animation
                  initial={{ scaleY: 0 }}
                  // Animation: connector fills up when the next step is active
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

      {/* Responsive + Connector fixes (Unchanged CSS) */}
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
            height: 40px; 
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

export default AppProcess;