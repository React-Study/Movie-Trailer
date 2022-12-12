import React, { useState } from 'react';
import styled from 'styled-components';

const Filter = () => {
  const [closeCheck, setCloseCheck] = useState(false);
  const [closeCheck2, setCloseCheck2] = useState(true);
  const [sortValue, setSortValue] = useState('popularity.asc');
  const [monetizationTypeValue, setMonetizationTypeValue] = useState(true);

  const [monetizationTypeList, setMonetizationTypeList] = useState([
    'flatrate',
    'free',
    'ads',
    'rent',
    'buy',
  ]);

  const [releaseTypeValue, setReleaseTypeValue] = useState(true);

  const [releaseTypeList, setReleaseTypeList] = useState([
    'flatrate',
    'free',
    'ads',
    'rent',
    'buy',
  ]);

  const monetizationTypeHandler = ({ target }) => {
    if (!target.checked) {
      setMonetizationTypeList(['flatrate', 'free', 'ads', 'rent', 'buy']);
    }
  };

  const checkHandler = ({ target }) => {
    if (target.checked) {
      setMonetizationTypeList([...monetizationTypeList, target.value]);
    } else {
      let list = monetizationTypeList.filter((data) => {
        return data !== target.value;
      });
      setMonetizationTypeList(list);
    }
  };

  const releaseTypeHandler = ({ target }) => {
    if (!target.checked) {
      console.info(releaseTypeList);
      setReleaseTypeList(['flatrate', 'free', 'ads', 'rent', 'buy']);
    }
  };

  return (
    <div>
      <FilterDiv className={`filter_panel card `}>
        <div className="name" onClick={() => setCloseCheck(!closeCheck)}>
          <h2>정렬</h2>
          <span
            className={`glyphicons_v2 chevron-right ${
              closeCheck ? 'closed' : ''
            }`}
          ></span>
        </div>
        <div className={`filter ${closeCheck ? 'closed' : ''}`}>
          <h3>Sort Results By</h3>
          <select
            value={sortValue}
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
          >
            <option value="popularity.asc">인기도 내림차순</option>
            <option value="popularity.desc">인기도 오름차순</option>
            <option value="vote_average.asc">평점 내림차순</option>
            <option value="vote_average.desc">평점 오름차순</option>
            <option value="primary_release_date.asc">상영일 내림차순</option>
            <option value="primary_release_date.desc">상영일 오름차순</option>
            <option value="original_title.asc">제목 내림차순</option>
            <option value="original_title.desc">제목 오름차순</option>
          </select>
        </div>
      </FilterDiv>
      <FilterTwoDiv className={`filter_panel card `}>
        <div className="name" onClick={() => setCloseCheck2(!closeCheck2)}>
          <h2>필터</h2>
          <span
            className={`glyphicons_v2 chevron-right ${
              closeCheck2 ? 'closed' : ''
            }`}
          ></span>
        </div>
        <div className={`filter ${closeCheck2 ? 'closed' : ''}`}>
          <h3>Availabilities</h3>
          <label className="k-form-field">
            <input
              id="all_availabilities"
              className="k-checkbox"
              type="checkbox"
              name="all_availabilities"
              value="true"
              defaultChecked={monetizationTypeValue}
              onClick={() => setMonetizationTypeValue(!monetizationTypeValue)}
              onChange={(e) => {
                monetizationTypeHandler(e);
              }}
            />
            <label htmlFor="all_availabilities" className="k-checkbox-label">
              Search all availabilities?
            </label>
          </label>
          {!monetizationTypeValue ? (
            <div id="availabilities_wrapper" className="labels">
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_flatrate"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="flatrate"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_flatrate"
                  className="k-checkbox-label"
                >
                  Stream
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_free"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="free"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_free"
                  className="k-checkbox-label"
                >
                  Free
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_ads"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="ads"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_ads"
                  className="k-checkbox-label"
                >
                  Ads
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_rent"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="rent"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_rent"
                  className="k-checkbox-label"
                >
                  Rent
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_buy"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="buy"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_buy"
                  className="k-checkbox-label"
                >
                  Buy
                </label>
              </label>
            </div>
          ) : null}
        </div>
        <div className={`filter ${closeCheck2 ? 'closed' : ''}`}>
          <h3>Release Dates</h3>
          <label className="k-form-field">
            <input
              id="all_releases"
              className="k-checkbox"
              type="checkbox"
              name="all_releases"
              value="true"
              defaultChecked={releaseTypeValue}
              onClick={() => setReleaseTypeValue(!releaseTypeValue)}
              onChange={(e) => {
                releaseTypeHandler(e);
              }}
            />
            <label htmlFor="all_releases" className="k-checkbox-label">
              Search all releases?
            </label>
          </label>
          {!releaseTypeValue ? (
            <div id="availabilities_wrapper" className="labels">
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_flatrate"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="flatrate"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_flatrate"
                  className="k-checkbox-label"
                >
                  Stream
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_free"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="free"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_free"
                  className="k-checkbox-label"
                >
                  Free
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_ads"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="ads"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_ads"
                  className="k-checkbox-label"
                >
                  Ads
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_rent"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="rent"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_rent"
                  className="k-checkbox-label"
                >
                  Rent
                </label>
              </label>
              <label className="k-form-field">
                <input
                  id="ott_monetization_type_buy"
                  className="k-checkbox"
                  type="checkbox"
                  name="all_availabilities"
                  value="buy"
                  defaultChecked={true}
                  onChange={(e) => checkHandler(e)}
                />
                <label
                  htmlFor="ott_monetization_type_buy"
                  className="k-checkbox-label"
                >
                  Buy
                </label>
              </label>
            </div>
          ) : null}
        </div>
      </FilterTwoDiv>
    </div>
  );
};

export default Filter;

const FilterDiv = styled.div`

  div.name span.chevron-right {
    transform: rotate(90deg);
  }

  div.name span.closed {
    transform: rotate(0);
  }

  .filter.closed {
    display: none !important;
  }

  
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
      // transform: rotate(90deg);
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
    select {
      font-size: 0.9em;
      width: 100%;
      font-family: 'Source Sans Pro', Arial, sans-serif;
      border-width: 0;
      outline: 0;
      background: 0 0;
      box-sizing: border-box;
      line-height: 1.5;
      text-align: left;
      white-space: nowrap;
      display: inline-flex;
      vertical-align: middle;
      position: relative;
      -webkit-tap-highlight-color: transparent;
      border-color: #e4e7eb;
      color: #212529;
      background-color: #e4e7eb;
      transition: color .2s ease-in-out,background-color .2s ease-in-out,border-color .2s ease-in-out,box-shadow .2s ease-in-out;
      border-radius: 0.25rem;
      padding: 0;
      width: 100%;
      display: flex;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      border-width: 1px;
      border-style: solid;
      box-sizing: border-box;
      position: relative;
      transition: all .1s ease;
      cursor: pointer;
      outline: 0;
      margin: 0;
      padding: 0.375rem 0.75rem;
      width: 100%;
      min-width: 0;
      height: calc(1.5em + 0.75rem);
      border: 0;
      outline: 0;
      box-sizing: border-box;
      box-shadow: none;
      color: inherit;
      // background: 0 0;
      font: inherit;
      display: flex;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
  
      }
    }
  }
`;

const FilterTwoDiv = styled.div`
  div.name span.chevron-right {
    transform: rotate(90deg);
  }

  div.name span.closed {
    transform: rotate(0);
  }

  .filter.closed {
    display: none !important;
  }

  margin-top: 15px;
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
      // transform: rotate(90deg);
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
    select {
      font-size: 0.9em;
      width: 100%;
      font-family: 'Source Sans Pro', Arial, sans-serif;
      border-width: 0;
      outline: 0;
      background: 0 0;
      box-sizing: border-box;
      line-height: 1.5;
      text-align: left;
      white-space: nowrap;
      display: inline-flex;
      vertical-align: middle;
      position: relative;
      -webkit-tap-highlight-color: transparent;
      border-color: #e4e7eb;
      color: #212529;
      background-color: #e4e7eb;
      transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
        border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      border-radius: 0.25rem;
      padding: 0;
      width: 100%;
      display: flex;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      border-width: 1px;
      border-style: solid;
      box-sizing: border-box;
      position: relative;
      transition: all 0.1s ease;
      cursor: pointer;
      outline: 0;
      margin: 0;
      padding: 0.375rem 0.75rem;
      width: 100%;
      min-width: 0;
      height: calc(1.5em + 0.75rem);
      border: 0;
      outline: 0;
      box-sizing: border-box;
      box-shadow: none;
      color: inherit;
      // background: 0 0;
      font: inherit;
      display: flex;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .k-checkbox:checked {
      border-color: rgba(var(--accountLightBlue), 1);
      color: #fff;
      background-color: rgba(var(--accountLightBlue), 1);
    }
    .k-checkbox + .k-checkbox-label,
    .k-checkbox-label + .k-checkbox {
      margin-left: 0.25rem;
    }

    .k-checkbox + .k-checkbox-label {
      display: inline;
    }
    .k-checkbox-label {
      margin: 0;
      padding: 0;
      line-height: calc(1rem + 1px);
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-align: start;
      align-items: flex-start;
      vertical-align: middle;
      position: relative;
      cursor: pointer;
    }

    .k-form-field {
      margin-top: 6px;
      display: inline-flex;
      width: 100%;
    }
  }
`;
