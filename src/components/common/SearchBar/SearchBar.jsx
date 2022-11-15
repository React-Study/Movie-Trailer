import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSearch } from 'util/consts';

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    getSearchData('ko-KR', search);
  };

  const getSearchData = async (language, query) => {
    const searchData = await getSearch(language, query);
    setSearchData(searchData);
    navigate('/search', {
      state: {
        data: searchData,
      },
    });
  };

  useEffect(() => {}, [searchData]);

  return (
    <SearchWrap>
      <p>Welcome.</p>
      <span>
        Millions of movies, TV shows and people to discover. Explore now.
      </span>
      <br />
      <input
        type="text"
        value={search}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="영화, TV 프로그램, 인물 검색..."
      />
      <button onClick={handleClick}>검색</button>
    </SearchWrap>
  );
};

export default SearchBar;

const SearchWrap = styled.section`
  width: 87%;
  margin-left: 50px;
  padding-left: 50px;
  padding-bottom: 20px;
  height: calc(100vh / 3.5);
  background-color: lightgray;
  p {
    font-size: 3em;
    font-weight: bold;
    padding: 40px 0px 20px 40px;
  }
  span {
    font-size: 1.5em;
    padding: 40px 0px 20px 40px;
  }
  input {
    margin: 40px 0px 20px 40px;
    background-color: white;
    height: 40px;
    width: 50%;
    padding-left: 20px;
    border: 2px solid rgba(0, 0, 0, 0.23);
    border-radius: 30px;
    ::placeholder {
      font-size: 1em;
    }
    :focus {
      outline: none;
    }
  }
  button {
    position: absolute;
    padding: 12px 26px;
    border-radius: 30px;
    border: 2px solid rgba(0, 0, 0, 0.23);
    margin-left: -80px;
    margin-top: 40px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;
