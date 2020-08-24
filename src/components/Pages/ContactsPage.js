import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const ContactsPageStyled = styled(basicPageStyle)``;

const SocialsLinksStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-flow: column nowrap;
  }

  & a,
  & div.not-link {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    text-decoration: none;

    &:hover {
      color: ${(props) =>
        props.theme.mode === 'dark' ? '#bfb9fb' : '#4fa7ff'};
    }
  }

  & i {
    cursor: pointer;
    font-size: 1.4rem;
    margin-right: 1rem;
  }

  & span {
    text-decoration: underline;
  }
`;

function SocialsLinks() {
  return (
    <SocialsLinksStyled>
      <div>
        <a href='https://github.com/fav757/'>
          <i className='fab fa-github-alt'></i>
          <span>Github</span>
        </a>
        <a href='https://www.linkedin.com/in/oleksandrsapalsky/'>
          <i className='fab fa-linkedin-in'></i>
          <span>Linkedin</span>
        </a>
        <a href='https://t.me/sapalsky'>
          <i className='fab fa-telegram-plane'></i>
          <span>Telegram</span>
        </a>
      </div>

      <div>
        <div className='not-link'>
          <i className='fas fa-envelope'></i>
          <span>fav755@gmail.com</span>
        </div>
        <div className='not-link'>
          <i className='fas fa-phone-square'></i>
          <span>+380 975 290 153</span>
        </div>
      </div>
    </SocialsLinksStyled>
  );
}

function ContactsPage() {
  return (
    <ContactsPageStyled>
      <h2>Cocial networks</h2>
      <SocialsLinks />
    </ContactsPageStyled>
  );
}

export default ContactsPage;
