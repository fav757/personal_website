import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';
import ContactForm from '../ContactForm/ContactForm';
import { useTranslation } from 'react-i18next';

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

  &:last-child {
    margin-bottom: 0;
  }

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
  const { t } = useTranslation();

  return (
    <ContactsPageStyled>
      <h2>{t('contactsPage cocial')}</h2>
      <SocialsLinks />
      <h2>{t('contactsPage contact')}</h2>
      <p>{t('contactsPage adblock')}<b>{t('contactsPage turn off')}</b></p>
      <ContactForm />
    </ContactsPageStyled>
  );
}

export default ContactsPage;
