import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IMAGE_URL } from 'util/consts';
import CharacterMovieList from './CharacterMovieList';
import CharacterActList from './CharacterActList';
import { useState } from 'react';

const CharacterDetail = ({ data, data2, data3, data4 }) => {
  console.info('111', data);
  console.info('222', data2);
  console.info('333', data3);
  console.info('444', data4);
  const {
    name,
    known_for_department,
    gender,
    birthday,
    place_of_birth,
    profile_path,
  } = data;
  const { translations } = data2;

  // useEffect(() => {
  //    if(data2 && data2.length > 0) {
  //       // console.info(data2.translations[0]);
  //     const {translations} = data2;
  //     console.info(translations)
  //    }
  // }, [data2])
  console.info(translations);

  // const year = Array(2022)
  //   .fill()
  //   .map((v, i) => i - 1);
  // console.info(year);

  let bio = translations ? translations[0].data.biography : '';
  console.info(bio);

  let personGender = '';
  if (gender === 2) {
    personGender = '남성';
  } else {
    personGender = '여성';
  }
 /* eslint-disable */
  const [btn_info, setBtn_info] = useState("all");
  // let btn_info = "모두";
  
  function btnClickMovie() {
    setBtn_info("movie");
    // console.info(btn_info)
  }

  function btnClickTv() {
    setBtn_info("tv");
    console.info(btn_info)
  }

  function btnClickAll() {
    setBtn_info("all");
  }

  function onToggle() {
    document.querySelector('.innerBox').classList.toggle('active')
  }

  return (
    <DetailBox>
      <LeftBox>
        {/* {console.info(data2.translations[0])} */}
        {/* {console.info(translations)} */}
        {/* {console.info(biography)} */}
        <img src={`${IMAGE_URL}${profile_path}`} alt="personImage" />
        <h2>인물 정보</h2>
        <h3>유명 분야</h3>
        <div>{known_for_department}</div>
        <h3>성별</h3>
        <div>{personGender}</div>
        <h3>생년월일</h3>
        <div>{birthday}</div>
        <h3>출생지</h3>
        <div>{place_of_birth}</div>
      </LeftBox>
      <RightBox>
        <h1>{name}</h1>
        <h2>약력</h2>
        <p>{bio}</p>
        <h2>유명 분야</h2>
        {/* {characterCreditData.cast} */}
        <CharacterMovieList data={data3} />
        <div className='tableBox'>
          <h2>연기</h2>
          <div className='btn'>
            <span onClick={onToggle}>미디어 ▼
              <div className='innerBox'>
                <ul>
                <li onClick={btnClickAll}>all</li>
                  <li onClick={btnClickMovie}>영화</li>
                  <li onClick={btnClickTv}>TV</li>
                </ul>
              </div>
            </span>
          </div>
        </div>
        <CharacterActList data={data4} btn_info={btn_info}/>
      </RightBox>
    </DetailBox>
  );
};

export default CharacterDetail;

const DetailBox = styled.div`
  padding: 80px 10%;
  display: flex;
  position: relative;
`;

const LeftBox = styled.div`
  img {
    border-radius: 15px;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  div {
    margin-bottom: 26px;
    font-size: 18px;
  }
`;

const RightBox = styled.div`
  with: 100%;
  margin-left: 40px;
  font-size: 36px;
  font-weight: bold;
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  p {
    font-size: 15px;
    font-weight: normal;
  }
  .tableBox {
    display: flex;
    justify-content: space-between;
    .btn {
      span {
        // background: red;
      }
      position: relative;
      font-size: 18px;
      font-weight: 500;
      margin-top: 40px;
      margin-bottom: 18px;
      margin-left: 80%;
      .innerBox.active {
        display: block;
      }
      .innerBox {
        display: none;
        position: absolute;
        margin-top: 15px;
        border: 1px solid #2d2d2d;
        width: 120px;
        height: 80px;
        background: white;
        ul {
          li {
            font-size: 15px;
            margin: 10px;
            width: 50%;
          }
        }
      }
    }
     span {
      cursor: pointer;
     }
  }
`;
