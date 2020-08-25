import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import ContactForm from '../ContactForm/ContactForm';

const ContactsPageStyled = styled(basicPageStyle)``;

const SocialsLinksStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-flow: column nowrap;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialsLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  text-decoration: none;

  &:hover {
    color: ${(props) => (props.theme.mode === 'dark' ? '#bfb9fb' : '#4fa7ff')};
  }

  & > i {
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }

  & > span {
    text-decoration: underline;
  }
`;

function SocialsLinks() {
  return (
    <SocialsLinksStyled>
      <div>
        <SocialsLink
          href='https://github.com/fav757/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github-alt'></i>
          <span>Github</span>
        </SocialsLink>
        <SocialsLink
          href='https://www.linkedin.com/in/oleksandrsapalsky/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
          <span>Linkedin</span>
        </SocialsLink>
        <SocialsLink
          href='https://t.me/sapalsky'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-telegram-plane'></i>
          <span>Telegram</span>
        </SocialsLink>
      </div>

      <div>
        <SocialsLink as='div'>
          <i className='fas fa-envelope'></i>
          <span>fav755@gmail.com</span>
        </SocialsLink>
        <SocialsLink as='div'>
          <i className='fas fa-phone-square'></i>
          <span>+380 975 290 153</span>
        </SocialsLink>
      </div>
    </SocialsLinksStyled>
  );
}

function ContactsPage() {
  return (
    <ContactsPageStyled>
      <h2>Cocial networks</h2>
      <SocialsLinks />
      <h2>Contact me</h2>
      <p>Adblock can block form submission. Please <b>turn it off</b>.</p>
      <ContactForm />
    </ContactsPageStyled>
  );
}

export default ContactsPage;
