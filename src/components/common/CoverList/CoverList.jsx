import React from 'react';
import styled from 'styled-components';

const CoverList = ({ headerTitle, data }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face'; // 임시
  return (
    <CoverContentWrap>
      <h2>{headerTitle}</h2>
      <CoverItemList>
        {data.results &&
          data.results.map((e) => (
            <CoverItem key={e.id}>
              <img src={`${IMG_URL}${e.poster_path}`} />
              <p>
                {e.title} <span>⭐️ {e.vote_average}</span>
              </p>
              <span>{e.release_date}</span>
            </CoverItem>
          ))}
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
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const CoverItemList = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
`;

const CoverItem = styled.div`
  margin-left: 20px;
  width: 150px;
  min-width: 150px;
  line-height: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    font-weight: 700;
  }

  span {
    color: rgb(0 0 0 / 60%);
  }
`;
