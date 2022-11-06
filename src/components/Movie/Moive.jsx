import { Layout } from 'components/common';
import { MovieList } from 'components/common/MovieCard';
import React, { useEffect, useState } from 'react';
import { getMovie } from 'util/consts';

const Moive = () => {
  const [movieData, setMovieData] = useState(null);
  const page = 1;

  const getMovieData = async (page) => {
    setMovieData(await getMovie('popular', { language: 'ko-KR', page: page }));
  };

  useEffect(() => {
    getMovieData(page);
  }, [page]);

  return (
    <Layout>
      {console.info(movieData)}
      {movieData !== null ? <MovieList moiveList={movieData} /> : null}
    </Layout>
  );
};

export default Moive;
