import React from 'react';
import { colors } from 'style';
import styled from 'styled-components';
import { POSTER_PATH_END_POINT } from 'util/consts';

const MovieDetail = ({ data }) => {
  const {
    title,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
    poster_path,
  } = data;

  return (
    <PosterDetailWrap>
      <PosterWrap>
        <img src={`${POSTER_PATH_END_POINT}${poster_path}`} alt="영화 포스터" />
      </PosterWrap>
      <DetailWrap>
        <h2>{title}</h2>
        <ul>
          <li>{release_date}</li>
          <li>{genres.map((genre) => `${genre.name}, `)}</li>
          <li>{runtime}</li>
        </ul>
        <VoteAverageWrap>별점(⭐): {vote_average}</VoteAverageWrap>
        <h3>{tagline}</h3>
        <h4>개요</h4>
        <p>{overview}</p>
      </DetailWrap>
    </PosterDetailWrap>
  );
};

export default MovieDetail;

const PosterDetailWrap = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
`;

const PosterWrap = styled.div`
  width: 19%;
  margin-right: 2%;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;

const DetailWrap = styled.div`
  width: 69%;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
  }
  ul {
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    li {
      float: left;
      margin-right: 30px;
      margin-bottom: 15px;
    }
  }
  h3 {
    font-size: 20px;
    font-style: italic;
    color: ${colors.gray3};
    margin-bottom: 15px;
  }
  h4 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  p {
    font: 16px/1.3 'arial';
  }
`;

const VoteAverageWrap = styled.span`
  display: block;
  margin-bottom: 15px;
`;
