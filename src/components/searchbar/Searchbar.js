import React,{Component} from 'react'
import { SearchbarStyled } from './SearchbarStyled';


const initialState = {
  searchImg: '',
}

class Searchbar extends Component {
  state = {
    ...initialState,
  }

  onHandleChange = (e) => {
    const {name,value} = e.target;
    this.setState({
      [name]:value,
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.searchImg);
    this.setState({
      ...initialState
    })
  }


  render() {
    return (
      <SearchbarStyled>
      <form className="SearchForm" onSubmit={this.onHandleSubmit}>
       <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
       </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"  
        autoFocus
        placeholder="Search images and photos"
        name='searchImg'
        value={this.state.searchImg}
        onChange={this.onHandleChange}
      />
      </form>
    </SearchbarStyled>  
    );
  }
}

export default Searchbar;