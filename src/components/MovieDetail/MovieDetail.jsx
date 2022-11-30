import React from 'react';
import MovieTitleLayout from './MovieTitleLayout';

const MovieDetail = ({ detail, credits, poster }) => {
  return <MovieTitleLayout detail={detail} credits={credits} poster={poster} />;
};

export default MovieDetail;
