import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../../GlobalState';
import { changeTheme, changeLanguage } from '../../rootActions';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const ControllsStyled = styled.div`
  display: flex;
  align-items: center;

  & > i {
    cursor: pointer;
  }

  & > i:first-child {
    margin-right: 1rem;
  }

  & > i:hover {
    transform: scale(1.2);
    color: ${(props) => (props.theme.mode === 'dark' ? '#bfb9fb' : '#4fa7ff')};
  }
`;

function Controlls() {
  const { state, dispatch } = useContext(GlobalState);
  const { t } = useTranslation();

  const setTheme = () => dispatch(changeTheme);
  const setLang = () => dispatch(changeLanguage);

  useEffect(() => {
    document.documentElement.lang = state.language;
    i18n.changeLanguage(state.language);
  }, [state.language]);

  return (
    <ControllsStyled>
      <i
        title={t('header theme')}
        onClick={setTheme}
        className='fas fa-lightbulb'
      ></i>
      <i
        title={t('header language')}
        onClick={setLang}
        className='fas fa-globe'
      ></i>
    </ControllsStyled>
  );
}

export default Controlls;
