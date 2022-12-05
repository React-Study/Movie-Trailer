import React from 'react';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w150h225 } from 'util/consts';

const CharacterMovieList = ({ data }) => {
  const { cast } = data;
  // console.info('hahaha', cast);

  return (
    <CoverListWrap>
      <ItemList>
        {cast &&
          cast
            .filter((e) => e.poster_path)
            .sort((a, b) => b.popularity - a.popularity)
            .map((e) => (
              <Item key={e.id}>
                <img
                  src={`${BASE_IMAGE_URL}${w150h225}${e.poster_path}`}
                  alt={e.title}
                />
                <p>{e.title ? e.title : e.name}</p>
              </Item>
            ))}
      </ItemList>
    </CoverListWrap>
  );
};

export default CharacterMovieList;

const CoverListWrap = styled.section`
  width: 750px;
  // padding: 20px 40px 20px 40px;
`;

const ItemList = styled.div`
  width: 850px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 15%);
    border-radius: 6px;
  }
`;

const Item = styled.div`
  margin-right: 20px;
  width: 100px;
  min-width: 120px;
  line-height: 20px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    font-weight: 500;
    font-size: 12px;
  }

  span {
    color: rgb(0 0 0 / 60%);
  }
`;
