import styled from 'styled-components';

const PageBasicStyle = styled.div`
  & a {
    color: inherit;
  }
  
  /* React transition animations */
  &.pageContainerAnimation-enter {
    transform: scale(0);
  }

  &.pageContainerAnimation-enter-active {
    transform: scale(1);
    transition: 1s;
  }

  &.pageContainerAnimation-exit-active {
    transform: scale(0);
    transition: 1s;
  }
`;

export default PageBasicStyle;
