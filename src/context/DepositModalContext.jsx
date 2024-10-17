import { createContext, useState, useContext } from 'react';

const DepositContext = createContext();

export const DepositProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  };
  const selectPayment = (payment) => setSelectedPayment(payment);

  return (
    <DepositContext.Provider value={{ isModalOpen, selectedPayment, openModal, closeModal, selectPayment }}>
      {children}
    </DepositContext.Provider>
  );
};

export const useDepositModal = () => useContext(DepositContext);
