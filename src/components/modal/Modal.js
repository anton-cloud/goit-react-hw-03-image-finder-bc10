import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {createPortal} from 'react-dom'
import { ModalStyled } from './ModalStyled';

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    
  }

  handleKeyDown = (e) => {
    if(e.code === 'Escape') {
      this.props.onCloseModal()
    }
  }

  handleBackdropClick = (e) => {
    if(e.currentTarget === e.target) {
      this.props.onCloseModal()
    }
  }

  render() {
    return createPortal (
      <ModalStyled onClick = {this.handleBackdropClick}>
        <div className="Modal">
          {this.props.children}
        </div>
      </ModalStyled>, modalRoot
    );
  }
}

modalRoot.propTypes = {
  onCloseModal: PropTypes.func,
  children: PropTypes.node,
};


export default Modal;
