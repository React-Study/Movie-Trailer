import { CardListLayout } from 'components/common';
import { Filter } from 'components/common/Filter';
import { MovieList } from 'components/common/MovieCard';
import React, { useEffect, useState } from 'react';
import { getMovie } from 'util/consts';

const Moive = () => {
  const [movieData, setMovieData] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  const getMovieData = async (page) => {
    if (page === 1) {
      await getMovie('popular', { language: 'ko-KR', page: page }).then(
        (data) => {
          setMovieData(data);
          setMovieList(data.results);
        },
      );
    } else {
      await getMovie('popular', { language: 'ko-KR', page: page }).then(
        (data) => {
          setMovieList([...movieList, ...data.results]);
        },
      );
    }
  };

  useEffect(() => {
    getMovieData(page);
  }, [page]);

  const pageAdd = () => {
    setPage(page + 1);
  };

  return (
    <CardListLayout>
      <Filter />
      {movieData !== null ? (
        <MovieList moiveList={movieList} pageAdd={pageAdd} />
      ) : null}
    </CardListLayout>
  );
};

export default Moive;
