import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from 'components/common/Layout/Layout';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w94h141 } from 'util/consts';

const Search = () => {
  const location = useLocation();
  const data = location.state.data;
  const menuList = ['영화', 'TV 프로그램'];
  const [tvData, setTvData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const setData = () => {
    const movieArr = [];
    const tvArr = [];
    for (const results of data.results) {
      switch (results.media_type) {
        case 'movie':
          movieArr.push(results);
          break;
        case 'tv':
          tvArr.push(results);
          break;
        default:
          break;
      }
    }
    setMovieData(movieArr);
    setTvData(tvArr);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <Layout>
      <ResultWrap>
        {console.info('tvData', tvData)}
        {console.info('movieData', movieData)}
        <MenuWrap>
          <p>Search Results</p>
          {menuList.map((e, idx) => {
            return <MenuItem key={idx}>{e}</MenuItem>;
          })}
        </MenuWrap>
        <ListWrap>
          {movieData.length > 0 &&
            movieData.map((e, idx) => {
              return (
                <ListItem key={idx}>
                  <img
                    src={`${BASE_IMAGE_URL}${w94h141}${e.poster_path}`}
                    alt={e.title ? e.title : e.name}
                  />
                  <Content>
                    <p>{e.title}</p>
                    <span>{e.overview}</span>
                  </Content>
                </ListItem>
              );
            })}
        </ListWrap>
      </ResultWrap>
    </Layout>
  );
};

export default Search;

const ResultWrap = styled.section`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: flex-start;
  align-items: stretch;
  padding: 40px 30px 40px 30px;
  margin-left: 150px;
`;

const MenuWrap = styled.div`
  float: left;
  width: 220px;
  height: fit-content;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 10px;
  p {
    padding: 20px;
    font-size: 1em;
    font-weight: bold;
    color: white;
    background-color: gray;
    border-radius: 10px 10px 0px 0px;
  }
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  font-size: 1em;
  line-height: 1.4em;
  cursor: pointer;
`;

const ListWrap = styled.div`
  float: left;
  width: 800px;
  margin-bottom: 20px;
  padding-left: inherit;
`;

const ListItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  font-size: 1em;
  line-height: 1.4em;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  border-radius: 10px;
  img {
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  p {
    margin-bottom: 20px;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
  }
  span {
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
  }
`;
