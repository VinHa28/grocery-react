import React from 'react'
import Modal from '../../commons/Modal'
import ModalHeading from '../../commons/Modal/ModalHeading'
import ModalBottom from '../../commons/Modal/ModalBottom'
import Button from '../Button'

export default function ConfirmModal({
  open = true,
  setOpen = () => {},
  handleConfirm = () => {},
  message = 'Are you sure you want to delete?',
  className = '',
} = {}) {
  return (
    <Modal open={open} className={`modal--small ${className}`}>
      <div className="modal__text">{message}</div>
      <ModalBottom>
        <Button className='btn--text modal__btn' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button className='btn--primary modal__btn' onClick={handleConfirm}>
          Confirm
        </Button>
      </ModalBottom>
    </Modal>
  )
}
