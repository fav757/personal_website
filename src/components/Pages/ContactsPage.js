import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const ContactsPageStyled = styled(basicPageStyle)``;

function ContactsPage() {
  return (
    <ContactsPageStyled>
      <h1>Contact me</h1>
      <h2>Cocial networks</h2>
      <p>
        My github account linc.
      </p>
    </ContactsPageStyled>
  );
}

export default ContactsPage;