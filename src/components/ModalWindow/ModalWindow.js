import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: '#4e4a48',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalWindow = ({
  isModalState,
  isClose,
  stateСhangeModal,
  src,
  alt,
}) => {
  // console.log(isModalState);

  return (
    <Modal
      isOpen={isModalState}
      onRequestClose={stateСhangeModal}
      style={customStyles}
      contentLabel="onRequestClose"
    >
      <img src={src} alt={alt} width="800" />
    </Modal>
  );
};
