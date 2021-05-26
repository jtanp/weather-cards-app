import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <SpinningLoader />
    </LoaderContainer>
  );
};

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const SpinningLoader = styled.div`
  content: "";
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border-top: 2px solid rgba(20, 30, 50, 1);
  border-right: 2px solid transparent;
  animation: ${spin} 0.8s linear infinite;
`;

export default Loader;
