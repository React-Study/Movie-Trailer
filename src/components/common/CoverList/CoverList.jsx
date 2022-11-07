import React, { useState } from 'react';
import styled from 'styled-components';
import { typeText } from 'util/consts';

const CoverList = ({ headerTitle, data, types, changeTab, category }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face'; // 임시
  const [active, setActive] = useState(types[0]);

  return (
    <CoverListWrap>
      <TitleWrap>
        <span>{headerTitle}</span>
        <TabList>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => {
                setActive(type);
                changeTab(type, category);
              }}
            >
              {typeText(type)}
            </Tab>
          ))}
        </TabList>
      </TitleWrap>
      <ItemList>
        {data.results &&
          data.results.map((e) => (
            <Item key={e.id}>
              <img src={`${IMG_URL}${e.poster_path}`} />
              <p>
                {e.title ? e.title : e.name} <span>⭐️ {e.vote_average}</span>
              </p>
              <span>{e.release_date ? e.release_date : e.first_air_date}</span>
            </Item>
          ))}
      </ItemList>
    </CoverListWrap>
  );
};

export default CoverList;

const CoverListWrap = styled.section`
  width: 80%;
  padding: 40px;
`;

const TitleWrap = styled.div`
  display: flex;
  padding: 20px;

  span {
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const TabList = styled.div`
  border: 1px solid gray;
  border-radius: 30px;
  margin-top: -5px;
  margin-left: 20px;
`;

const Tab = styled.button`
  color: #565655;
  font-size: 1em;
  padding: 5px 10px 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  background: white;
  border: 0;
  outline: 0;
  line-height: 1.5;
  ${({ active }) =>
    active &&
    `
    color: white;
    background-color: #565655;
  `}
`;

const ItemList = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
`;

const Item = styled.div`
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
