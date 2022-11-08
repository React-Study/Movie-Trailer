import React from 'react';
import styled from 'styled-components';

const Filter = () => {
  return (
    <div>
      <FilterDiv>
        <div className="name">
          <h2>정렬</h2>
          <span className="glyphicons_v2 chevron-right"></span>
        </div>
        <div className="filter">
          <h3>Sort Results By</h3>
        </div>
      </FilterDiv>
    </div>
  );
};

export default Filter;

const FilterDiv = styled.div`
  min-width: 260px;
  width: 260px;
  border: 1px solid #e3e3e3;
  border-radius: var(--imageBorderRadius);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;

  .name {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    padding: 14px 16px;

    h2 {
      font-size: 1.1em;
      margin: 0;
      padding: 0;
      font-weight: 600;
    }

    span {
      transform: rotate(90deg);
      background-image: url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg);
      position: relative;
      top: 0;
      left: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1em;
      min-height: 1em;
      width: 1em;
      height: 1em;
      line-height: inherit;
      background-position: center center;
      background-repeat: no-repeat;
      color: inherit;
      box-sizing: border-box;
    }
  }

  .filter {
    width: 100%;
    border-top: 1px solid #eee;
    padding: 14px 16px 16px 16px;

    h3 {
      display: inline-flex;
      align-items: center;
      width: 100%;
      font-size: 1em;
      font-weight: 300;
      margin-bottom: 10px;
    }
  }
`;
