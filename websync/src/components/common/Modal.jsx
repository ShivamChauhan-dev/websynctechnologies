import React from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    console.log('Modal is not open'); // Debugging
    return null;
  }
  console.log('Modal is open');

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
