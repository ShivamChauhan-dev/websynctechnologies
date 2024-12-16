import React from 'react';
import { Modal } from '../common/Modal';
import { GetStartedForm } from './GetStartedForm';
import { useGetStartedContext } from '../../context/GetStartedContext';

export function GetStartedModal() {
  const { isModalOpen, closeModal, selectedPlan } = useGetStartedContext();

  const handleSuccess = () => {
    closeModal();
    alert('Form submitted successfully!');
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <GetStartedForm selectedPlan={selectedPlan} onSuccess={handleSuccess} />
    </Modal>
  );
}
