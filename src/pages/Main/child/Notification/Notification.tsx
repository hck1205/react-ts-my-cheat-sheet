import React from 'react';
import styled from '@emotion/styled';

const FixedContainer = styled.div`
  width: 100%;
  position: fixed;
  border: 1px solid black;
  bottom: 0;
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

const Notificiation = () => {
  const test = new Array(5).fill((index: number) => index);
  return (
    <>
      {/* <StyledDiv /> */}
      <FixedContainer>
        {test.map(() => {
          return <StyledDiv>test</StyledDiv>;
        })}
      </FixedContainer>
    </>
  );
};

export default Notificiation;
