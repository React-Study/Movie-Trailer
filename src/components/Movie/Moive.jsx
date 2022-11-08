import { CardListLayout } from 'components/common';
import { MovieList } from 'components/common/MovieCard';
import { Title } from 'components/common/Title';
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
    <CardListLayout>
      <Title />
      {movieData !== null ? <MovieList moiveList={movieData} /> : null}
    </CardListLayout>
  );
};

export default Moive;
