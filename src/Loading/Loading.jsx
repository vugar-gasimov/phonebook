import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="loaderSecond">
        <span></span>
      </div>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #023e8a;
  min-height: 750px;
`;
