import React, { useEffect } from 'react';

interface BaseModalProps {
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function BaseModal({ onClose, children, maxWidth = 'max-w-md' }: BaseModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
    >
      <div className={`modal-content relative w-full ${maxWidth} rounded-2xl shadow-2xl`}>
        {children}
      </div>
    </div>
  );
}
