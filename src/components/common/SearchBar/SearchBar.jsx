import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <SearchWrap>
      <p>Welcome.</p>
      <span>
        Millions of movies, TV shows and people to discover. Explore now.
      </span>
      <br />
      <input
        type="text"
        name="text"
        placeholder="영화, TV 프로그램, 인물 검색..."
      />
      <button type="submit">검색</button>
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
