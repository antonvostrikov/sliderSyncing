import React from 'react'

import { ReactComponent as Close } from '../../icons/closeIcon.svg'

interface IModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal:React.FC<IModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <div className={isOpen ? 'modal-wrapper active' : 'modal-wrapper'}>
      <div className="modal-window">
        <Close onClick={closeModal} />
        { children }
      </div>
    </div>
  )
}

export default Modal