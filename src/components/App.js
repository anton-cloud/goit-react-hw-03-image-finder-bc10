import React,{Component} from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import { fetchImages } from "./services/api";
import { AppStyled } from './AppStyled.js';
import Button from "./imageGalleryItem/button/Button";

const initialState = {
  searchImg: '',
  images:[],
  error:'',
  page: 1,
  isLoading: false,
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

  render() {

   const {images} = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery images={images}/>
        {images.length > 0 && <div className='WrapperForBtn'><Button onLoadMore={this.onLoadMore}/></div>}
      </AppStyled>    
    );
  }
}

export default App;
