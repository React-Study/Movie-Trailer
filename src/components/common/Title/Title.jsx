import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <TitleName>
      <h2>{title}</h2>
    </TitleName>
  );
};

export default Title;

const TitleName = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 1.6em;
    width: 100%;
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
`;
