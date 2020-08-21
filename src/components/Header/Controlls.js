import React from 'react';
import styled from 'styled-components';

const ControllsStyled = styled.div`
  display: flex;
  align-items: center;

  &>i:first-child {
    margin-right: 1rem;
  }
`;

function Controlls() {
  return (
    <ControllsStyled>
      <i className='fas fa-lightbulb'></i>
      <i className='fas fa-globe'></i>
    </ControllsStyled>
  );
}

export default Controlls;
