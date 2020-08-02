import React, { useState } from 'react';

import styled from '@emotion/styled';

// import FeatureCompList, { FEATURES } from './child';

type Props = {};

const FixedContainer = styled.div`
  position: fixed;
  border: 1px solid black;
  bottom: 0;
  right: 0;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 100px;
  border: 1px solid red;
  left: calc(100% + 100px);
  animation-name: slideIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  margin: 5px 0;

  @keyframes slideIn {
    100% {
      left: calc(100% - 100px);
    }
  }
`;

function Presenter({}: Props) {
  const [number, setNumber] = useState([1]);

  let container: any;

  return (
    <>
      <button
        onClick={() => {
          setNumber((prev) => {
            const seq = prev.length + 1;
            const test = prev.concat(seq);
            return test;
          });
        }}
      >
        click
      </button>
      <FixedContainer ref={(ref) => (container = ref)}>
        {number.map((_, index: number) => {
          return (
            <StyledDiv
              key={`${index}`}
              onClick={() => {
                number.splice(index, 1);
                setNumber([...number]);
              }}
            >
              test
            </StyledDiv>
          );
        })}
      </FixedContainer>
    </>
  );
}

export default Presenter;
