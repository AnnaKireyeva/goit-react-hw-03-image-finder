import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    loading: false,
    error: null,
    showModal: false,
    largeImgUrl: '',
  };

  apiKey = '24065015-abf144b31d6566bdcce4b2cfb';
  baseUrl = 'https://pixabay.com/api/';

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ loading: true, hits: [], page: 1 });
      this.fetchImages();
    }
  }

  fetchImages = () => {
    fetch(
      `${this.baseUrl}?q=${this.state.query}&page=${this.state.page}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('No images for this request'));
      })
      .then(({ hits }) => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1,
        }));
        if (this.state.hits.length === 0) {
          return toast.error('No images for your request');
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ loading: false });
        this.toScroll();
      });
  };

  getQueryFromForm = query => {
    this.setState({ query });
  };

  toScroll = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  handleGalleryItem = e => {
    this.setState({
      largeImgUrl: e.target.currentSrc,
      showModal: true,
    });
  };

  toggleModal = imgUrl => {
    this.setState(state => ({
      showModal: !state.showModal,
      largeImgUrl: imgUrl,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="Title">Image finder</h1>
        {this.state.error && <h1>{this.state.message}</h1>}
        <Searchbar onSubmit={this.getQueryFromForm} />
        {/* {this.state.error && <h1>Something went wrong.</h1>} */}
        <ToastContainer autoClose={3000} />
        <ImageGallery
          images={this.state.hits}
          onClick={this.handleGalleryItem}
        />
        {this.state.loading && (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000}
            className="Loader"
          />
        )}
        {this.state.hits.length > 0 && !this.state.loading && (
          <Button loadMore={this.fetchImages} />
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            src={this.state.largeImgUrl}
            alt=""
          />
        )}
      </div>
    );
  }
}
