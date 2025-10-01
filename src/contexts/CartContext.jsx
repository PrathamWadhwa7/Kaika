import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const addService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) ? prev : [...prev, serviceId]
    );
  };

  const removeService = (serviceId) => {
    setSelectedServices(prev => prev.filter(id => id !== serviceId));
  };

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const clearCart = () => {
    setSelectedServices([]);
  };

  const openFormModal = () => {
    setIsFormModalOpen(true);
  };

  const closeFormModal = () => {
    setIsFormModalOpen(false);
  };

  const value = {
    selectedServices,
    addService,
    removeService,
    toggleService,
    clearCart,
    isFormModalOpen,
    openFormModal,
    closeFormModal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
