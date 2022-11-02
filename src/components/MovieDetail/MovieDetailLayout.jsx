import React, { useEffect, useState } from 'react';
import { getMovieDetail } from 'util/consts';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/common';
import MovieDetail from './MovieDetail';

const MovieDetailLayout = () => {
  const [movieDetailData, setMovieDetailData] = useState(null);
  const id = useParams().id;

  const getMovieDetailData = async (id) => {
    setMovieDetailData(await getMovieDetail(id, 'ko-KR'));
  };

  useEffect(() => {
    getMovieDetailData(id);
  }, [id]);

  console.info(movieDetailData);

  return (
    movieDetailData && (
      <Layout children={<MovieDetail data={movieDetailData} />} />
    )
  );
};

export default MovieDetailLayout;
