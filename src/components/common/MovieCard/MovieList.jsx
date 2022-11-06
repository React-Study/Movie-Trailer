import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieList = ({ moiveList }) => {
  const { results } = moiveList;

  return (
    <ListBody>
      <div className="white_column no_pad">
        <div className="panel results">
          <div className="page_wrapper results">
            {results.map((data) => {
              return <MovieCard key={data.id} movieData={data} />;
            })}
          </div>
        </div>
      </div>
    </ListBody>
  );
};

export default MovieList;

const ListBody = styled.div`
  width: 100%;
  .white_column {
    padding: 0;
    padding-right: 0;
    max-width: calc(var(--maxPrimaryPageWidth) - 80px - 268px);
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 auto;
    padding-left: 30px;
    background: transparent;

    .panel {
      width: 100%;
      display: block;
      padding: 30px 0;
      border-top: none;
      padding-top: 0;
      padding-bottom: 0;

      .page_wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
`;
