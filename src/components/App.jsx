import { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../api';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [img, setImg] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    addListImg(filter, page);
  }, [filter, page]);

  const addSearch = newSearch => {
    setPage(1);
    setImg([]);
    setFilter(newSearch.filter);
  };

  const addListImg = async (filter, page) => {
    if (filter !== '') {
      try {
        setLoading(true);

        const imges = await fetchImg(filter, page);

        return (
          setImg(prevState => [...prevState, ...imges.hits]),
          setLoading(false),
          setTotal(imges.total)
        );
      } catch (error) {}
    }
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Searchbar onSearch={addSearch} />
      {loading && <Loader />}

      {filter.length > 0 && <ImageGallery listGallery={img} filter={filter} />}

      {page < total / 12 && <Button onLoadMore={handleLoadMore} />}
    </div>
  );
};
