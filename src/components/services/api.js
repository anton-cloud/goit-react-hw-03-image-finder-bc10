import axios from "axios";

const API_KEY = '22368183-bf812a4cdd1e1ebd2a0bd646c';

export const fetchImages = (searchImg, page = 1 ) => {
  return axios.get(`https://pixabay.com/api/?q=${searchImg}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}


