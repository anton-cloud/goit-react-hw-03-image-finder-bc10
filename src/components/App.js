import React,{Component} from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { fetchImages } from "./services/api";
import { AppStyled } from './AppStyled.js';
import Button from './button/Button'
import Modal from "./modal/Modal";
import LoaderComponent from "./loader/LoaderComponent";


const initialState = {
  searchImg: '',
  images:[],
  largeImage:'',
  error:'',
  page: 1,
  isLoading: false,
  showModal: false,
}

class App extends Component {
  state = { 
    ...initialState
   }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchImg !== this.state.searchImg) {
      this.setState({isLoading: true})
      fetchImages(this.state.searchImg).then(result => this.setState(prev => ({
       images: result.data.hits, 
       page: prev.page + 1,
      })))
      .catch((error) => this.state({
        error,
      }))
      .finally(() => this.setState({
        isLoading: false,
      }))
    }
  }

  onSubmit = (searchImg) => {
    if(searchImg !== '')
    this.setState({
      searchImg
    })
  }

  onLoadMore = () => {
    this.setState({isLoading: true})
    fetchImages(this.state.searchImg, this.state.page).then(result => this.setState(prev => ({
      images: [...prev.images, ...result.data.hits],
      page: prev.page + 1,  
    })))
    .catch((error) => this.setState({
      error,
    }))
    .finally(() => 
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    }),
      this.setState({isLoading: false,})
    )
  }

  onOpenModal = (largeImage) => {
    this.setState({
      showModal: true,
      largeImage,
    })
  }

  onCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {

   const {images, showModal, largeImage, isLoading} = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit}/>
        {isLoading ? <LoaderComponent/> : <ImageGallery images={images} onOpenModal = {this.onOpenModal}/>}
        {Number.isInteger(images.length / 12) && images.length > 0 && <Button onLoadMore={this.onLoadMore}/>}
        {showModal && 
        <Modal onCloseModal = {this.onCloseModal}>
          <img src={largeImage} alt="img"/>
        </Modal>}
      </AppStyled>    
    );
  }
}

export default App;