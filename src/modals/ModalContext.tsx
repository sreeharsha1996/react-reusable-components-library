import  { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { ModalConfig } from './types';
import ConfirmModal from './ConfirmModal';
import ErrorModal from './ErrorModal';
import DataModal from './DataModal';


interface ModalContextValue {
  openModal: (config: ModalConfig) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalConfig | null>(null);

  const openModal = useCallback((config: ModalConfig) => {
    setModal(config);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  function renderModal() {
    if (!modal) return null;
    switch (modal.type) {
      case 'confirm':
        return <ConfirmModal config={modal} onClose={closeModal} />;
      case 'error':
        return <ErrorModal config={modal} onClose={closeModal} />;
      case 'data':
        return <DataModal config={modal} onClose={closeModal} />;
      default:
        return null;
    }
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {renderModal()}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used inside <ModalProvider>');
  return ctx;
}
