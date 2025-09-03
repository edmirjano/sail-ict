'use client';

import { useState } from 'react';

export default function useLegalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const openTerms = () => openModal('terms');
  const openPrivacy = () => openModal('privacy');
  const openCookies = () => openModal('cookies');

  return {
    isOpen,
    modalType,
    openModal,
    closeModal,
    openTerms,
    openPrivacy,
    openCookies
  };
}
