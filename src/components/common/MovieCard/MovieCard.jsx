import React from 'react';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w220h330 } from 'util/consts';

const MovieCard = ({ movieData }) => {
  return (
    <CardBody>
      <div className="image">
        <div className="wrapper">
          <div className="imageClick">
            <img
              className="poster"
              src={`${BASE_IMAGE_URL}${w220h330}${movieData.poster_path}`}
            />
          </div>
        </div>
      </div>
      <Content>
        <h2>
          <div className="titleName">{/* {movieData.title} */}</div>
        </h2>
        <p>{movieData.release_date}</p>
      </Content>
      <Hover />
    </CardBody>
  );
};

export default MovieCard;

const Hover = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
  border-radius: var(--imageBorderRadius);
  z-index: 5;
  transition: linear 0.1s;
  opacity: 0;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  padding: 26px 10px 12px 10px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  h2 {
    padding: 0;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 1em;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;

    .titleName {
      text-decoration: none;
      font-weight: 700;
      color: #000;
    }
  }

  p {
    box-sizing: border-box;
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const CardBody = styled.div`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  overflow: hidden;
  margin-top: 30px;
  width: calc(
    (
        100vw - 80px - 260px -
          (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
      ) / var(--numberOfDiscoverColumns)
  );
  max-width: calc(
    (
        var(--maxPrimaryPageWidth) - 80px - 260px -
          (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
      ) / var(--numberOfDiscoverColumns)
  );

  .image {
    width: 100%;
    height: calc(
      (
          100vw - 80px - 260px -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns) * 1.5
    );
    max-height: calc(
      (
          var(--maxPrimaryPageWidth) - 80px - 260px -
            (var(--discoverColumnPadding) * var(--numberOfDiscoverColumns))
        ) / var(--numberOfDiscoverColumns) * 1.5
    );

    .wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;

      .imageClick {
        text-decoration: none;
        font-weight: normal;

        color: #000;
        display: inline-block;
        width: 100%;
        height: 100%;

        .poster {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
