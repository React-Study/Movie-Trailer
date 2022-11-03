import React from 'react';
import styled from 'styled-components';

const CoverList = ({ headerTitle, data }) => {
  return (
    <CoverContentWrap>
      <h2>{headerTitle}</h2>
      <CoverItemList>
        {data.results &&
          data.results.map((e) => <CoverItem key={e.id}>{e.title}</CoverItem>)}
      </CoverItemList>
    </CoverContentWrap>
  );
};

export default CoverList;

const CoverContentWrap = styled.section`
  width: 80%;
  padding: 40px;

  h2 {
    padding: 20px;
  }
`;

const CoverItemList = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
`;

const CoverItem = styled.div`
  margin-left: 40px;
  width: 150px;
  min-width: 150px;
`;
