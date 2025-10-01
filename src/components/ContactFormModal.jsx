import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ContactFormModal = () => {
  const { 
    selectedServices, 
    isFormModalOpen, 
    closeFormModal, 
    clearCart 
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const primaryColor = '#9000ad';

  // Service data (same as in ServiceDetails)
  const services = [
    {
      id: 'strategy',
      title: "Strategy",
      hasPrice: true,
      pricing: { basic: "$2,500" }
    },
    {
      id: 'design',
      title: "Design", 
      hasPrice: true,
      pricing: { basic: "$4,500" }
    },
    {
      id: 'manufacturing',
      title: "Manufacturing",
      hasPrice: true,
      pricing: { basic: "$3,500" }
    },
    {
      id: 'packaging',
      title: "Packaging",
      hasPrice: false
    },
    {
      id: 'fulfillment',
      title: "Fulfillment",
      hasPrice: false
    },
    {
      id: 'legal',
      title: "Legal",
      hasPrice: false
    },
    {
      id: 'marketing',
      title: "Marketing",
      hasPrice: false
    },
    {
      id: 'expansion',
      title: "Expansion",
      hasPrice: false
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Test function to check if the Google Apps Script URL is accessible
  const testGoogleAppsScript = async () => {
    try {
      console.log('Testing Google Apps Script URL...');
      console.log('URL being tested:', 'https://script.google.com/macros/s/AKfycbwrYxcLG4uwendWCkG8U3V7VgyDb5gJem91raGUvwTIy3t_x4NmXqakF-DY_oI7iGJE/exec');
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbwrYxcLG4uwendWCkG8U3V7VgyDb5gJem91raGUvwTIy3t_x4NmXqakF-DY_oI7iGJE/exec', {
        method: 'GET',
        mode: 'cors' // Explicitly set CORS mode
      });
      
      console.log('Test response:', response);
      console.log('Test status:', response.status);
      console.log('Test ok:', response.ok);
      
      if (response.ok) {
        const text = await response.text();
        console.log('Response text:', text);
      }
      
      return response.ok;
    } catch (error) {
      console.error('Test failed with error:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Test the URL first
    const isUrlAccessible = await testGoogleAppsScript();
    if (!isUrlAccessible) {
      console.error('Google Apps Script URL is not accessible');
      console.log('Please check:');
      console.log('1. Is your Google Apps Script deployed as a web app?');
      console.log('2. Is the deployment set to "Anyone" access?');
      console.log('3. Is the URL correct?');
      console.log('4. Try opening the URL directly in a browser tab');
      
      // For now, let's continue anyway to test the form logic
      console.log('Continuing with form submission despite URL test failure...');
    }

    try {
      const submissionData = {
        ...formData,
        selectedServices: selectedServices.map(serviceId => {
          const service = services.find(s => s.id === serviceId);
          return {
            id: serviceId,
            title: service.title,
            price: service.hasPrice && service.pricing?.basic ? service.pricing.basic : 'Custom pricing'
          };
        }),
        submissionDate: new Date().toISOString(),
        timestamp: Date.now()
      };

      // Send to Google Apps Script using URL-encoded format
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append('name', submissionData.name);
      urlEncodedData.append('email', submissionData.email);
      urlEncodedData.append('phone', submissionData.phone || '');
      urlEncodedData.append('company', submissionData.company || '');
      urlEncodedData.append('notes', submissionData.notes || '');
      urlEncodedData.append('selectedServices', JSON.stringify(submissionData.selectedServices));
      urlEncodedData.append('submissionDate', submissionData.submissionDate);
      urlEncodedData.append('timestamp', submissionData.timestamp);

      console.log('Sending data to Google Apps Script...');
      console.log('URL:', 'https://script.google.com/macros/s/AKfycbwrYxcLG4uwendWCkG8U3V7VgyDb5gJem91raGUvwTIy3t_x4NmXqakF-DY_oI7iGJE/exec');
      console.log('Data being sent:', urlEncodedData.toString());

      // Updated with your working Google Apps Script URL
      const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwrYxcLG4uwendWCkG8U3V7VgyDb5gJem91raGUvwTIy3t_x4NmXqakF-DY_oI7iGJE/exec';
      
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData
      });

      console.log('Response received:', response);
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error text:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log('Response JSON:', result);
      
      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        notes: ''
      });
      clearCart();

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateEstimatedCost = () => {
    let total = 0;
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service.hasPrice && service.pricing?.basic) {
        const priceMatch = service.pricing.basic.match(/\$([0-9,]+)/);
        if (priceMatch) {
          total += parseInt(priceMatch[1].replace(',', ''));
        }
      }
    });
    return total;
  };

  if (!isFormModalOpen) return null;

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
      padding: '20px'
    }} onClick={closeFormModal}>
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '20px 30px',
          borderBottom: `2px solid ${primaryColor}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{ 
            fontSize: '1.8rem', 
            fontWeight: '700', 
            color: '#333',
            margin: 0
          }}>
            Get Your Quote
          </h2>
          <button 
            onClick={closeFormModal}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
              padding: '5px',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              color: '#155724',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>✓ Success!</h4>
              <p style={{ margin: 0 }}>
                Thank you for your interest! We've received your request and will contact you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              backgroundColor: '#f8d7da',
              border: '1px solid #f5c6cb',
              color: '#721c24',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>⚠ Error</h4>
              <p style={{ margin: 0 }}>
                There was an error submitting your form. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Selected Services Summary */}
          {selectedServices.length > 0 ? (
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '30px'
            }}>
              <h4 style={{ 
                fontSize: '1.2rem', 
                fontWeight: '600', 
                color: '#333',
                marginBottom: '15px'
              }}>
                Selected Services ({selectedServices.length}):
              </h4>
              <div style={{ display: 'grid', gap: '10px' }}>
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId);
                  return (
                    <div key={serviceId} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px',
                      backgroundColor: 'white',
                      borderRadius: '6px',
                      border: '1px solid #e9ecef'
                    }}>
                      <span style={{ fontWeight: '500', color: '#333' }}>
                        {service.title}
                      </span>
                      <span style={{ 
                        color: service.hasPrice ? primaryColor : '#666',
                        fontWeight: '600'
                      }}>
                        {service.hasPrice && service.pricing?.basic ? service.pricing.basic : 'Custom pricing'}
                      </span>
                    </div>
                  );
                })}
              </div>
              {calculateEstimatedCost() > 0 && (
                <div style={{
                  marginTop: '15px',
                  padding: '15px',
                  backgroundColor: primaryColor,
                  color: 'white',
                  borderRadius: '6px',
                  textAlign: 'center'
                }}>
                  <strong>Estimated Total: ${calculateEstimatedCost().toLocaleString()}</strong>
                  <div style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '5px' }}>
                    *Final pricing may vary based on specific requirements
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              color: '#856404',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>⚠ No Services Selected</h4>
              <p style={{ margin: 0 }}>
                Please select services from the Services page before submitting your inquiry.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {/* Name */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: `2px solid ${errors.name ? '#dc3545' : '#e9ecef'}`,
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p style={{ color: '#dc3545', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: `2px solid ${errors.email ? '#dc3545' : '#e9ecef'}`,
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p style={{ color: '#dc3545', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: `2px solid ${errors.phone ? '#dc3545' : '#e9ecef'}`,
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p style={{ color: '#dc3545', fontSize: '0.9rem', margin: '5px 0 0 0' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px'
                }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter your company name (optional)"
                />
              </div>
            </div>

            {/* Notes */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '8px'
              }}>
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                placeholder="Tell us more about your project, timeline, budget, or any specific requirements..."
              />
            </div>

            {/* Services Error */}
            {errors.services && (
              <div style={{
                backgroundColor: '#f8d7da',
                border: '1px solid #f5c6cb',
                color: '#721c24',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '30px'
              }}>
                {errors.services}
              </div>
            )}

            {/* Submit Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                disabled={isSubmitting || selectedServices.length === 0}
                style={{
                  padding: '15px 40px',
                  backgroundColor: selectedServices.length === 0 ? '#ccc' : primaryColor,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: selectedServices.length === 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Get My Quote'}
              </button>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginTop: '15px',
                marginBottom: 0
              }}>
                * Required fields. We'll respond within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;
