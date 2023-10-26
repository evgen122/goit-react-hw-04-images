import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ listGallery, filter }) => {
  console.log('listGallery', listGallery);
  return (
    <List className="gallery">
      {listGallery.map(i => (
        <ImageGalleryItem item={i} key={i.id} />
      ))}
    </List>
  );
};
