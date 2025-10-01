import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartIcon = () => {
  const { selectedServices, openFormModal } = useCart();
  const primaryColor = '#9000ad';

  return (
    <div 
      style={{
        position: 'relative',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease'
      }}
      onClick={openFormModal}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(144, 0, 173, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {/* Shopping Cart Icon */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: primaryColor }}
      >
        <path 
          d="M7 18C5.9 18 5.01 18.9 5.01 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5H5.21L4.27 3H1V2ZM17 18C15.9 18 15.01 18.9 15.01 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" 
          fill="currentColor"
        />
      </svg>

      {/* Service Count Badge */}
      {selectedServices.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: '#ff4444',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          minWidth: '20px',
          border: '2px solid white'
        }}>
          {selectedServices.length > 99 ? '99+' : selectedServices.length}
        </div>
      )}

      {/* Tooltip */}
      <div style={{
        position: 'absolute',
        bottom: '-35px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#333',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.visibility = 'visible';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0';
        e.currentTarget.style.visibility = 'hidden';
      }}
      >
        {selectedServices.length > 0 
          ? `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`
          : 'Select services'
        }
      </div>
    </div>
  );
};

export default CartIcon;
