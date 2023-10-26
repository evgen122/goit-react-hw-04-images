import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    img: [],
    filter: '',
    page: 1,
    total: 0,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    this.addListImg(this.state);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.filter !== '' && prevState.filter !== this.state.filter) ||
      prevState.page !== this.state.page
    ) {
      this.addListImg();
    }

    // if (prevState.page !== this.state.page) {
    //   this.addListImg();
    // }
  }

  addSearch = newSearch => {
    this.setState({ page: 1 });
    this.setState({ img: [] });
    this.setState({ filter: newSearch.filter });
  };

  addListImg = async () => {
    const { filter, page } = this.state;
    if (filter !== '') {
      try {
        this.setState({ loading: true });
        const imges = await fetchImg(filter, page);
        return this.setState(prevState => ({
          img: [...prevState.img, ...imges.hits],
          loading: false,
          total: imges.total,
        }));
      } catch (error) {}
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    console.log(this.state);
    console.log('page', this.state.page);
    const { img, filter, loading, total, page } = this.state;
    const listGallery = img;

    return (
      <div>
        <Searchbar onSearch={this.addSearch} />
        {loading && <Loader />}

        {filter.length > 0 && (
          <ImageGallery listGallery={listGallery} filter={filter} />
        )}

        {page < total / 12 && <Button onLoadMore={this.handleLoadMore} />}
      </div>
    );
  }
}
