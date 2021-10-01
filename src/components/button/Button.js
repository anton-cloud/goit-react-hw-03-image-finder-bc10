import React from 'react'
import { ButtonStyled } from './ButtonStyled';

const Button = ({onLoadMore}) => {
  return (
    <div className='WrapperForBtn'>
      <ButtonStyled type = 'button' onClick={onLoadMore}>Load more</ButtonStyled>
    </div>
  );
}

export default Button;