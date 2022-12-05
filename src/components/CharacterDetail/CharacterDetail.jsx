import React from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IMAGE_URL } from 'util/consts';
import CharacterMovieList from './CharacterMovieList';

const CharacterDetail = ({data, data2, data3}) => {
  console.info('111', data);
  console.info('222', data2);
  console.info('333', data3);
  const {
    name,
    known_for_department,
    gender,
    birthday,
    place_of_birth,
    profile_path
  } = data;
  const {
    translations
  } = data2;
  const {
    cast
  } = data3;
  // useEffect(() => {
	// 	if(data2 && data2.length > 0) {
	// 		// console.info(data2.translations[0]);
  //     const {translations} = data2;
  //     console.info(translations)
	// 	}
	// }, [data2])
  console.info(translations)
  
  const year = Array(2022).fill().map((v, i) => i-1);
  console.info(year);
  

  let bio = translations? translations[0].data.biography : '';
  console.info(bio);

  let personGender = '';
  if(gender === 2 ) { personGender = '남성'; } 
  else { personGender = '여성'; }

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
          <CharacterMovieList data={data3}/>
          <h2>연기</h2>
          <ActingBox>
            {cast && cast.sort((a,b)=>b.release_date.split('-')[0]-a.release_date.split('-')[0]).filter((a)=>  
            
              2000 === Number(a.release_date.split('-')[0])
              ).map(e=>(
              console.info('hohoho',e.release_date)
              // console.info(e.character)
              // console.info(e.title)
                  // <div key={e.id}>
                  //   <table>
                  //     <tr>
                  //       <td class='act_date'>{e.release_date.split('-')[0]}</td>
                  //       <td class='act_title'>{e.title}</td>
                  //       <td class='act_character'>{e.character} 역</td>
                  //     </tr>
                  //   </table>
                  // </div>


            ))}
          </ActingBox>
        </RightBox>
    </DetailBox>
  );
};

export default CharacterDetail;

const ActingBox = styled.div`
  tr {
    .act_date {
      font-size: 17px;
      color: rgba(0,0,0,0.6);
    }
    .act_title {
      font-size: 18px;
    }
    .act_character {
      font-size: 17px;
      font-weight: 500;
      color: rgba(0,0,0,0.5);
      padding-left: 5px;
    }
  }
`;

const DetailBox = styled.div`
  padding: 80px 10%;
  display: flex;
  position: relative;
`;

const LeftBox = styled.div`
  img {
    border-radius: 15px;
  }
  h2{
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  h3{
    font-size: 18px;
    font-weight: bold;
  }
  div{
    margin-bottom: 26px;
    font-size: 18px;
  }
`;

const RightBox = styled.div`
with: 100%;
  margin-left: 40px;
  font-size: 36px;
  font-weight: bold;
  h2{
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 18px;
  }
  p {
    font-size: 15px;
    font-weight: normal;
  }
`;