import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeTheme, changeLanguage } from '../../rootActions';

const ControllsStyled = styled.div`
  display: flex;
  align-items: center;

  & > i:first-child {
    margin-right: 1rem;
  }

  & > i:hover {
    transform: scale(1.2);
    color: ${(props) => (props.theme.mode === 'dark' ? '#bfb9fb' : '#a6e1ec')};
  }
`;

function Controlls() {
  const { state, dispatch } = useContext(GlobalState);

  const setTheme = () => dispatch(changeTheme);
  const setLang = () => {
    dispatch(changeLanguage);
    document.documentElement.lang = state.language;
  };

  return (
    <ControllsStyled>
      <i onClick={setTheme} className='fas fa-lightbulb'></i>
      <i onClick={setLang} className='fas fa-globe'></i>
    </ControllsStyled>
  );
}

export default Controlls;
