import React, { useEffect, useState } from 'react';
import { getMovieCredits, getMovieDetail, getMoviePoster } from 'util/consts';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/common';
import MovieDetail from './MovieDetail';

const MovieDetailLayout = () => {
  const [movieDetailData, setMovieDetailData] = useState(null);
  const [moviePosterData, setMoviePosterData] = useState(null);
  const [movieDetailCredits, setMovieDetailCredits] = useState(null);
  const id = useParams().id;

  const getMovieDetailData = async (id) => {
    setMovieDetailData(await getMovieDetail(id, 'ko-KR'));
    setMovieDetailCredits(await getMovieCredits(id, 'ko-KR'));
    setMoviePosterData(await getMoviePoster(id));
  };

  useEffect(() => {
    getMovieDetailData(id);
  }, [id]);

  return (
    movieDetailData &&
    movieDetailCredits &&
    moviePosterData && (
      <Layout
        children={
          <MovieDetail
            detail={movieDetailData}
            credits={movieDetailCredits}
            poster={moviePosterData}
          />
        }
      />
    )
  );
};

export default MovieDetailLayout;
