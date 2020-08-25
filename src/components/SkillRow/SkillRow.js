import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const ProgressBar = styled.div`
  width: 100%;
`;

const ProgressBarContainer = styled.div`
  margin: 1rem 0;
  display: block;
  width: 100%;
  height: 0.35rem;
  line-height: 0.35rem;
  background: ${props => props.theme.mode === 'dark' ? '#282838' : 'lightgray'};
  border-radius: 1rem;
`;

const ProgressRow = styled.div`
  float: left;
  width: ${(props) => props.width + '%'};
  height: 100%;
  background: ${props => props.theme.mode === 'dark' ? '#6a6692' : 'gray' };
  border-radius: 1rem;
`;

const ProgressThumb = styled.div`
  float: left;
  width: 0.35rem;
  height: 0.35rem;
  margin-left: -0.35rem;
  transform: scale(2);
  background: ${props => props.theme.mode === 'dark' ? '#bfb9fb' : 'gray'};
  border-radius: 50%;
`;

const ProgressDescription = styled.div`
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;

  /* React transition animations */
  &.progressBar-enter {
    transform: scaleY(0);
  }

  &.progressBar-enter-active {
    transform: scaleY(1);
    transition: 500ms;
  }

  &.progressBar-exit-active {
    transform: scaleY(0);
    transition: 500ms;
  }
`;

function SkillRow(props) {
  const [showDescription, setShowDesription] = useState(false);
  const handleClick = () => setShowDesription(!showDescription);

  return (
    <ProgressBar onClick={handleClick}>
      <p>{props.title}</p>
      <ProgressBarContainer>
        <ProgressRow width={props.skillLevel}></ProgressRow>
        <ProgressThumb />
      </ProgressBarContainer>
      <CSSTransition
        in={showDescription}
        timeout={500}
        classNames='progressBar'
        unmountOnExit
      >
        <ProgressDescription>
          <ul>
            {props.skillsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ProgressDescription>
      </CSSTransition>
    </ProgressBar>
  );
}

export default SkillRow;
