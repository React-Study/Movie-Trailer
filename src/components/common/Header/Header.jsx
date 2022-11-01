import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from 'style';
import styled from 'styled-components';
import {
  CHARACTER_LIST_PAGE,
  HOME_PAGE,
  logoSrc,
  MOVIE_POPULAR_PAGE,
} from 'util/consts';

const Header = () => {
  return (
    <HeaderWrap>
      <ul>
        <li>
          <Link to={HOME_PAGE}>
            <img src={logoSrc}></img>
          </Link>
        </li>
        <li>
          <Link to={MOVIE_POPULAR_PAGE}>영화</Link>
        </li>
        <li>
          <Link to={'/'}>TV프로그램</Link>
        </li>
        <li>
          <Link to={CHARACTER_LIST_PAGE}>인물</Link>
        </li>
      </ul>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  background: ${colors.gray1};

  ul {
    width: 80%;
    margin: 0 auto;
    content: '';
    display: block;
    clear: both;
    padding: 28px;

    li {
      float: left;
      margin-right: 30px;

      a {
        color: ${colors.white};
        font-size: 20px;

        img {
          width: 150px;
        }
      }
    }
  }
`;
