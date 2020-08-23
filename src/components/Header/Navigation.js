import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavModalMenu from './NavModalMenu';
import { useHistory } from 'react-router-dom';

const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  & h2 {
    margin: 0 0 0 1rem;
  }
`;

const pageHistory = [];

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    pageHistory.push(history.location.pathname);
  }, [history.location.pathname]);

  const handleClick = () => setShowMenu(!showMenu);
  const backHistory = () => {
    if (pageHistory[pageHistory.length - 2]) {
      pageHistory.pop();
      history.goBack();
    } else {
      if (window.confirm('Do you want to leave the site?')) {
        history.goBack();
      }
    }
  };

  return (
    <NavigationStyled>
      <i onClick={backHistory} className='fas fa-arrow-left'></i>
      <div>
        <h2 onClick={handleClick}>Home</h2>
        {showMenu && <NavModalMenu setShowMenu={setShowMenu} />}
      </div>
    </NavigationStyled>
  );
}

export default Navigation;
