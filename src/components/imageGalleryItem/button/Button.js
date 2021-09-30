import React from 'react'
import { ButtonStyled } from './ButtonStyled';

const Button = ({onLoadMore}) => {
  return (

    <ButtonStyled type = 'button' onClick={onLoadMore}>Load more</ButtonStyled>
  );
}

export default Button;