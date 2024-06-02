import React, { useState, useEffect } from 'react';

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div className={`fixed bottom-5 right-5 transition-transform transform ${show ? 'translate-y-0' : 'translate-y-10'} ${show ? 'opacity-100' : 'opacity-0'} bg-blue-500 text-white px-4 py-2 rounded shadow`}>
      {message}
    </div>
  );
};

export default Toast;
