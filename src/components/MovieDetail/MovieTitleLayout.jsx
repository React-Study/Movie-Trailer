import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { POSTER_PATH_END_POINT } from 'util/consts';

const MovieTitleLayout = ({ detail, credits, poster }) => {
  const {
    title,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
    poster_path,
  } = detail;

  const { crew } = credits;

  const setRandomCrewList = () => {
    const crewList = [];

    while (crewList.length < 10) {
      crewList.push(crew.splice(Math.floor(Math.random() * crew.length), 1)[0]);
    }

    return crewList;
  };

  const [crewList, setCrewList] = useState([]);

  useEffect(() => {
    setCrewList(setRandomCrewList());
  }, []);

  console.info(poster.backdrops[0]);

  return (
    <TitleDetailWrap
      poster={`${POSTER_PATH_END_POINT}${poster.backdrops[0].file_path}`}
    >
      <PosterWrap>
        <img src={`${POSTER_PATH_END_POINT}${poster_path}`} alt="영화 포스터" />
      </PosterWrap>
      <DetailWrap>
        <h2>{title}</h2>
        <ul>
          <li>{release_date}</li>
          <li>
            {genres.map((genre, idx) =>
              idx > 0 ? `, ${genre.name}` : genre.name,
            )}
          </li>
          <li>{runtime}분</li>
        </ul>
        <VoteAverageWrap>별점(⭐): {vote_average}</VoteAverageWrap>
        <h3>{tagline}</h3>
        <h4>개요</h4>
        <p>{overview}</p>
        <ul>
          {crewList.map((crew, idx) => {
            return (
              <li key={idx}>
                <h5>{crew.name}</h5>
                <p>{crew.job}</p>
              </li>
            );
          })}
        </ul>
      </DetailWrap>
    </TitleDetailWrap>
  );
};

export default MovieTitleLayout;

const TitleDetailWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.poster});
  color: white;
`;

const PosterWrap = styled.div`
  width: 19%;
  padding: 30px 0px 30px 10%;
  height: 500px;
  margin-right: 3%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailWrap = styled.div`
  width: 30%;
  padding: 30px 10% 30px 0px;
  padding-top: 30px;

  h2 {
    font-weight: bold;
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
    color: white;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  h5 {
    margin-bottom: 5px;
  }
  p {
    font: 14px/1.5 'arial';
    margin-bottom: 20px;
  }
`;

const VoteAverageWrap = styled.span`
  display: block;
  margin-bottom: 15px;
`;
