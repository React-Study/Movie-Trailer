import React from 'react';
import { Header } from 'components/common';
import { Footer } from 'components/common';
import styled from 'styled-components';
import { Title } from '../Title';

const CardListLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <div className="inner_content">
          <div className="media discover">
            <div className="column_wrapper">
              <div className="content_wrapper">
                <Title />
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default CardListLayout;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  background-color: #fff;
  box-sizing: border-box;

  .inner_content {
    isplay: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    .media {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: flex-start;

      .column_wrapper {
        display: flex;
        align-items: flex-start;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;

        .content_wrapper {
          max-width: var(--maxPrimaryPageWidth);
          width: 100%;
          // display: flex;
          align-items: flex-start;
          align-content: flex-start;
          padding-left: 40px;
          padding-right: 40px;
          padding-top: 30px;
          padding-bottom: 30px;

          .content {
            width: 100%;
            display: flex;
            align-items: flex-start;
            align-content: flex-start;
          }
        }
      }
    }
  }
`;
