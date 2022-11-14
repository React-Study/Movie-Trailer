import React from 'react';
import styled from 'styled-components';
import { BASE_IMAGE_URL, w220h330 } from 'util/consts';
import { createGlobalStyle } from 'styled-components';

const MovieCard = ({ movieData }) => {
  const { poster_path, release_date } = movieData;
  return (
    <CardBody>
      <GlobalStyles />
      <div className="image">
        <div className="wrapper">
          <div className="imageClick">
            <img
              className="poster"
              src={`${BASE_IMAGE_URL}${w220h330}${poster_path}`}
            />
          </div>
        </div>
      </div>
      <Content>
        <h2>
          <div className="titleName">{movieData.title}</div>
        </h2>
        <p>{release_date}</p>
      </Content>
      <Hover />
    </CardBody>
  );
};

export default MovieCard;

const GlobalStyles = createGlobalStyle`
html {
  --numberOfDiscoverColumns: 5;
  --discoverColumnPadding: 30px;
}
html {
  --numberOfPosterColumns: 5;
  --numberOfBackdropColumns: 4;
  --imageColumnPadding: 30px;
}

html {
  --scrollerGrey: 219, 219, 219;
  --lightGrey: 227, 227, 227;
  --darkerGrey: 200, 200, 200;
  --tmdbDarkBlue: 3, 37, 65;
  --tmdbLightBlue: 1, 180, 228;
  --tmdbLighterGreen: 192, 254, 207;
  --tmdbLightGreen: 30, 213, 169;
  --tmdbLogoGreen: 144, 206, 161;
  --tmdbLogoOrange: 253, 193, 112;
  --tmdbLogoRed: 217, 59, 99;
  --accountSilver: 149, 149, 149;
  --accountPink: 234, 20, 140;
  --accountPurple: 128, 91, 231;
  --accountGreen: 1, 210, 119;
  --accountTeal: 1, 198, 172;
  --accountLightBlue: 1, 180, 228;
  --accountBlue: 1, 119, 210;
  --accountOrange: 210, 119, 1;
  --accountYellow: 210, 144, 1;
  --accountRed: 212, 2, 66;
  --imageBorderRadius: 8px;
  --maxPrimaryPageWidth: 1400px;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}



@media only screen and (min-width: 1240px) html {
  --numberOfDiscoverColumns: 5;
}

@media only screen and (min-width: 1040px) html {
  --numberOfDiscoverColumns: 4;
}
@media only screen and (min-width: 900px) html {
  --numberOfDiscoverColumns: 3;
}
@media only screen and (min-width: 700px) html {
  --numberOfDiscoverColumns: 2;
}

@media only screen and (min-width: 1400px) html {
  --numberOfBackdropColumns: 4;
}
@media only screen and (min-width: 1300px) html {
  --numberOfPosterColumns: 4;
}
@media only screen and (min-width: 1200px) html {
  --numberOfBackdropColumns: 3;
}
@media only screen and (min-width: 1000px) html {
  --numberOfPosterColumns: 3;
}
@media only screen and (min-width: 900px) html {
  --numberOfBackdropColumns: 2;
}
@media only screen and (min-width: 760px) html {
  --numberOfPosterColumns: 2;
}



`;

const Hover = styled.div``;

const Content = styled.div`
  align-items: flex-start;
  width: 100%;
  padding: 26px 10px 12px 10px;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;

  h2 {
    font-size: 1em;
    font-weight: 600;
    margin: 0;
    width: 100%;
    overflow-wrap: break-word;
    padding: 0;
    box-sizing: border-box;
    .poster {
      font-weight: 700;
      color: #000;
    }
  }

  p {
    font-size: 1em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const CardBody = styled.div`
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
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;

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
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #000;

        .poster {
          outline: none;

          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
