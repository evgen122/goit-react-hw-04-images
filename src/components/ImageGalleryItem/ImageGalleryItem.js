import { useState } from 'react';
import { ItemImg } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const ImageGalleryItem = ({
  item: { id, webformatURL, largeImageURL, tags },
}) => {
  const [isModalState, setIsModalState] = useState(false);

  const stateСhangeModal = () => {
    if (isModalState === true) {
      setIsModalState(false);
    } else {
      setIsModalState(true);
    }
  };

  return (
    <li className="gallery-item" key={id} onClick={stateСhangeModal}>
      <ItemImg src={webformatURL} alt={tags} />

      <ModalWindow
        stateСhangeModal={stateСhangeModal}
        isModalState={isModalState}
        src={largeImageURL}
        alt={tags}
      />
    </li>
  );
};
