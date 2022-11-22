import { CardListLayout } from 'components/common';
import { Filter } from 'components/common/Filter';
import { MovieList } from 'components/common/MovieCard';
import React, { useCallback, useEffect, useState } from 'react';
import { getMovie } from 'util/consts';
import { useInView } from 'react-intersection-observer';

const Moive = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(true);

  const getMovieData = useCallback(async () => {
    await getMovie('popular', { language: 'ko-KR', page: page }).then(
      (data) => {
        // setMovieList(movieList.concat(data.results));
        setMovieList((prevState) => prevState.concat(data.results));
      },
    );
  }, [page]);

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  const loadingChange = () => {
    setLoading(false);
    setPage(page + 1);
  };

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <CardListLayout>
      <Filter />
      {movieList.length > 0 ? (
        <MovieList
          myKey={ref}
          moiveList={movieList}
          loadingChange={loadingChange}
        />
      ) : null}
    </CardListLayout>
  );
};

export default Moive;
