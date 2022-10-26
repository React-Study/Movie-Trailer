import axios from 'axios';
import React, { useEffect } from 'react';
import http from 'util/api/base';
import { BASE_URL } from 'util/consts';

const MoviePopularPage = () => {
  useEffect(() => {
    movieGet();
    movieGet2();
    movieGenreGet();
    movieDiscoverGet();
  }, []);

  const movieGet2 = async () => {
    const response = await http.get({
      url: `${BASE_URL}/movie/popular`,
      params: { language: 'ko-KR', page: 1 },
    });
    /* 파일 전체에 no-console 룰 사용 안함, 파일 최상단에 선언 */
    /* eslint-disable no-console */
    console.log(response.data);
    return response.data;
  };

  const movieGet = async () => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          language: 'ko-KR',
          page: 1,
        },
      })
      .then((response) => {
        /* 파일 전체에 no-console 룰 사용 안함, 파일 최상단에 선언 */
        /* eslint-disable no-console */
        console.log(response.data);
      })
      .catch((error) => {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };

  const movieGenreGet = async () => {
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          language: 'ko-KR',
        },
      })
      .then((response) => {
        /* 파일 전체에 no-console 룰 사용 안함, 파일 최상단에 선언 */
        /* eslint-disable no-console */
        console.log(response.data);
      })
      .catch((error) => {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };

  const movieDiscoverGet = async () => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          language: 'ko-KR',
          sort_by: 'popularity.desc',
          page: 2,
        },
      })
      .then((response) => {
        /* 파일 전체에 no-console 룰 사용 안함, 파일 최상단에 선언 */
        /* eslint-disable no-console */
        console.log(response.data);
      })
      .catch((error) => {
        // 오류발생시 실행
      })
      .then(function () {
        // 항상 실행
      });
  };

  return <div>인기있는</div>;
};

export default MoviePopularPage;
