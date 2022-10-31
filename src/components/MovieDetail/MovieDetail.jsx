import React, { useEffect, useState } from 'react';
import { getMovieDetail } from 'util/consts';
import { useParams } from 'react-router-dom';
import Layout from 'components/common/Layout/Layout';

const MovieDetail = () => {
  const [movieDetailData, setMovieDetailData] = useState([]);
  const id = useParams().id;

  const getMovieDetailData = async (id) => {
    setMovieDetailData(await getMovieDetail(id, 'ko-KR'));
  };

  useEffect(() => {
    getMovieDetailData(id);
  }, [id]);

  return <Layout>{console.info(movieDetailData)}</Layout>;
};

export default MovieDetail;
