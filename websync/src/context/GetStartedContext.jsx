import React, { createContext, useContext, useEffect, useState } from 'react';

const GetStartedContext = createContext(undefined);

export function GetStartedProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState();

  const openModal = (plan) => {
    console.log('Opening modal with plan:', plan); // Debugging
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(undefined);
  };

  useEffect(() => {
    console.log('isModalOpen:', isModalOpen, 'selectedPlan:', selectedPlan);
  }, [isModalOpen, selectedPlan]);

  return (
    <GetStartedContext.Provider value={{ isModalOpen, openModal, closeModal, selectedPlan }}>
      {children}
    </GetStartedContext.Provider>
  );
}

export function useGetStartedContext() {
  const context = useContext(GetStartedContext);
  if (context === undefined) {
    throw new Error('useGetStartedContext must be used within a GetStartedProvider');
  }
  return context;
}
