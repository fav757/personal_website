import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeTheme } from '../../rootActions';

const ControllsStyled = styled.div`
  display: flex;
  align-items: center;

  &>i:first-child {
    margin-right: 1rem;
  }
`;

function Controlls() {
  const { dispatch } = useContext(GlobalState);
  const setTheme = () => dispatch(changeTheme);

  return (
    <ControllsStyled>
      <i onClick={setTheme} className='fas fa-lightbulb'></i>
      <i className='fas fa-globe'></i>
    </ControllsStyled>
  );
}

export default Controlls;
