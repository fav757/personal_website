import React from 'react';
import styled from 'styled-components';
import basicPageStyle from './PageBasicStyle';

const Page404PStyled = styled(basicPageStyle)``;

function Page404() {
  return (
    <Page404PStyled>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
      <p>Sorry, but looks like your link include a mistake</p>
    </Page404PStyled>
  );
}

export default Page404;
