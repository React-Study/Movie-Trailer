import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieList = ({ moiveList, pageAdd }) => {
  return (
    <div>
      <ListBody>
        <div className="panel results">
          <div className="page_wrapper results">
            {moiveList.map((data) => {
              return <MovieCard key={data.id} movieData={data} />;
            })}
            <LoadMore
              id="pagination_page_1"
              data-next-page="2"
              data-current-page="1"
              className="pagination infinite background_color light_blue"
            >
              <div className="load_more">
                <div
                  className="no_click load_more"
                  data-next-page="2"
                  data-current-page="1"
                  onClick={pageAdd}
                >
                  더 불러오기
                </div>
              </div>
            </LoadMore>
          </div>
        </div>
      </ListBody>
    </div>
  );
};

export default MovieList;

const ListBody = styled.div`
  box-sizing: border-box;
  padding: 0;
  width: calc(100vw - 80px - 268px);
  max-width: calc(var(--maxPrimaryPageWidth) - 80px - 268px);
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  padding-right: 0;
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
      margin-top: -30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

const LoadMore = styled.div`
  margin-top: 30px !important;
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--imageBorderRadius);
  background-color: rgba(var(--accountLightBlue), 1);
  color: #000;
  margin: 0;
  flex-wrap: wrap;
  align-content: center;

  .load_more {
    font-size: 1em;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    justify-content: center;
    margin-bottom: 0;
    cursor: pointer;
     {
      color: #0a1526;
      font-size: 1.2em;
      font-weight: 700;
      color: #fff;
    }

    .no_click:hover {
      color: #0a1526;
    }
  }
`;
